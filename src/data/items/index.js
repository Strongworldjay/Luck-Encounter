import catalog from './catalog.json' with { type: 'json' };
import { CREATURE_TYPES, ITEM_THEMES } from './taxonomy.js';
import { createSkillBooks } from './skillBooks.js';
export const ITEMS = [...catalog, ...createSkillBooks(catalog)];
export const ITEM_BY_ID = new Map(ITEMS.map((item) => [item.id, item]));
export const RARITIES = ['Common', 'Uncommon', 'Rare', 'VeryRare', 'Legendary', 'Unique'];
export const rarityLabel = (rarity) => rarity === 'VeryRare' ? 'Very Rare' : rarity;
export const categoryLabel = (category) => ({ WeaponArt: 'Attack Art · Weapon', MagicArt: 'Attack Art · Magic', SkillBook: 'Skill Book' })[category]
  ?? category.replace(/([a-z])([A-Z])/g, '$1 $2');
export const normalizeRarity = (value) => RARITIES.find((rarity) => rarity.toLowerCase() === String(value).replace(/[\s_-]/g, '').toLowerCase()) ?? null;
export function applyTagOverrides(overrides = {}) {
  return ITEMS.map((item) => {
    const override = overrides[item.id]; if (!override) return item;
    const types = [...new Set((Array.isArray(override.types) ? override.types : []).filter((type) => CREATURE_TYPES.includes(type)))];
    const themes = [...new Set((Array.isArray(override.themes) ? override.themes : []).filter((theme) => ITEM_THEMES.includes(theme)))];
    return types.length && themes.length ? { ...item, types, themes, tagBasis: 'reviewed' } : item;
  });
}
export function toEntries(items = ITEMS) {
  return items.filter((item) => item.available !== false).flatMap((item) =>
    item.variants.map((variant) => ({ ...item, ...variant, itemId: item.id, entryId: `${item.id}:${variant.category}:${variant.rarity}` })));
}
export const EMPTY_FILTERS = { query: '', categories: [], types: [], themes: [], rarities: [] };
export function matchesItem(item, filters = EMPTY_FILTERS) {
  const query = (filters.query ?? '').trim().toLowerCase();
  return (!query || item.name.toLowerCase().includes(query))
    && (!filters.types?.length || filters.types.some((type) => item.types.includes(type)))
    && (!filters.themes?.length || filters.themes.some((theme) => item.themes.includes(theme)))
    && item.variants.some((variant) => (!filters.categories?.length || filters.categories.includes(variant.category))
      && (!filters.rarities?.length || filters.rarities.includes(variant.rarity)));
}
export function filterEntries(entries, filters = EMPTY_FILTERS) {
  return entries.filter((item) => matchesItem(item, { ...filters, categories: [], rarities: [] })
    && (!filters.categories?.length || filters.categories.includes(item.category))
    && (!filters.rarities?.length || filters.rarities.includes(item.rarity)));
}
