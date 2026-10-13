// A box has one main item. Its rarity is weighted around the selected tier.
// Optional category drops use the existing chest bonus rates and rarity tables.
export const LOOT_BOX_WEIGHTS = {
  Common:    { Common: .95, Uncommon: .05 },
  Uncommon:  { Common: .20, Uncommon: .70, Rare: .10 },
  Rare:      { Uncommon: .20, Rare: .70, VeryRare: .10 },
  VeryRare:  { Rare: .20, VeryRare: .70, Legendary: .10 },
  Legendary: { VeryRare: .20, Legendary: .70, Unique: .10 },
  Unique:    { Legendary: .30, Unique: .70 },
};
