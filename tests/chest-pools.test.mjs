import test from 'node:test';
import assert from 'node:assert/strict';
import { EMPTY_FILTERS, toEntries } from '../src/data/items/index.js';
import { CHEST_GROUPS } from '../src/config/itemGroups.js';
import { SPECIAL_DROPS } from '../src/config/chests.js';
import { chestPools, UNFILTERED_CHEST_CATEGORIES } from '../src/utils/chestPools.js';

const entries = toEntries();
const filters = { ...EMPTY_FILTERS, categories: ['Sword'], types: ['Dragon'], themes: ['Obsidian'] };

test('potions, scrolls, and gems including runestones stay eligible in every chest', () => {
  const all = Object.fromEntries(UNFILTERED_CHEST_CATEGORIES.map((category) => [category,
    entries.filter((item) => item.category === category).map((item) => item.entryId)]));
  assert(all.Gems.length && all.Potion.length && all.Scrolls.length);
  assert(entries.some((item) => item.category === 'Gems' && /runestone/i.test(item.name)));
  for (const chestType of Object.keys(CHEST_GROUPS)) {
    const pools = chestPools(entries, filters, chestType);
    for (const category of UNFILTERED_CHEST_CATEGORIES) {
      assert.deepEqual(pools.bonus[category].map((item) => item.entryId), all[category], `${chestType}: ${category}`);
    }
    assert(pools.main.every((item) => item.category === 'Sword' && item.types.includes('Dragon') && item.themes.includes('Obsidian')));
  }
});

test('unfiltered supplies remain in the Random main pool under type and theme filters', () => {
  const pools = chestPools(entries, { ...EMPTY_FILTERS, types: ['Dragon'], themes: ['Obsidian'] }, 'Random');
  for (const category of UNFILTERED_CHEST_CATEGORIES) {
    assert(pools.main.some((item) => item.category === category));
    assert.equal(pools.main.filter((item) => item.category === category).length, pools.bonus[category].length);
  }
  assert(pools.main.filter((item) => item.category === 'Sword').every((item) => item.types.includes('Dragon') && item.themes.includes('Obsidian')));
});

test('specific equipment selection filters main reward, while bonus odds remain unchanged', () => {
  assert.deepEqual(SPECIAL_DROPS.chances, { Potion: 0.05, Ammunition: 0.05, Scrolls: 0.05, Gems: 0.04 });
  const pools = chestPools(entries, { ...EMPTY_FILTERS, categories: ['Bow'], types: ['Dragon'], themes: ['Obsidian'] }, 'Ranged Weapon');
  assert(pools.main.every((item) => item.category === 'Bow'));
  assert(pools.main.every((item) => item.types.includes('Dragon') && item.themes.includes('Obsidian')));
  assert.equal(pools.bonus.Ammunition.length, 0);
  assert(pools.bonus.Potion.length && pools.bonus.Scrolls.length && pools.bonus.Gems.length);
});
