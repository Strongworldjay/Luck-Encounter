import { CHEST_GROUPS } from '../config/itemGroups.js';
import { LOOT_BOX_WEIGHTS } from '../config/lootBoxes.js';
import { SPECIAL_DROPS } from '../config/chests.js';
import { chestPools } from './chestPools.js';
import { drawItem } from './items.js';
import { weightedKey } from './random.js';

export function lootBoxPools(entries, filters, type) {
  if (!Object.hasOwn(CHEST_GROUPS, type)) return { main: [], bonus: {} };
  const { main, bonus } = chestPools(entries, filters, type);
  return { main: main.filter((item) => item.category !== 'Misc' && item.category !== 'SkillBook'), bonus };
}

export function openLootBox(entries, { rarity, type, filters }, random = Math.random) {
  if (!Object.hasOwn(LOOT_BOX_WEIGHTS, rarity) || !Object.hasOwn(CHEST_GROUPS, type)) return null;
  const { main, bonus } = lootBoxPools(entries, filters, type);
  if (!main.length) return null;
  const first = drawItem(main, { rarity: weightedKey(LOOT_BOX_WEIGHTS[rarity], random), random });
  if (!first) return null;
  const items = [first];
  let roll = random();
  for (const [category, chance] of Object.entries(SPECIAL_DROPS.chances)) {
    roll -= chance;
    if (roll < 0) {
      const extra = drawItem(bonus[category] ?? [], {
        rarity: weightedKey(SPECIAL_DROPS.rarityWeights[category], random),
        excluded: new Set([first.itemId]), random,
      });
      if (extra) items.push(extra);
      break;
    }
  }
  return { rarity, type, items };
}
