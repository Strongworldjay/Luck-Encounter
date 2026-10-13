import test from 'node:test';
import assert from 'node:assert/strict';
import { toEntries } from '../src/data/items/index.js';
import { CHEST_GROUPS } from '../src/config/itemGroups.js';
import { SPECIAL_DROPS } from '../src/config/chests.js';
import { LOOT_BOX_WEIGHTS } from '../src/config/lootBoxes.js';
import { lootBoxPools, openLootBox } from '../src/utils/lootBoxes.js';

const entries = toEntries();
const filters = { query:'', categories:[], types:[], themes:[], rarities:[] };

test('six loot box tiers run from Common to Unique with complete rarity odds', () => {
  assert.deepEqual(Object.keys(LOOT_BOX_WEIGHTS), ['Common','Uncommon','Rare','VeryRare','Legendary','Unique']);
  for (const weights of Object.values(LOOT_BOX_WEIGHTS)) {
    assert(Math.abs(Object.values(weights).reduce((sum, chance) => sum + chance, 0) - 1) < 1e-10);
  }
});

test('all box types use the existing item groups without miscellaneous draws or currency', () => {
  for (const type of Object.keys(CHEST_GROUPS)) {
    const { main } = lootBoxPools(entries, filters, type);
    assert(main.length, `${type} has main rewards`);
    for (const rarity of Object.keys(LOOT_BOX_WEIGHTS)) {
      const result = openLootBox(entries, { type, rarity, filters }, () => .999);
      assert(result);
      assert.equal(result.items.length, 1);
      assert(CHEST_GROUPS[type].includes(result.items[0].category));
      assert(result.items.every((item) => item.category !== 'Misc'));
      assert.equal('gold' in result, false);
      assert.equal('lockDC' in result, false);
    }
  }
});

test('box filters constrain main reward; protected extras remain possible', () => {
  const restricted = { ...filters, categories:['Sword'], types:['Dragon'], themes:['Ancient'] };
  const pools = lootBoxPools(entries, restricted, 'Melee Weapon');
  assert(pools.main.length);
  assert(pools.main.every((item) => item.category === 'Sword' && item.types.includes('Dragon') && item.themes.includes('Ancient')));
  const thresholds = Object.entries(SPECIAL_DROPS.chances);
  let start = 0;
  for (const [category, chance] of thresholds) {
    if (category === 'Ammunition') { start += chance; continue; }
    const roll = start + chance / 2;
    const result = openLootBox(entries, { rarity:'Rare', type:'Melee Weapon', filters:restricted }, (() => {
      let calls = 0; return () => ++calls === 4 ? roll : 0;
    })());
    assert.equal(result.items.length, 2, category);
    assert.equal(result.items[0].category, 'Sword');
    assert.equal(result.items[1].category, category);
    start += chance;
  }
  const noBonus = openLootBox(entries, { rarity:'Rare', type:'Melee Weapon', filters:restricted }, () => .999);
  assert.equal(noBonus.items.length, 1);
  assert.equal(openLootBox(entries, { rarity:'Common', type:'Unknown', filters }), null);
});
