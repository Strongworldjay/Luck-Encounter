import test from 'node:test';
import assert from 'node:assert/strict';
import { ITEMS, toEntries } from '../src/data/items/index.js';
import { NEW_ART_FAMILIES, NEW_ART_ITEMS } from '../src/data/items/newArts.js';
import { crystalPools } from '../src/utils/monsterCrystals.js';
import { SPECIAL_DROPS } from '../src/config/chests.js';

const ranks = ['F','D','C','B','A','S'];
const rankRarity = { F:'Common', D:'Uncommon', C:'Rare', B:'VeryRare', A:'Legendary', S:'Unique' };
const books = ITEMS.filter((item) => item.variants[0]?.category === 'SkillBook');
const expected = [
  'Blood Manipulation: Shield', 'Blood Manipulation: Tendrils', 'Blood Manipulation: Bound Wounds',
  'Hellfire Winds', 'Hellfire Spire', 'Misty Day', 'Shattering',
  'Pebble Shot', 'Boundless massacre', 'Lethal Punisher', 'Gale Slash', 'Rock Smasher',
  'Collision Counter', 'Apocalypse', 'Catastrophe', 'Armageddom',
  'Infighting', 'Inverse Gravity: Self', 'Climax Booster', 'Substitution Log',
  ...['Wolf','Tiger','Boar','Bear','Eagle','Crocodile','Gorilla','Panther','Rhinoceros'].map((name) => `Beast Transformation: ${name}`),
  ...['Tyrant King','Sky Terror','Saberfang','Thunderhorn','Stoneback','Deepjaw','Mammoth Lord'].map((name) => `Ancient Transformation: ${name}`),
  ...['Red Dragon','Blue Dragon','Black Dragon','White Dragon','Green Dragon','Gold Dragon','Silver Dragon','Bronze Dragon','Storm Drake','Wyvern','Sea Drake','Magma Drake'].map((name) => `Draconic Transformation: ${name}`),
  ...['Phoenix','Unicorn','Griffin','Chimera','Basilisk','Manticore','Kirin','Thunderbird','Cerberus'].map((name) => `Mythical Transformation: ${name}`),
  ...['World Serpent','Abyssal Leviathan','First Dragon','World Turtle','Celestial Behemoth','Sun Eater','Void Maw'].map((name) => `Primordial Transformation: ${name}`),
  'Moon Bounce', 'Hot Start', 'Unbreakable', 'Karmic Embrace', "Cat's Eye",
];

test('all requested Art families exist exactly once and have the correct rank floor', () => {
  assert.equal(NEW_ART_FAMILIES.length, 69);
  assert.equal(NEW_ART_ITEMS.length, 328);
  assert.deepEqual(NEW_ART_FAMILIES.map((family) => family.name), expected);
  assert.equal(new Set(expected).size, expected.length);
  for (const family of NEW_ART_FAMILIES) {
    const variants = NEW_ART_ITEMS.filter((item) => item.name.startsWith(`${family.name} `));
    const expectedRanks = ranks.slice(ranks.indexOf(family.firstRank));
    assert.deepEqual(variants.map((item) => item.name), expectedRanks.map((rank) => `${family.name} ${rank}`), family.name);
    assert.deepEqual(variants.map((item) => item.variants[0].rarity), expectedRanks.map((rank) => rankRarity[rank]), family.name);
    assert(variants.every((item) => item.variants[0].category === family.category));
  }
});

test('one correctly rated Skill Book exists for every new Art family', () => {
  for (const family of NEW_ART_FAMILIES) {
    const matching = books.filter((item) => item.teachesArt.name === family.name);
    assert.equal(matching.length, 1, family.name);
    assert.equal(matching[0].teachesArt.category, family.category);
    assert.equal(matching[0].variants[0].rarity, family.bookRarity ?? 'Uncommon', family.name);
    assert.deepEqual(matching[0].types, family.types);
    assert(family.themes.every((theme) => matching[0].themes.includes(theme)));
  }
  assert.equal(books.length, 182);
});

test('higher-rarity Skill Books remain eligible in chest and matching crystal pools', () => {
  assert.deepEqual(SPECIAL_DROPS.rarityWeights.SkillBook, { Uncommon:.82, Rare:.14, VeryRare:.035, Legendary:.005 });
  for (const rarity of ['Uncommon','Rare','VeryRare','Legendary']) {
    assert(books.some((book) => book.variants[0].rarity === rarity));
  }
  const dragon = crystalPools(toEntries(), { type:'Dragon', rarity:'Rare' });
  assert(dragon.matching.some((item) => item.category === 'SkillBook' && item.name === 'Boost Art Skill Book: Draconic Transformation: Red Dragon'));
});
