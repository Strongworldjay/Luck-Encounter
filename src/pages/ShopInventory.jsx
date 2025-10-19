import React, { useMemo, useState } from "react";
import "./shop.css";
import { itemNames } from "../itemsData";

/** Categories to include (sorted for UI) */
const SHOP_CATEGORIES = [
  'Ammunition','Axe','BoostArt','Boots','Bow','Cloak','Club','Crossbow','Dagger','Firearms','Gauntlet','Gems','Glaive',
  'Grimoire','Halberd','Hammer','HeavyArmor','Helmet','Keys','Lance','LightArmor','Mace','Mana','MediumArmor','Misc',
  'Necklace','PassiveArt','Pike','Ring','Robe','Rod','Scythe','Scrolls','Shield','SkillPoints','Spear','Staff','Sword',
  'TreasureMap','Wand','Warpick','WeaponArt','Whip','WondrousItem'
].sort((a,b)=>a.localeCompare(b));

/** Map odd rarity keys -> display strings */
const normalizeRarityKey = (key) => {
  if (!key) return "Common";
  const k = String(key).trim();
  if (/^very\s*rare$/i.test(k) || /^veryrare$/i.test(k)) return "Very Rare";
  return k
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .replace(/^./, (c) => c.toUpperCase());
};

/** Heuristic price fallback by rarity (still shown in list) */
const RARITY_PRICE_FALLBACK = {
  Common: 25,
  Uncommon: 100,
  Rare: 500,
  "Very Rare": 5000,
  Legendary: 50000,
  Unique: 100000,
};

/* -------------------------
   itemData → flat catalog
   ------------------------- */
/**
 * Accepts itemNames like:
 * {
 *   Warpick: {
 *     Common: ["...", ...],
 *     Uncommon: [...],
 *     Rare: [...],
 *     VeryRare: [...],
 *     Legendary: [...],
 *     Unique: [...]
 *   },
 *   Sword: { ... },
 *   ...
 * }
 */
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
        const price = RARITY_PRICE_FALLBACK[rarity] ?? 25;
        out.push({ id, name: itemName, category, rarity, price, tags: [] });
      });
    }
  }
  return out;
}

/** Count presets only (weights removed—rarity is rolled) */
const STORE_SIZES = {
  Small: 6,
  Medium: 10,
  Large: 16,
};

/** Your rarity odds table */
const RARITY_ODDS = [
  { name: "Common",    range: [1, 2] },
  { name: "Uncommon",  range: [3, 50] },
  { name: "Rare",      range: [51, 79] },
  { name: "Very Rare", range: [80, 90] },
  { name: "Legendary", range: [91, 99] },
  { name: "Unique",    range: [100] },
];

/** Roll a 1–100 and map to rarity per table */
function rollRarity() {
  const r = Math.floor(Math.random() * 100) + 1; // 1..100
  for (const entry of RARITY_ODDS) {
    const [a, b] = entry.range.length === 1 ? [entry.range[0], entry.range[0]] : entry.range;
    if (r >= a && r <= b) return entry.name;
  }
  return "Common";
}

export default function ShopInventory() {
  const [storeSize, setStoreSize] = useState("Small");
  const [allowDuplicates, setAllowDuplicates] = useState(false);

  // Build catalog from your real item data
  const CATALOG = useMemo(() => normalizeFromItemData(itemNames, SHOP_CATEGORIES), []);

  // Filters (only categories now)
  const [categories, setCategories] = useState(SHOP_CATEGORIES);

  // Modal state
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Result
  const [items, setItems] = useState([]);

  // Pool = just the selected categories
  const pool = useMemo(
    () => CATALOG.filter(i => categories.includes(i.category)),
    [CATALOG, categories]
  );

  const generate = () => {
    const count = STORE_SIZES[storeSize] || 6;

    const out = [];
    const used = new Set();

    for (let i = 0; i < count; i++) {
      // Roll target rarity
      const targetRarity = rollRarity();

      // Optional: randomly choose a category among those selected, to avoid clustering
      const cat = categories[Math.floor(Math.random() * categories.length)];

      // Filter candidates by rolled rarity + chosen category
      let candidates = pool.filter(p => p.category === cat && p.rarity === targetRarity);

      // If none exist in that rarity for that category, fall back to any rarity in that category
      if (candidates.length === 0) {
        candidates = pool.filter(p => p.category === cat);
      }

      // If still none (shouldn't happen unless category empty), fall back to whole pool
      if (candidates.length === 0) {
        candidates = pool;
      }
      if (candidates.length === 0) break;

      // Pick one (obey duplicates toggle)
      let pick = candidates[Math.floor(Math.random() * candidates.length)];
      if (!allowDuplicates) {
        let tries = 0;
        while (tries < 12 && used.has(pick.id)) {
          pick = candidates[Math.floor(Math.random() * candidates.length)];
          tries++;
        }
        if (used.has(pick.id)) {
          // try any not-yet-used item from entire pool
          const rest = pool.filter(p => !used.has(p.id));
          if (!rest.length) break;
          pick = rest[Math.floor(Math.random() * rest.length)];
        }
        used.add(pick.id);
      }

      out.push({
        id: pick.id,
        name: pick.name,
        category: pick.category,
        rarity: pick.rarity,   // from your dataset; not the roll—BUT roll constrained the pick
        price: pick.price,
        tags: pick.tags || [],
      });
    }

    setItems(out);
  };

  const copyToClipboard = async () => {
    const lines = items.map(i => `• ${i.name} — ${i.category} — ${i.rarity} — ${i.price} gp`).join("\n");
    try { await navigator.clipboard.writeText(lines || "(no items)"); alert("Inventory copied to clipboard!"); }
    catch { alert("Copy failed (clipboard permission)."); }
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(items, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `shop_${storeSize.toLowerCase()}_${Date.now()}.json`;
    document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  };

  const toggleCategory = (c) =>
    setCategories(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);

  const selectAllCats   = () => setCategories(SHOP_CATEGORIES);
  const selectNoneCats  = () => setCategories([]);
  const invertCats      = () =>
    setCategories(prev => SHOP_CATEGORIES.filter(c => !prev.includes(c)));

  return (
    <div className="shop-page shop-page--isolate">
      <div className="shop-card">
        <header className="shop-header">
          <h2>Shop Inventory Generator</h2>
          <div className="row gap">
            <div className="size-toggle" role="group" aria-label="Store size">
              {Object.keys(STORE_SIZES).map(size => (
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
                  onChange={e => setAllowDuplicates(e.target.checked)}
                />
                <span /> Allow duplicates
              </label>
            </div>
          </div>
        </header>

        {/* Toolbar */}
        <div className="shop-toolbar">
          <button className="btn filter-btn" onClick={() => setFiltersOpen(true)}>Filters</button>
          <div className="row gap">
            <button className="btn primary" onClick={generate}>Generate</button>
            <button className="btn" onClick={copyToClipboard}>Copy</button>
            <button className="btn" onClick={exportJson}>Export JSON</button>
          </div>
        </div>

        {/* Results */}
        <section className="shop-results">
          <div className="results-header">
            <div>Item</div><div>Category</div><div>Rarity</div><div className="right">Price</div>
          </div>

          {items.length === 0 ? (
            <div className="empty">No items yet. Click <strong>Generate</strong> to create an inventory.</div>
          ) : (
            items.map((i) => (
              <div key={i.id} className="rowline">
                <div className="name">{i.name}</div>
                <div>{i.category}</div>
                <div>{i.rarity}</div>
                <div className="right">{i.price.toLocaleString()} gp</div>
              </div>
            ))
          )}
        </section>

        <footer className="shop-foot">
          <div className="muted">
            Store size controls <em>how many items</em>. Rarity is rolled per item using your 1–100 odds. Filters only limit categories.
          </div>
        </footer>
      </div>

      {/* Filters Modal — categories only */}
      {filtersOpen && (
        <div className="shop-modal" role="dialog" aria-modal="true" aria-label="Filters">
          <div className="shop-modal__backdrop" onClick={() => setFiltersOpen(false)} />
          <div className="shop-modal__panel">
            <div className="shop-modal__header">
              <h3>Filters</h3>
              <button className="icon-btn" onClick={() => setFiltersOpen(false)} aria-label="Close">✕</button>
            </div>

            <div className="shop-modal__content">
              <div className="field">
                <div className="field-head">
                  <label>Categories</label>
                  <div className="mini-actions">
                    <button className="mini" onClick={selectAllCats}>All</button>
                    <button className="mini" onClick={selectNoneCats}>None</button>
                    <button className="mini" onClick={invertCats}>Invert</button>
                  </div>
                </div>
                <div className="pillbox">
                  {SHOP_CATEGORIES.map(c => (
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
              <button className="btn" onClick={() => setFiltersOpen(false)}>Close</button>
              <div className="spacer" />
              <button className="btn primary" onClick={() => setFiltersOpen(false)}>Apply</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
