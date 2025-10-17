import React, { useMemo, useState } from "react";
import "./shop.css";

/**
 * Demo catalog — swap for your real data anytime.
 */
const CATALOG = [
  { id: "sw_short", name: "Shortsword",        category: "Weapon",      rarity: "Common",    price: 10,    tags: ["martial"] },
  { id: "sw_long",  name: "Longsword",         category: "Weapon",      rarity: "Uncommon",  price: 35,    tags: ["martial"] },
  { id: "bow",      name: "Shortbow",          category: "Weapon",      rarity: "Common",    price: 25,    tags: ["ranged"] },
  { id: "xbow",     name: "Light Crossbow",    category: "Weapon",      rarity: "Uncommon",  price: 50,    tags: ["ranged"] },

  { id: "armor_lea", name: "Leather Armor",    category: "Armor",       rarity: "Common",    price: 10,    tags: [] },
  { id: "armor_spl", name: "Splint Armor",     category: "Armor",       rarity: "Uncommon",  price: 200,   tags: [] },
  { id: "shield",    name: "Shield",            category: "Armor",       rarity: "Common",    price: 10,    tags: [] },

  { id: "p_heal",   name: "Potion of Healing",  category: "Consumable",  rarity: "Common",    price: 50,    tags: ["potion"] },
  { id: "p_gheal",  name: "Potion: Greater",    category: "Consumable",  rarity: "Uncommon",  price: 150,   tags: ["potion"] },
  { id: "p_sinv",   name: "Potion of Invisibility", category: "Consumable", rarity: "Rare",   price: 300,   tags: ["potion"] },

  { id: "scroll1",  name: "Spell Scroll (1st)", category: "Scroll",      rarity: "Uncommon",  price: 75,    tags: ["scroll"] },
  { id: "scroll3",  name: "Spell Scroll (3rd)", category: "Scroll",      rarity: "Rare",      price: 300,   tags: ["scroll"] },

  { id: "bag_holding", name: "Bag of Holding",  category: "Wondrous",    rarity: "Uncommon",  price: 400,   tags: ["storage"] },
  { id: "boots_elv",   name: "Boots of Elvenkind", category: "Wondrous", rarity: "Uncommon",  price: 600,   tags: ["stealth"] },
  { id: "cloak_prot",  name: "Cloak of Protection", category: "Wondrous", rarity: "Rare",     price: 1400,  tags: ["defense"] },
  { id: "vorpal",      name: "Vorpal Sword",    category: "Weapon",      rarity: "Legendary", price: 75000, tags: ["artifact"] },
];

const ALL_CATEGORIES = ["Weapon", "Armor", "Consumable", "Scroll", "Wondrous", "Tool"];
const ALL_RARITIES  = ["Common", "Uncommon", "Rare", "Very Rare", "Legendary"];

const STORE_PRESETS = {
  Small:  { count: 6,  weights: { Common: 0.60, Uncommon: 0.30, Rare: 0.08, "Very Rare": 0.02, Legendary: 0.00 } },
  Medium: { count: 10, weights: { Common: 0.45, Uncommon: 0.35, Rare: 0.15, "Very Rare": 0.04, Legendary: 0.01 } },
  Large:  { count: 16, weights: { Common: 0.30, Uncommon: 0.40, Rare: 0.22, "Very Rare": 0.07, Legendary: 0.01 } },
};

/** Weighted pick */
const pickWeighted = (entries) => {
  const total = entries.reduce((s, e) => s + e.weight, 0);
  if (total <= 0) return entries[0]?.value;
  const r = Math.random() * total;
  let acc = 0;
  for (const e of entries) { acc += e.weight; if (r <= acc) return e.value; }
  return entries.at(-1)?.value;
};

export default function ShopInventory() {
  const [storeSize, setStoreSize] = useState("Small");
  const [allowDuplicates, setAllowDuplicates] = useState(false);

  // Filters
  const [categories, setCategories] = useState(ALL_CATEGORIES);
  const [rarityAllowed, setRarityAllowed] = useState(new Set(ALL_RARITIES));
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [tagLike, setTagLike] = useState("");

  // Result
  const [items, setItems] = useState([]);

  const pool = useMemo(() => {
    const min = priceMin === "" ? -Infinity : Number(priceMin);
    const max = priceMax === "" ? Infinity : Number(priceMax);
    const tag = (tagLike || "").trim().toLowerCase();
    return CATALOG.filter((i) =>
      categories.includes(i.category) &&
      rarityAllowed.has(i.rarity) &&
      i.price >= min && i.price <= max &&
      (!tag || (i.tags || []).some(t => t.toLowerCase().includes(tag)) || i.name.toLowerCase().includes(tag))
    );
  }, [categories, rarityAllowed, priceMin, priceMax, tagLike]);

  const rarityWeights = useMemo(() => {
    const base = STORE_PRESETS[storeSize].weights;
    const obj = {};
    for (const r of ALL_RARITIES) obj[r] = rarityAllowed.has(r) ? (base[r] || 0) : 0;
    const sum = Object.values(obj).reduce((s, v) => s + v, 0);
    if (sum === 0) {
      const allowed = ALL_RARITIES.filter(r => rarityAllowed.has(r));
      allowed.forEach(r => { obj[r] = 1 / allowed.length; });
    }
    return obj;
  }, [storeSize, rarityAllowed]);

  const generate = () => {
    const { count } = STORE_PRESETS[storeSize];
    const byRarity = new Map(ALL_RARITIES.map(r => [r, []]));
    for (const it of pool) byRarity.get(it.rarity)?.push(it);

    const out = [];
    const used = new Set();
    const wheel = ALL_RARITIES.map(r => ({ value: r, weight: rarityWeights[r] || 0 }));

    for (let i = 0; i < count; i++) {
      let rarity = pickWeighted(wheel);
      if (!byRarity.get(rarity)?.length) {
        const fallback = ALL_RARITIES.find(r => (byRarity.get(r) || []).length);
        if (!fallback) break;
        rarity = fallback;
      }
      const list = byRarity.get(rarity);
      if (!list.length) continue;

      let pick = list[Math.floor(Math.random() * list.length)];
      if (!allowDuplicates) {
        let tries = 0;
        while (tries < 10 && used.has(pick.id)) { pick = list[Math.floor(Math.random() * list.length)]; tries++; }
        if (used.has(pick.id)) {
          const rest = pool.filter(p => !used.has(p.id));
          if (!rest.length) break;
          pick = rest[Math.floor(Math.random() * rest.length)];
        }
        used.add(pick.id);
      }

      out.push({ id: pick.id, name: pick.name, category: pick.category, rarity: pick.rarity, price: pick.price, tags: pick.tags || [] });
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

  const toggleRarity   = (r) => setRarityAllowed(prev => { const n = new Set(prev); n.has(r) ? n.delete(r) : n.add(r); return n; });
  const toggleCategory = (c) => setCategories(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);

  return (
    <div className="shop-page shop-page--isolate">
      <div className="shop-card">
        <header className="shop-header">
          <h2>Shop Inventory Generator</h2>
          <div className="row gap">
            <div className="size-toggle" role="group" aria-label="Store size">
              {Object.keys(STORE_PRESETS).map(size => (
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
                <input type="checkbox" checked={allowDuplicates} onChange={e => setAllowDuplicates(e.target.checked)} />
                <span /> Allow duplicates
              </label>
            </div>
          </div>
        </header>

        {/* Filters */}
        <section className="shop-filters">
          <div className="grid">
            <div className="field field--cats">
              <label>Categories</label>
              <div className="pillbox">
                {ALL_CATEGORIES.map(c => (
                  <button key={c} className={`pill ${categories.includes(c) ? "on" : ""}`} onClick={() => toggleCategory(c)} type="button">
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="field field--rarity">
              <label>Rarity</label>
              <div className="pillbox">
                {ALL_RARITIES.map(r => (
                  <button key={r} className={`pill ${rarityAllowed.has(r) ? "on" : ""}`} onClick={() => toggleRarity(r)} type="button">
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="field field--pmin">
              <label>Price Min (gp)</label>
              <input className="shop-input" type="number" inputMode="numeric" value={priceMin}
                     onChange={(e)=>setPriceMin(e.target.value)} placeholder="0" />
            </div>

            <div className="field field--pmax">
              <label>Price Max (gp)</label>
              <input className="shop-input" type="number" inputMode="numeric" value={priceMax}
                     onChange={(e)=>setPriceMax(e.target.value)} placeholder="∞" />
            </div>

            <div className="field field--tag">
              <label>Tag / Name contains</label>
              <input className="shop-input" value={tagLike} onChange={(e)=>setTagLike(e.target.value)}
                     placeholder="e.g. potion, stealth, bow ..." />
            </div>
          </div>

          <div className="actions">
            <button className="btn primary" onClick={generate}>Generate</button>
            <button className="btn" onClick={copyToClipboard}>Copy</button>
            <button className="btn" onClick={exportJson}>Export JSON</button>
          </div>
        </section>

        {/* Output */}
        <section className="shop-results">
          <div className="results-header">
            <div>Item</div><div>Category</div><div>Rarity</div><div className="right">Price</div>
          </div>

          {items.length === 0 ? (
            <div className="empty">No items yet. Click <strong>Generate</strong> to create an inventory.</div>
          ) : (
            items.map((i) => (
              <div key={i.id + Math.random()} className="rowline">
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
            Store size controls <em>how many items</em> and the <em>rarity odds</em>. Filters limit the candidate pool before rolling.
          </div>
        </footer>
      </div>
    </div>
  );
}
