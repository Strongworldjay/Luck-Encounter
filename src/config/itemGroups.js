import { ITEM_CATEGORIES } from '../data/items/taxonomy.js';
export const WEAPONS = ['Axe','Bow','Club','Crossbow','Dagger','Firearms','Glaive','Halberd','Hammer','Lance','Mace','Pike','Scythe','Spear','Staff','Sword','Warpick','Whip'];
export const ARMOR = ['LightArmor','MediumArmor','HeavyArmor','Helmet','Shield','Gauntlet'];
export const ACCESSORIES = ['Helmet','Boots','Cloak','Gauntlet'];
export const JEWELRY = ['Necklace','Ring','Gems'];
const SHOP_EXCLUDED = new Set(['WeaponArt','MagicArt','BoostArt','PassiveArt','Mana','Stamina','SkillPoints','Experience','EXP']);
export const SHOP_ITEM_CATEGORIES = ITEM_CATEGORIES.filter((category) => !SHOP_EXCLUDED.has(category));
export const SHOP_PRESETS = {
  'All Items': SHOP_ITEM_CATEGORIES,
  'Magic Shop': ['Grimoire','WondrousItem','Wand','Rod','Staff','Robe','Cloak','Scrolls','Potion','SkillBook'],
  'Jewelry Shop': ['Ring','Helmet','Gauntlet','Gems','Necklace'],
  'Weapon Store': WEAPONS,
  'Armor Shop': ARMOR,
  'Heavy User Shop': ['HeavyArmor','Shield','Helmet','Gauntlet','Hammer','Axe'],
  'Hunter Shop': ['Dagger','Ammunition','Bow','Crossbow','LightArmor','Boots'],
};
export const CHEST_GROUPS = {
  Random: SHOP_ITEM_CATEGORIES.filter((category) => !['Misc','SkillBook'].includes(category)),
  'Melee Weapon': WEAPONS.filter((category) => !['Bow','Crossbow','Firearms'].includes(category)),
  'Ranged Weapon': ['Bow','Crossbow','Firearms'],
  'Light Armor': ['LightArmor'], 'Medium Armor': ['MediumArmor'], 'Heavy Armor': ['HeavyArmor','Shield'],
  'Wondrous Item': ['WondrousItem','Grimoire','Gems'], 'Magic Focus': ['Staff','Rod','Wand'],
  Jewelry: JEWELRY, Accessories: ACCESSORIES, Supplies: ['Potion','Ammunition'],
};
