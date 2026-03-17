import React, { useMemo, useState } from "react";
import "./shop.css";
import { itemNames } from "../itemsData";

const saleIcon = "/assets/sale.jpg";

/** Categories to include (sorted for UI) */
const SHOP_CATEGORIES = [
  "Ammunition",
  "Axe",
  "BoostArt",
  "Boots",
  "Bow",
  "Cloak",
  "Club",
  "Crossbow",
  "Dagger",
  "Firearms",
  "Gauntlet",
  "Gems",
  "Glaive",
  "Grimoire",
  "Halberd",
  "Hammer",
  "HeavyArmor",
  "Helmet",
  "Keys",
  "Lance",
  "LightArmor",
  "Mace",
  "Mana",
  "MediumArmor",
  "Misc",
  "Necklace",
  "PassiveArt",
  "Pike",
  "Ring",
  "Robe",
  "Rod",
  "Scythe",
  "Scrolls",
  "Shield",
  "SkillPoints",
  "Spear",
  "Staff",
  "Sword",
  "TreasureMap",
  "Wand",
  "Warpick",
  "WeaponArt",
  "Whip",
  "WondrousItem",
].sort((a, b) => a.localeCompare(b));

const FILTER_PRESETS = {
  "All Items": SHOP_CATEGORIES,
  "Magic Shop": [
    "Grimoire",
    "WondrousItem",
    "Wand",
    "Rod",
    "Staff",
    "Robe",
    "Cloak",
    "BoostArt",
    "WeaponArt",
    "PassiveArt",
    "Scrolls",
  ],
  "Jewelry Shop": ["Ring", "Helmet", "Gauntlet", "Gems", "Necklace"],
  "Weapon Store": [
    "Axe",
    "Bow",
    "Club",
    "Crossbow",
    "Dagger",
    "Firearms",
    "Glaive",
    "Halberd",
    "Hammer",
    "Lance",
    "Mace",
    "Pike",
    "Scythe",
    "Spear",
    "Staff",
    "Sword",
    "Warpick",
    "Whip",
  ],
  "Armor Shop": [
    "LightArmor",
    "MediumArmor",
    "HeavyArmor",
    "Helmet",
    "Shield",
    "Gauntlet",
  ],
  "Heavy User Shop": [
    "HeavyArmor",
    "Shield",
    "Helmet",
    "Gauntlet",
    "Hammer",
    "Axe",
  ],
  "Hunter Shop": [
    "Dagger",
    "Ammunition",
    "Bow",
    "Crossbow",
    "LightArmor",
    "Boots",
  ],
};

const normalizeRarityKey = (key) => {
  if (!key) return "Common";
  const k = String(key).trim();
  if (/^very\s*rare$/i.test(k) || /^veryrare$/i.test(k)) return "Very Rare";
  return k
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .replace(/^./, (c) => c.toUpperCase());
};

const RARITY_ORDER = {
  Common: 0,
  Uncommon: 1,
  Rare: 2,
  "Very Rare": 3,
  Legendary: 4,
  Unique: 5,
};

const CATEGORY_PRICE_GROUPS = {
  ammunition: ["Ammunition"],

  weapons: [
    "Axe",
    "Bow",
    "Club",
    "Crossbow",
    "Dagger",
    "Firearms",
    "Glaive",
    "Halberd",
    "Hammer",
    "Lance",
    "Mace",
    "Pike",
    "Scythe",
    "Spear",
    "Staff",
    "Sword",
    "Warpick",
    "Whip",
  ],

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
    "SkillPoints",
    "PassiveArt",
    "Mana",
    "Misc",
    "Keys",
    "BoostArt",
    "WeaponArt",
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
  return "weapons";
}

function rollPriceFromCategoryAndRarity(category, rarity) {
  const groupName = getPricingGroup(category);
  const group = PRICING_BY_GROUP[groupName];

  const base = group?.base?.[rarity] ?? 25;
  const variance = group?.variance?.[rarity] ?? 0;

  const min = Math.max(1, base - variance);
  const max = base + variance;
  const finalPrice = Math.floor(Math.random() * (max - min + 1)) + min;

  return {
    base,
    finalPrice,
    isSale: finalPrice < base,
  };
}

function normalizeFromItemData(data, allowedCategories) {
  const out = [];
  if (!data || typeof data !== "object" || Array.isArray(data)) return out;

  for (const category of allowedCategories) {
    const bucket = data[category] || data[category?.toLowerCase?.()];
    if (!bucket || typeof bucket !== "object") continue;

    for (const rawRarityKey of Object.keys(bucket)) {
      const rarity = normalizeRarityKey(rawRarityKey);
      const list = bucket[rawRarityKey];
      if (!Array.isArray(list)) continue;

      list.forEach((name) => {
        const itemName = String(name);
        const id = `${category}:${rarity}:${itemName}`;
        out.push({
          id,
          name: itemName,
          category,
          rarity,
          tags: [],
        });
      });
    }
  }

  return out;
}

const STORE_SIZES = {
  Small: 10,
  Medium: 16,
  Large: 24,
};

const RARITY_ODDS = [
  { name: "Common", range: [1, 2] },
  { name: "Uncommon", range: [3, 50] },
  { name: "Rare", range: [51, 79] },
  { name: "Very Rare", range: [80, 90] },
  { name: "Legendary", range: [91, 99] },
  { name: "Unique", range: [100] },
];

function rollRarity() {
  const r = Math.floor(Math.random() * 100) + 1;
  for (const entry of RARITY_ODDS) {
    const [a, b] =
      entry.range.length === 1
        ? [entry.range[0], entry.range[0]]
        : entry.range;
    if (r >= a && r <= b) return entry.name;
  }
  return "Common";
}

export default function ShopInventory() {
  const [storeSize, setStoreSize] = useState("Small");
  const [allowDuplicates, setAllowDuplicates] = useState(false);
  const [categories, setCategories] = useState(SHOP_CATEGORIES);
  const [activePreset, setActivePreset] = useState("All Items");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [items, setItems] = useState([]);

  const CATALOG = useMemo(
    () => normalizeFromItemData(itemNames, SHOP_CATEGORIES),
    []
  );

  const pool = useMemo(
    () => CATALOG.filter((i) => categories.includes(i.category)),
    [CATALOG, categories]
  );

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const rarityDiff =
        (RARITY_ORDER[a.rarity] ?? 999) - (RARITY_ORDER[b.rarity] ?? 999);
      if (rarityDiff !== 0) return rarityDiff;

      const categoryDiff = a.category.localeCompare(b.category);
      if (categoryDiff !== 0) return categoryDiff;

      return a.name.localeCompare(b.name);
    });
  }, [items]);

  const applyPreset = (presetName) => {
    setActivePreset(presetName);
    setCategories(FILTER_PRESETS[presetName] || SHOP_CATEGORIES);
  };

  const generate = () => {
    const count = STORE_SIZES[storeSize] || 10;
    const out = [];
    const used = new Set();

    if (!categories.length || !pool.length) {
      setItems([]);
      return;
    }

    for (let i = 0; i < count; i++) {
      const targetRarity = rollRarity();
      const cat = categories[Math.floor(Math.random() * categories.length)];

      let candidates = pool.filter(
        (p) => p.category === cat && p.rarity === targetRarity
      );

      if (candidates.length === 0) {
        candidates = pool.filter((p) => p.category === cat);
      }

      if (candidates.length === 0) {
        candidates = pool;
      }

      if (candidates.length === 0) break;

      let pick = candidates[Math.floor(Math.random() * candidates.length)];

      if (!allowDuplicates) {
        let tries = 0;
        while (tries < 12 && used.has(pick.id)) {
          pick = candidates[Math.floor(Math.random() * candidates.length)];
          tries++;
        }

        if (used.has(pick.id)) {
          const rest = pool.filter((p) => !used.has(p.id));
          if (!rest.length) break;
          pick = rest[Math.floor(Math.random() * rest.length)];
        }

        used.add(pick.id);
      }

      const priceRoll = rollPriceFromCategoryAndRarity(pick.category, pick.rarity);

      out.push({
        id: `${pick.id}:${i}:${Math.random().toString(36).slice(2, 8)}`,
        name: pick.name,
        category: pick.category,
        rarity: pick.rarity,
        price: priceRoll.finalPrice,
        basePrice: priceRoll.base,
        isSale: priceRoll.isSale,
        tags: pick.tags || [],
      });
    }

    setItems(out);
  };

  const copyToClipboard = async () => {
    const lines = sortedItems
      .map(
        (i) =>
          `• ${i.name}${i.isSale ? " [SALE]" : ""} — ${i.category} — ${i.rarity} — ${i.price.toLocaleString()} gp`
      )
      .join("\n");

    try {
      await navigator.clipboard.writeText(lines || "(no items)");
      alert("Inventory copied to clipboard!");
    } catch {
      alert("Copy failed (clipboard permission).");
    }
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(sortedItems, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `shop_${storeSize.toLowerCase()}_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const toggleCategory = (c) => {
    setActivePreset(null);
    setCategories((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };

  const selectAllCats = () => {
    setActivePreset("All Items");
    setCategories(SHOP_CATEGORIES);
  };

  const selectNoneCats = () => {
    setActivePreset(null);
    setCategories([]);
  };

  const invertCats = () => {
    setActivePreset(null);
    setCategories((prev) => SHOP_CATEGORIES.filter((c) => !prev.includes(c)));
  };

  return (
    <div className="shop-page shop-page--isolate">
      <div className="shop-card">
        <header className="shop-header">
          <h2>Shop Inventory Generator</h2>
          <div className="row gap">
            <div className="size-toggle" role="group" aria-label="Store size">
              {Object.keys(STORE_SIZES).map((size) => (
                <button
                  key={size}
                  className={`btn ${storeSize === size ? "primary" : ""}`}
                  onClick={() => setStoreSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="row align">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={allowDuplicates}
                  onChange={(e) => setAllowDuplicates(e.target.checked)}
                />
                <span /> Allow duplicates
              </label>
            </div>
          </div>
        </header>

        <div className="shop-toolbar">
          <button
            className="btn filter-btn"
            onClick={() => setFiltersOpen(true)}
          >
            Filters
          </button>
          <div className="row gap">
            <button className="btn primary" onClick={generate}>
              Generate
            </button>
            <button className="btn" onClick={copyToClipboard}>
              Copy
            </button>
            <button className="btn" onClick={exportJson}>
              Export JSON
            </button>
          </div>
        </div>

        <section className="shop-results">
          <div className="results-header">
            <div>Item</div>
            <div>Category</div>
            <div>Rarity</div>
            <div className="right">Price</div>
          </div>

          {sortedItems.length === 0 ? (
            <div className="empty">
              No items yet. Click <strong>Generate</strong> to create an
              inventory.
            </div>
          ) : (
            sortedItems.map((i) => (
              <div key={i.id} className="rowline">
                <div className="name">
                  <span className="item-name-text">{i.name}</span>
                  {i.isSale && (
                    <img
                      src={saleIcon}
                      alt="On sale"
                      className="sale-icon"
                      draggable={false}
                    />
                  )}
                </div>
                <div>{i.category}</div>
                <div>{i.rarity}</div>
                <div className="right">{i.price.toLocaleString()} gp</div>
              </div>
            ))
          )}
        </section>

        <footer className="shop-foot">
          <div className="muted">
            Store size controls <em>how many items</em>. Rarity is rolled per
            item using your 1–100 odds. Filters only limit categories.
          </div>
        </footer>
      </div>

      {filtersOpen && (
        <div
          className="shop-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Filters"
        >
          <div
            className="shop-modal__backdrop"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="shop-modal__panel">
            <div className="shop-modal__header">
              <h3>Filters</h3>
              <button
                className="icon-btn"
                onClick={() => setFiltersOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="shop-modal__content">
              <div className="field">
                <div className="field-head">
                  <label>Presets</label>
                </div>

                <div className="presetbox">
                  {Object.keys(FILTER_PRESETS).map((presetName) => (
                    <button
                      key={presetName}
                      type="button"
                      className={`preset-pill ${
                        activePreset === presetName ? "on" : ""
                      }`}
                      onClick={() => applyPreset(presetName)}
                    >
                      {presetName}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field">
                <div className="field-head">
                  <label>Categories</label>
                  <div className="mini-actions">
                    <button className="mini" onClick={selectAllCats}>
                      All
                    </button>
                    <button className="mini" onClick={selectNoneCats}>
                      None
                    </button>
                    <button className="mini" onClick={invertCats}>
                      Invert
                    </button>
                  </div>
                </div>

                <div className="pillbox">
                  {SHOP_CATEGORIES.map((c) => (
                    <button
                      key={c}
                      type="button"
                      className={`pill ${categories.includes(c) ? "on" : ""}`}
                      onClick={() => toggleCategory(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="shop-modal__footer">
              <button className="btn" onClick={() => setFiltersOpen(false)}>
                Close
              </button>
              <div className="spacer" />
              <button
                className="btn primary"
                onClick={() => setFiltersOpen(false)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}