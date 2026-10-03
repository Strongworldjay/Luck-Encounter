import { filterEntries } from '../data/items/index.js';
import { CHEST_GROUPS } from '../config/itemGroups.js';

// Runestones are Gems in the shared catalog.
export const UNFILTERED_CHEST_CATEGORIES = ['Potion', 'Scrolls', 'Gems'];

export function chestPools(entries, filters, chestType) {
  const filtered = filterEntries(entries, filters);
  const filteredSet = new Set(filtered);
  const allowed = CHEST_GROUPS[chestType] ?? [];
  const requested = filters.categories ?? [];
  const main = entries.filter((item) => allowed.includes(item.category)
    && (!requested.length || requested.includes(item.category))
    && (UNFILTERED_CHEST_CATEGORIES.includes(item.category) || filteredSet.has(item)));

  // Supplies use the complete catalog, including edited tags. Other bonuses
  // still respect the ordinary filters. Bonuses are independent of chest type.
  const bonus = Object.fromEntries(['Potion', 'Ammunition', 'Scrolls', 'Gems'].map((category) => [category,
    (UNFILTERED_CHEST_CATEGORIES.includes(category) ? entries : filtered)
      .filter((item) => item.category === category)]));
  const misc = filtered.filter((item) => item.category === 'Misc');
  return { main, bonus, misc };
}
