import test from 'node:test';
import assert from 'node:assert/strict';
import { ITEMS, RARITIES, toEntries } from '../src/data/items/index.js';
import { WORLD_ART_CATEGORIES } from '../src/data/items/taxonomy.js';
import { artFamilyName } from '../src/data/items/skillBooks.js';
import { SHOP_ITEM_CATEGORIES, SHOP_PRESETS } from '../src/config/itemGroups.js';
import { REWARD_ITEM_TYPES } from '../src/config/rewards.js';
import { CRYSTAL_ITEM_CATEGORIES } from '../src/config/monsterCrystals.js';

const entries = toEntries();
const arts = entries.filter((item) => WORLD_ART_CATEGORIES.includes(item.category));
const books = ITEMS.filter((item) => item.variants.some((variant) => variant.category === 'SkillBook'));

test('each World Art family has one category, including formerly duplicated families', () => {
  const categories = new Map();
  for (const art of arts) {
    const name = artFamilyName(art.name);
    if (categories.has(name)) assert.equal(art.category, categories.get(name), name);
    categories.set(name, art.category);
  }
  assert.equal(categories.get('A Thousand Cuts'), 'PassiveArt');
  assert.equal(categories.get('Folkvangr'), 'WeaponArt');
  assert.equal(categories.get('Flash'), 'MagicArt');
  assert.equal(categories.get('Smash'), 'WeaponArt');
  assert.deepEqual(arts.filter((art) => /^Flash [FDCBAS]$/.test(art.name)).map((art) => art.rarity).sort(), [...RARITIES].sort());
});

test('every family has exactly one Skill Book regardless of ranks', () => {
  const families = new Set(arts.map((art) => artFamilyName(art.name)));
  assert.equal(books.length, families.size);
  assert.equal(new Set(books.map((book) => book.teachesArt.name)).size, books.length);
  assert(books.every((book) => book.variants.length === 1 && ['Uncommon','Rare'].includes(book.variants[0].rarity)));
  assert(books.every((book) => book.themes.includes('Paper')));
  const named = (name) => books.find((book) => book.name === name);
  assert.equal(named('Passive Art Skill Book: A Thousand Cuts').variants[0].rarity, 'Uncommon');
  assert.equal(named('Weapon Art Skill Book: Smash').variants[0].rarity, 'Uncommon');
  assert.equal(named('Magic Art Skill Book: Flash').variants[0].rarity, 'Uncommon');
  assert.equal(named('Passive Art Skill Book: Acid Resistance').variants[0].rarity, 'Rare');
  assert.equal(named('Passive Art Skill Book: Recycle').variants[0].rarity, 'Uncommon');
});

test('shops and crystal rewards include books, while direct Arts and resources stay out', () => {
  const disallowed = [...WORLD_ART_CATEGORIES, 'Mana', 'Stamina', 'SkillPoints', 'Experience', 'EXP'];
  for (const category of disallowed) {
    assert(!SHOP_ITEM_CATEGORIES.includes(category));
    assert(!CRYSTAL_ITEM_CATEGORIES.includes(category));
  }
  assert(SHOP_ITEM_CATEGORIES.includes('SkillBook'));
  assert(SHOP_PRESETS['Magic Shop'].includes('SkillBook'));
  assert(Object.values(SHOP_PRESETS).every((preset) => preset.every((category) => SHOP_ITEM_CATEGORIES.includes(category))));
  assert(CRYSTAL_ITEM_CATEGORIES.includes('SkillBook'));
  assert(!REWARD_ITEM_TYPES.includes('SkillBook'));
  assert(WORLD_ART_CATEGORIES.every((category) => REWARD_ITEM_TYPES.includes(category)));
});
