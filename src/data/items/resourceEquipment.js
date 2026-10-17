// Plain equipment forms only. Named magic items in catalog.json are separate items.
// These definitions are shared by all four tiers so a new base form only needs one entry.
export const WEAPON_FORMS = [
  ['Battleaxe', 'Axe'], ['Greataxe', 'Axe'], ['Handaxe', 'Axe'],
  ['Longbow', 'Bow'], ['Shortbow', 'Bow'], ['Sling', 'Bow'],
  ['Club', 'Club'], ['Greatclub', 'Club'],
  ['Hand Crossbow', 'Crossbow'], ['Heavy Crossbow', 'Crossbow'], ['Light Crossbow', 'Crossbow'],
  ['Dagger', 'Dagger'], ['Pistol', 'Firearms'], ['Musket', 'Firearms'],
  ['Glaive', 'Glaive'], ['Halberd', 'Halberd'],
  ['Light Hammer', 'Hammer'], ['Maul', 'Hammer'], ['Warhammer', 'Hammer'],
  ['Lance', 'Lance'], ['Flail', 'Mace'], ['Mace', 'Mace'], ['Morningstar', 'Mace'],
  ['Pike', 'Pike'], ['Scythe', 'Scythe'], ['Sickle', 'Scythe'],
  ['Javelin', 'Spear'], ['Spear', 'Spear'], ['Trident', 'Spear'],
  ['Quarterstaff', 'Staff'],
  ['Double-Bladed Scimitar', 'Sword'], ['Greatsword', 'Sword'], ['Katana', 'Sword'],
  ['Longsword', 'Sword'], ['Rapier', 'Sword'], ['Scimitar', 'Sword'], ['Shortsword', 'Sword'],
  ['War Pick', 'Warpick'], ['Whip', 'Whip'],
];

export const ARMOR_FORMS = [
  ['Padded', 'LightArmor'], ['Leather', 'LightArmor'], ['Studded Leather', 'LightArmor'],
  ['Hide', 'MediumArmor'], ['Chain Shirt', 'MediumArmor'], ['Scale Mail', 'MediumArmor'],
  ['Breastplate', 'MediumArmor'], ['Half Plate', 'MediumArmor'],
  ['Ring Mail', 'HeavyArmor'], ['Chain Mail', 'HeavyArmor'],
  ['Splint', 'HeavyArmor'], ['Plate', 'HeavyArmor'], ['Shield', 'Shield'],
];

const TIERS = [
  ['', 'Common'], [', +1', 'Uncommon'], [', +2', 'Rare'], [', +3', 'VeryRare'],
];
const WOODEN_WEAPONS = new Set(['Bow', 'Club', 'Staff']);
const LEATHER_ARMOR = new Set(['Padded', 'Leather', 'Studded Leather', 'Hide']);
const materialTheme = (form, category) =>
  WOODEN_WEAPONS.has(category) ? 'Wood'
    : category === 'Whip' || LEATHER_ARMOR.has(form) ? 'Organic' : 'Metal';

export const RESOURCE_EQUIPMENT = ['Mana', 'Stamina'].flatMap((resource) =>
  [...WEAPON_FORMS, ...ARMOR_FORMS].flatMap(([form, category]) =>
    TIERS.map(([suffix, rarity]) => ({
      id: `resource-equipment:${resource.toLowerCase()}:${category}:${form.toLowerCase().replace(/[^a-z0-9]+/g, '-')}:${rarity.toLowerCase()}`,
      name: `${resource} ${form}${suffix}`,
      variants: [{ category, rarity }],
      types: ['Neutral'],
      themes: [resource === 'Mana' ? 'Arcane' : 'Primal', materialTheme(form, category)],
      tagBasis: 'category',
    }))));
