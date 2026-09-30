import { normalizeRarity, RARITIES } from '../data/items/index.js';
import { weightedChoice } from './random.js';
// Select a populated rarity, then a populated category. Never fabricate an item.
// An empty requested rarity uses the nearest real rarity, preferring the lower tie.
export function drawItem(entries, { rarity, excluded = new Set(), random = Math.random } = {}) {
  let candidates = entries.filter((entry) => !excluded.has(entry.itemId));
  if (!candidates.length) return null;
  const requested = normalizeRarity(rarity);
  if (requested) {
    const target = RARITIES.indexOf(requested);
    const available = [...new Set(candidates.map((entry) => entry.rarity))];
    available.sort((a, b) => Math.abs(RARITIES.indexOf(a) - target) - Math.abs(RARITIES.indexOf(b) - target)
      || RARITIES.indexOf(a) - RARITIES.indexOf(b));
    candidates = candidates.filter((entry) => entry.rarity === available[0]);
  }
  const categories = [...new Set(candidates.map((entry) => entry.category))];
  const category = categories[Math.min(categories.length - 1, Math.floor(random() * categories.length))];
  const item = weightedChoice(candidates.filter((entry) => entry.category === category), (entry) => entry.weight ?? 1, random);
  return item ? { ...item, requestedRarity: requested, rarityAdjusted: Boolean(requested && item.rarity !== requested) } : null;
}
export function drawItems(entries, count, { rarity, random = Math.random, allowDuplicates = false } = {}) {
  const drawn = []; const excluded = new Set();
  for (let index = 0; index < count; index += 1) {
    const item = drawItem(entries, { rarity: typeof rarity === 'function' ? rarity() : rarity, excluded, random });
    if (!item) break;
    drawn.push(item); if (!allowDuplicates) excluded.add(item.itemId);
  }
  return drawn;
}
