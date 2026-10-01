import { CREATURE_TYPES } from '../data/items/taxonomy.js';
import { REWARD_ITEM_TYPES } from './rewards.js';
// Neutral is an item fallback, not a monster crystal species.
export const MONSTER_CRYSTAL_TYPES = CREATURE_TYPES.filter((type) => type !== 'Neutral');
const excluded = new Set(['WeaponArt', 'BoostArt', 'PassiveArt', 'SkillPoints', 'Experience', 'EXP', 'Mana', 'Stamina']);
export const CRYSTAL_ITEM_CATEGORIES = REWARD_ITEM_TYPES.filter((category) => !excluded.has(category));
export const TYPE_MATCH_CHANCE = 0.85;
export const MAX_CRYSTALS = 100;
// Item rarity weights apply only AFTER the destruction check succeeds.
// Conservative defaults: each tier is capped at its own rarity.
export const MONSTER_CRYSTAL_RULES = {
  Common:    { destructionChance: 0.90,  itemWeights: { Common: 100 } },
  Uncommon:  { destructionChance: 0.75,  itemWeights: { Common: 90, Uncommon: 10 } },
  Rare:      { destructionChance: 0.50,  itemWeights: { Common: 70, Uncommon: 25, Rare: 5 } },
  VeryRare:  { destructionChance: 0.25,  itemWeights: { Common: 45, Uncommon: 40, Rare: 14, VeryRare: 1 } },
  Legendary: { destructionChance: 0.05,  itemWeights: { Common: 15, Uncommon: 40, Rare: 35, VeryRare: 9, Legendary: 1 } },
  Unique:    { destructionChance: 0.001, itemWeights: { Common: 5, Uncommon: 15, Rare: 45, VeryRare: 28, Legendary: 6, Unique: 1 } },
};
export const percent = (chance) => `${Number((chance * 100).toFixed(3))}%`;
