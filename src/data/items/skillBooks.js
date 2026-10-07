import { WORLD_ART_CATEGORIES } from './taxonomy.js';

const bookPrefix = {
  WeaponArt: 'Weapon Art', MagicArt: 'Magic Art',
  BoostArt: 'Boost Art', PassiveArt: 'Passive Art',
};

export function artFamilyName(name) {
  return name.replace(/ [FDCBAS]$/, '');
}

// A family is one Art regardless of how many ranks the catalog lists.
// The source catalog owns Art membership; newly added families gain a book automatically.
export function createSkillBooks(items) {
  const families = new Map();
  for (const item of items) {
    for (const variant of item.variants) {
      if (!WORLD_ART_CATEGORIES.includes(variant.category)) continue;
      const art = artFamilyName(item.name);
      const family = families.get(art) ?? { art, category: variant.category, types: new Set(), themes: new Set(), rarities: new Set(), ranks: new Set() };
      if (family.category !== variant.category) throw new Error(`${art} appears in multiple Art categories`);
      item.types.forEach((type) => family.types.add(type));
      item.themes.forEach((theme) => family.themes.add(theme));
      family.rarities.add(variant.rarity);
      family.ranks.add(item.name === art ? null : item.name.slice(-1));
      families.set(art, family);
    }
  }
  return [...families.values()].map(({ art, category, types, themes, rarities, ranks }) => {
    // The catalog's rankless Rare Art entries are C-only Arts, e.g. Resistances.
    const rarity = ranks.size === 1 && (ranks.has('C') || (ranks.has(null) && rarities.has('Rare'))) ? 'Rare' : 'Uncommon';
    return {
      id: `skillbook:${category}:${art.toLowerCase()}`,
      name: `${bookPrefix[category]} Skill Book: ${art}`,
      variants: [{ category: 'SkillBook', rarity }],
      types: [...types], themes: [...new Set([...themes, 'Paper'])],
      tagBasis: 'derived', teachesArt: { name: art, category },
      description: `Spend 10 minutes reading to learn ${bookPrefix[category]}: ${art}. If you have no open Art slot of that kind, you may replace an Art you know. The book is consumed after reading.`,
    };
  });
}
