import { itemNames } from '../data/itemsData.js';

export function normalizeRarityKey(value = 'Common') {
  const normalized = String(value).trim().replace(/[\s_-]+/g, '').toLowerCase();
  const aliases = {
    common: 'Common',
    uncommon: 'Uncommon',
    rare: 'Rare',
    veryrare: 'VeryRare',
    legendary: 'Legendary',
    unique: 'Unique',
  };
  return aliases[normalized] ?? value;
}

export function cleanWeightedPool(values = []) {
  // Preserve duplicate entries because some data tables intentionally use them as weighting.
  return values.filter((value) => value !== null && value !== undefined && value !== '');
}

export function randomFrom(values = [], fallback = 'Unknown Item') {
  const pool = cleanWeightedPool(values);
  return pool.length ? pool[Math.floor(Math.random() * pool.length)] : fallback;
}

export function getRandomItem(type, subtype, rarity) {
  const category = itemNames[type];
  if (!category) {
    console.warn(`[items] Unknown category: ${type}`);
    return 'Unknown Item';
  }

  const source = subtype && category[subtype] ? category[subtype] : category;
  const rarityKey = normalizeRarityKey(rarity);
  const pool = source?.[rarityKey];

  if (!Array.isArray(pool) || cleanWeightedPool(pool).length === 0) {
    console.warn(`[items] Empty pool for ${type}${subtype ? `/${subtype}` : ''} at ${rarityKey}`);
    return 'Unknown Item';
  }

  return randomFrom(pool);
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function weightedPick(weights = {}) {
  const entries = Object.entries(weights).filter(([, weight]) => Number(weight) > 0);
  const total = entries.reduce((sum, [, weight]) => sum + Number(weight), 0);
  if (!entries.length || total <= 0) return undefined;

  let roll = Math.random() * total;
  for (const [value, weight] of entries) {
    roll -= Number(weight);
    if (roll < 0) return value;
  }
  return entries.at(-1)?.[0];
}
