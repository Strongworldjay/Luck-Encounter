import test from 'node:test';
import assert from 'node:assert/strict';
import { ITEMS, toEntries, filterEntries } from '../src/data/items/index.js';
import { WEAPON_FORMS, ARMOR_FORMS, RESOURCE_EQUIPMENT } from '../src/data/items/resourceEquipment.js';
import { chestPools } from '../src/utils/chestPools.js';
import { crystalPools } from '../src/utils/monsterCrystals.js';

const tiers = [['', 'Common'], [', +1', 'Uncommon'], [', +2', 'Rare'], [', +3', 'VeryRare']];
const entries = toEntries();

test('each standard weapon and armor form has one Mana and Stamina item at each requested tier', () => {
  assert.equal(WEAPON_FORMS.length, 39);
  assert.equal(ARMOR_FORMS.length, 13);
  assert.equal(RESOURCE_EQUIPMENT.length, 2 * 4 * (WEAPON_FORMS.length + ARMOR_FORMS.length));
  for (const resource of ['Mana', 'Stamina']) for (const [form, category] of [...WEAPON_FORMS, ...ARMOR_FORMS]) {
    for (const [suffix, rarity] of tiers) {
      const name = `${resource} ${form}${suffix}`;
      const matches = ITEMS.filter((item) => item.name === name);
      assert.equal(matches.length, 1, name);
      assert.deepEqual(matches[0].variants, [{ category, rarity }], name);
      assert.deepEqual(matches[0].types, ['Neutral'], name);
      assert(matches[0].themes.includes(resource === 'Mana' ? 'Arcane' : 'Primal'), name);
    }
  }
});

test('resource equipment is available to the shared filters, chest pools and neutral crystal rewards', () => {
  const filtered = filterEntries(entries, { query: 'Mana Scimitar', categories: ['Sword'], rarities: ['Rare'] });
  assert.deepEqual(filtered.filter((item) => item.name === 'Mana Scimitar, +2').map((item) => item.rarity), ['Rare']);
  assert(chestPools(entries, { categories: ['HeavyArmor'], types: [], themes: [] }, 'Heavy Armor')
    .main.some((item) => item.name === 'Stamina Plate, +3'));
  assert(crystalPools(entries, { type: 'Dragon', rarity: 'Rare' }).neutral
    .some((item) => item.name === 'Mana Scimitar, +2'));
});
