export const CHEST_SETTINGS = {
  wooden:   { goldRange: [10, 20],  rarityWeights: { Common: 0.95, Uncommon: 0.05 },                                      dcRange: [6, 9] },
  steel:    { goldRange: [20, 40],  rarityWeights: { Common: 0.75, Uncommon: 0.25 },                                      dcRange: [10, 13] },
  bronze:   { goldRange: [30, 60],  rarityWeights: { Common: 0.20, Uncommon: 0.65, Rare: 0.15 },                           dcRange: [14, 18] },
  silver:   { goldRange: [40, 80],  rarityWeights: { Uncommon: 0.6, Rare: 0.35, VeryRare: 0.05 },                          dcRange: [19, 24] },
  gold:     { goldRange: [50, 100], rarityWeights: { Uncommon: 0.25, Rare: 0.55, VeryRare: 0.15, Legendary: 0.05 },        dcRange: [25, 30] },
  platinum: { goldRange: [80, 150], rarityWeights: { Rare: 0.1, VeryRare: 0.35, Legendary: 0.45, Unique: 0.1 },            dcRange: [31, 35] },
  emerald:  { goldRange: [100, 200],rarityWeights: { Legendary: 0.7, Unique: 0.3 },                                        dcRange: [36, 40] }
};

export const SPECIAL_DROPS = {
  chances: { Potion: 0.05, Ammunition: 0.05, Scrolls: 0.05, Gems: 0.04 },
  rarityWeights: {
    Potion:     { Common: 0.60, Uncommon: 0.25, Rare: 0.10, VeryRare: 0.04, Legendary: 0.009, Unique: 0.001 },
    Ammunition: { Common: 0.60, Uncommon: 0.25, Rare: 0.10, VeryRare: 0.04, Legendary: 0.009, Unique: 0.001 },
    Scrolls:    { Common: 0.50, Uncommon: 0.30, Rare: 0.15, VeryRare: 0.04, Legendary: 0.009, Unique: 0.001 },
    Gems:       { Common: 0.40, Uncommon: 0.35, Rare: 0.20, VeryRare: 0.04, Legendary: 0.009, Unique: 0.001 }
  }
};
