import { RARITIES } from '../data/items/index.js';
import { isExistingCrystalType, MONSTER_CRYSTAL_RULES, CRYSTAL_ITEM_CATEGORIES, TYPE_MATCH_CHANCE } from '../config/monsterCrystals.js';
import { weightedKey } from './random.js';
import { drawItem } from './items.js';
export function crystalPools(entries, crystal) {
  if (!isExistingCrystalType(crystal.type) || !MONSTER_CRYSTAL_RULES[crystal.rarity]) return { matching: [], neutral: [] };
  const ceiling = RARITIES.indexOf(crystal.rarity);
  const eligible = entries.filter((item) => item.available !== false && CRYSTAL_ITEM_CATEGORIES.includes(item.category)
    && RARITIES.indexOf(item.rarity) >= 0 && RARITIES.indexOf(item.rarity) <= ceiling);
  const matching = eligible.filter((item) => item.types.includes(crystal.type));
  const neutral = eligible.filter((item) => item.types.length === 1 && item.types[0] === 'Neutral');
  return { matching, neutral };
}
export function openMonsterCrystal(entries, crystal, random = Math.random) {
  const { matching, neutral } = crystalPools(entries, crystal);
  // An unavailable pool must not silently consume a crystal or inflate its failure chance.
  if (!matching.length && !neutral.length) return { status: 'unavailable' };
  const rule = MONSTER_CRYSTAL_RULES[crystal.rarity];
  if (random() < rule.destructionChance) return { status: 'destroyed' };
  const useMatching = matching.length > 0 && (!neutral.length || random() < TYPE_MATCH_CHANCE);
  const pool = useMatching ? matching : neutral;
  const weights = Object.fromEntries(Object.entries(rule.itemWeights).filter(([rarity]) => pool.some((item) => item.rarity === rarity)));
  const rarity = weightedKey(weights, random);
  const item = drawItem(pool, { rarity, random });
  return { status: 'reward', item, affinity: useMatching ? 'type' : 'neutral' };
}
