import { CREATURE_TYPES } from '../data/items/taxonomy.js';
import { REWARD_ITEM_TYPES } from './rewards.js';
// Neutral is an item fallback, not a monster crystal species.
export const MONSTER_CRYSTAL_TYPES = CREATURE_TYPES.filter((type) => type !== 'Neutral' && type !== 'Humanoid');
// Previously queued Humanoid crystals remain usable, but no new ones can be added.
export const isExistingCrystalType = (type) => MONSTER_CRYSTAL_TYPES.includes(type) || type === 'Humanoid';
export const crystalImageName = (type, broken = false) => `${type.toLowerCase()}crystal${broken ? 'broken' : ''}.png`;
const excluded = new Set(['WeaponArt', 'MagicArt', 'BoostArt', 'PassiveArt', 'SkillPoints', 'Experience', 'EXP', 'Mana', 'Stamina']);
export const CRYSTAL_ITEM_CATEGORIES = [...REWARD_ITEM_TYPES.filter((category) => !excluded.has(category)), 'SkillBook'];
export const TYPE_MATCH_CHANCE = 0.85;
export const MAX_CRYSTALS = 100;
// Item rarity weights are conditional on a crystal surviving its destruction check.
export const MONSTER_CRYSTAL_RULES = {
  Common:    { destructionChance: 0.90,  itemWeights: { Common: 90, Uncommon: 10 } },
  Uncommon:  { destructionChance: 0.75,  itemWeights: { Common: 59, Uncommon: 40, Rare: 1 } },
  Rare:      { destructionChance: 0.50,  itemWeights: { Uncommon: 60, Rare: 35, VeryRare: 5 } },
  VeryRare:  { destructionChance: 0.25,  itemWeights: { Uncommon: 20, Rare: 65, VeryRare: 14, Legendary: 1 } },
  Legendary: { destructionChance: 0.05,  itemWeights: { Rare: 30, VeryRare: 65, Legendary: 5 } },
  Unique:    { destructionChance: 0.001, itemWeights: { VeryRare: 60, Legendary: 35, Unique: 5 } },
};
export const percent = (chance) => `${Number((chance * 100).toFixed(3))}%`;
