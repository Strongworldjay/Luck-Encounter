import { itemNames } from './itemsData';

export function getRandomItem(type, subtype, rarity) {
  // Check if the category and rarity exist in itemNames
  const category = itemNames[type];
  
  if (!category) {
    console.error(`Item type "${type}" not found in itemNames.`);
    return "Unknown Item";
  }

  if (subtype && category[subtype]) {
    // If the category has subtypes, select from the specified subtype
    const items = category[subtype][rarity];
    if (!items || items.length === 0) {
      console.error(`No items found for type "${type}", subtype "${subtype}", and rarity "${rarity}".`);
      return "Unknown Item";
    }
    return items[Math.floor(Math.random() * items.length)];
  } else {
    // If there are no subtypes (like Helmet, Armor, etc.), select directly
    const items = category[rarity];
    if (!items || items.length === 0) {
      console.error(`No items found for type "${type}" and rarity "${rarity}".`);
      return "Unknown Item";
    }
    return items[Math.floor(Math.random() * items.length)];
  }
}
