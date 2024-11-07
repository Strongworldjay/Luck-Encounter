import { itemNames } from './itemsData';

export function getRandomItem(type, subtype, rarity) {
  // Check if the type has subtypes (like Weapon, Skill, etc.)
  const category = itemNames[type];
  
  if (category[subtype]) {
    // If the category has subtypes, select from the specified subtype
    const items = category[subtype][rarity];
    return items[Math.floor(Math.random() * items.length)];
  } else {
    // If there are no subtypes (like Helmet, Armor, etc.), select directly
    const items = category[rarity];
    return items[Math.floor(Math.random() * items.length)];
  }
}
