import { WEAPONS } from './itemGroups.js';
import { randomInt } from '../utils/random.js';
const CATEGORY_PRICE_GROUPS = {
  ammunition: ["Ammunition"],

  weapons: WEAPONS,

  lightArmorShield: ["LightArmor", "Shield"],
  mediumArmor: ["MediumArmor"],
  heavyArmor: ["HeavyArmor"],

  gearMagicWearables: [
    "Boots",
    "Gauntlet",
    "WondrousItem",
    "Ring",
    "Robe",
    "Necklace",
    "Helmet",
    "Gems",
    "Cloak",
  ],

  utilityArtsMagic: [
    "TreasureMap",
    "SkillBook",
    "Misc",
    "Keys",
    "Rod",
    "Grimoire",
    "Wand",
  ],

  scrolls: ["Scrolls"],
};

const PRICING_BY_GROUP = {
  ammunition: {
    base: {
      Common: 20,
      Uncommon: 100,
      Rare: 200,
      "Very Rare": 750,
      Legendary: 1500,
      Unique: 5000,
    },
    variance: {
      Common: 15,
      Uncommon: 30,
      Rare: 75,
      "Very Rare": 200,
      Legendary: 500,
      Unique: 2500,
    },
  },

  weapons: {
    base: {
      Common: 50,
      Uncommon: 200,
      Rare: 500,
      "Very Rare": 1250,
      Legendary: 6000,
      Unique: 15000,
    },
    variance: {
      Common: 25,
      Uncommon: 100,
      Rare: 65,
      "Very Rare": 400,
      Legendary: 1500,
      Unique: 7500,
    },
  },

  lightArmorShield: {
    base: {
      Common: 35,
      Uncommon: 130,
      Rare: 400,
      "Very Rare": 1300,
      Legendary: 4000,
      Unique: 9500,
    },
    variance: {
      Common: 10,
      Uncommon: 45,
      Rare: 150,
      "Very Rare": 350,
      Legendary: 1200,
      Unique: 3000,
    },
  },

  mediumArmor: {
    base: {
      Common: 90,
      Uncommon: 300,
      Rare: 1000,
      "Very Rare": 3200,
      Legendary: 7800,
      Unique: 13000,
    },
    variance: {
      Common: 35,
      Uncommon: 100,
      Rare: 300,
      "Very Rare": 900,
      Legendary: 1600,
      Unique: 3000,
    },
  },

  heavyArmor: {
    base: {
      Common: 1000,
      Uncommon: 1800,
      Rare: 3400,
      "Very Rare": 6200,
      Legendary: 11500,
      Unique: 17500,
    },
    variance: {
      Common: 250,
      Uncommon: 500,
      Rare: 1000,
      "Very Rare": 2200,
      Legendary: 3300,
      Unique: 5000,
    },
  },

  gearMagicWearables: {
    base: {
      Common: 120,
      Uncommon: 300,
      Rare: 800,
      "Very Rare": 2200,
      Legendary: 4000,
      Unique: 8500,
    },
    variance: {
      Common: 40,
      Uncommon: 100,
      Rare: 250,
      "Very Rare": 800,
      Legendary: 1200,
      Unique: 2000,
    },
  },

  utilityArtsMagic: {
    base: {
      Common: 200,
      Uncommon: 600,
      Rare: 1600,
      "Very Rare": 5000,
      Legendary: 12000,
      Unique: 17500,
    },
    variance: {
      Common: 100,
      Uncommon: 250,
      Rare: 400,
      "Very Rare": 1500,
      Legendary: 2900,
      Unique: 4500,
    },
  },

  scrolls: {
    base: {
      Common: 25,
      Uncommon: 350,
      Rare: 3500,
      "Very Rare": 15000,
      Legendary: 35000,
      Unique: 150000,
    },
    variance: {
      Common: 5,
      Uncommon: 75,
      Rare: 500,
      "Very Rare": 2000,
      Legendary: 7500,
      Unique: 25000,
    },
  },
};

function getPricingGroup(category) {
  for (const [groupName, categories] of Object.entries(CATEGORY_PRICE_GROUPS)) {
    if (categories.includes(category)) return groupName;
  }
  return category === "Potion" ? "gearMagicWearables" : "weapons";
}

export function rollPriceFromCategoryAndRarity(category, rarity) {
  const groupName = getPricingGroup(category);
  const group = PRICING_BY_GROUP[groupName];

  const base = group?.base?.[rarity] ?? 25;
  const variance = group?.variance?.[rarity] ?? 0;

  const min = Math.max(1, base - variance);
  const max = base + variance;
  const finalPrice = randomInt(min, max);

  return {
    base,
    finalPrice,
    isSale: finalPrice < base,
  };
}


export const STORE_SIZES = { Small: 10, Medium: 16, Large: 24 };
export const SHOP_RARITY_WEIGHTS = { Common: 2, Uncommon: 48, Rare: 29, VeryRare: 11, Legendary: 9, Unique: 1 };
