export const REWARD_RARITIES = [
  { name: 'Common', color: 'white', cardColor: '#ecf1f5', range: [-100, 5] },
  { name: 'Uncommon', color: 'green', cardColor: '#69d68b', range: [6, 49] },
  { name: 'Rare', color: 'blue', cardColor: '#70b3ff', range: [50, 89] },
  { name: 'Very Rare', color: 'purple', cardColor: '#ca98ff', range: [90, 109] },
  { name: 'Legendary', color: 'orange', cardColor: '#ffba64', range: [110, 140] },
  { name: 'Unique', color: 'red', cardColor: '#ff7e89', range: [141, 200] },
];

export const DUNGEON_DIFFICULTIES = [
  { id: 'F', label: 'F Class Dungeon', luck: -50 },
  { id: 'D', label: 'D Class Dungeon', luck: -25 },
  { id: 'C', label: 'C Class Dungeon', luck: 0 },
  { id: 'B', label: 'B Class Dungeon', luck: 25 },
  { id: 'A', label: 'A Class Dungeon', luck: 45 },
  { id: 'S', label: 'S Class Dungeon', luck: 75 },
];

// Keep reward categories unique here. Duplicate values in the old array accidentally
// weighted some categories more heavily than others.
export const REWARD_ITEM_TYPES = [
  'Helmet', 'HeavyArmor', 'Gauntlet', 'Boots', 'Necklace', 'Cloak',
  'Sword', 'Bow', 'Axe', 'Hammer', 'Glaive', 'Dagger', 'Staff', 'Rod',
  'Wand', 'Grimoire', 'WeaponArt', 'MagicArt', 'Scythe', 'PassiveArt', 'BoostArt',
  'SkillPoints', 'Robe', 'Ring', 'LightArmor', 'MediumArmor',
  'WondrousItem', 'Shield', 'Crossbow', 'Spear', 'Halberd', 'Club',
  'Whip', 'Mace', 'Warpick', 'Lance', 'Pike', 'Mana', 'Stamina',
];

export function getRewardRarity(totalRoll) {
  return REWARD_RARITIES.find(({ range: [min, max] }) => totalRoll >= min && totalRoll <= max)
    ?? (totalRoll > 200 ? REWARD_RARITIES.at(-1) : REWARD_RARITIES[0]);
}
