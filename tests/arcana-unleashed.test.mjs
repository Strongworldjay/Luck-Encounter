import test from 'node:test';
import assert from 'node:assert/strict';
import { ALL_SPELLS } from '../src/data/spells/index.js';
import { ARCANA_UNLEASHED_SPELLS } from '../src/data/spells/arcanaUnleashed.js';
import { ITEMS, toEntries } from '../src/data/items/index.js';
import { ARCANA_UNLEASHED_ITEMS } from '../src/data/items/arcanaUnleashed.js';
import { SHOP_ITEM_CATEGORIES } from '../src/config/itemGroups.js';

const key = (name) => name.normalize('NFKC').replace(/[’‘]/g, "'").toLowerCase();

test('all supplied spell versions replace their namesake and retain their source, level and mechanics', () => {
  assert.equal(ARCANA_UNLEASHED_SPELLS.length, 33);
  for (const supplied of ARCANA_UNLEASHED_SPELLS) {
    const matches = ALL_SPELLS.filter((spell) => key(spell.name) === key(supplied.name));
    assert.equal(matches.length, 1, supplied.name);
    assert.equal(matches[0].spellLevel, supplied.spellLevel, supplied.name);
    assert.deepEqual(matches[0].sources, ['Arcana Unleashed'], supplied.name);
    assert.ok(matches[0].descriptionMd.length > 20, supplied.name);
  }
  assert.match(ALL_SPELLS.find((s) => s.name === 'Summon Dinosaur').descriptionMd, /Dinosaur Spirit[\s\S]*Multiattack/);
  assert.match(ALL_SPELLS.find((s) => s.name === 'Summon Plant').descriptionMd, /Plant Spirit[\s\S]*Twist Away/);
});

test('the 47 listed items exist once at their supplied rarities and enter item reward pools', () => {
  assert.equal(ARCANA_UNLEASHED_ITEMS.length, 47);
  const entries = toEntries();
  for (const supplied of ARCANA_UNLEASHED_ITEMS) {
    const matches = ITEMS.filter((item) => key(item.name) === key(supplied.name));
    assert.equal(matches.length, 1, supplied.name);
    assert.equal(matches[0].source, 'Arcana Unleashed', supplied.name);
    assert.deepEqual(matches[0].variants, supplied.variants, supplied.name);
    assert.ok(entries.some((entry) => entry.itemId === supplied.id), supplied.name);
    assert.ok(SHOP_ITEM_CATEGORIES.includes(supplied.variants[0].category), supplied.name);
  }
  assert.equal(ITEMS.find((item) => item.name === 'Universal Pantograph').variants[0].rarity, 'Unique');
});
