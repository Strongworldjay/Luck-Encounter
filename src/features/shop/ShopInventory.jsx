import { useMemo, useState } from 'react';
import { useItemCatalog } from '../../hooks/useItemCatalog.js';
import { EMPTY_FILTERS, filterEntries, rarityLabel, categoryLabel, RARITIES } from '../../data/items/index.js';
import { drawItems } from '../../utils/items.js';
import { weightedKey } from '../../utils/random.js';
import { downloadJson } from '../../utils/files.js';
import { SHOP_PRESETS } from '../../config/itemGroups.js';
import { STORE_SIZES, SHOP_RARITY_WEIGHTS, rollPriceFromCategoryAndRarity } from '../../config/shop.js';
import ItemFilters, { FilterSummary } from '../../components/items/ItemFilters.jsx';
import ItemTags from '../../components/items/ItemTags.jsx';
import './shop.css';
export default function ShopInventory() {
  const { entries } = useItemCatalog();
  const [filters, setFilters] = useState({ ...EMPTY_FILTERS });
  const [storeSize, setStoreSize] = useState('Small'); const [allowDuplicates, setAllowDuplicates] = useState(false);
  const [open, setOpen] = useState(false); const [items, setItems] = useState([]); const [message, setMessage] = useState('');
  const pool = useMemo(() => filterEntries(entries, filters), [entries, filters]);
  const count = new Set(pool.map((item) => item.itemId)).size;
  const preset = !filters.categories.length ? 'All Items' : Object.keys(SHOP_PRESETS).find((name) => SHOP_PRESETS[name].length === filters.categories.length && SHOP_PRESETS[name].every((category) => filters.categories.includes(category))) || 'Custom';
  const generate = () => {
    const drawn = drawItems(pool, STORE_SIZES[storeSize], { allowDuplicates, rarity: () => weightedKey(SHOP_RARITY_WEIGHTS) }).map((item, index) => {
      const price = rollPriceFromCategoryAndRarity(item.category, rarityLabel(item.rarity));
      return { ...item, rowId: `${item.itemId}-${index}`, price: price.finalPrice, basePrice: price.base, isSale: price.isSale };
    });
    drawn.sort((a, b) => RARITIES.indexOf(a.rarity) - RARITIES.indexOf(b.rarity) || a.name.localeCompare(b.name));
    setItems(drawn); setMessage(drawn.length < STORE_SIZES[storeSize] ? `All ${drawn.length} matching unique items are shown.` : '');
  };
  const copy = async () => { try { await navigator.clipboard.writeText(items.map((item) => `${item.name} · ${rarityLabel(item.rarity)} · ${item.price} gp · ${item.types.join(', ')} · ${item.themes.join(', ')}`).join('\n')); setMessage('Inventory copied.'); } catch { setMessage('Clipboard access is unavailable. Use Export JSON to save the inventory.'); } };
  return <section className="shop-page tool-page">
    <header className="tool-heading"><div><span className="eyebrow">DM TOOLS</span><h1>Shop inventory</h1><p>Stock a shop by category, creature type, or theme.</p></div></header>
    <div className="shop-controls"><label>Store size<select value={storeSize} onChange={(event) => setStoreSize(event.target.value)}>{Object.keys(STORE_SIZES).map((size) => <option key={size}>{size}</option>)}</select></label><label>Shop preset<select value={preset} onChange={(event) => setFilters({ ...filters, categories: event.target.value === 'All Items' ? [] : SHOP_PRESETS[event.target.value] })}><option value="Custom" disabled>Custom</option>{Object.keys(SHOP_PRESETS).map((preset) => <option key={preset}>{preset}</option>)}</select></label><label className="shop-duplicates"><input type="checkbox" checked={allowDuplicates} onChange={(event) => setAllowDuplicates(event.target.checked)} />Allow duplicates</label></div>
    <div className="shop-toolbar"><button className="app-btn" onClick={() => setOpen(true)}>Filters</button><span className="muted">{count.toLocaleString()} matching items</span><div><button className="app-btn app-btn--primary" disabled={!count} onClick={generate}>Generate inventory</button><button className="app-btn" disabled={!items.length} onClick={copy}>Copy</button><button className="app-btn" disabled={!items.length} onClick={() => downloadJson('shop-inventory.json', items)}>Export JSON</button></div></div>
    <FilterSummary filters={filters} onClear={() => setFilters({ ...EMPTY_FILTERS })} />
    {message && <p role="status" className="muted">{message}</p>}
    <div className="shop-results">{items.map((item) => <article className="shop-item" key={item.rowId}><div><h2>{item.name}</h2><p>{categoryLabel(item.category)} · {rarityLabel(item.rarity)}</p><ItemTags item={item} /></div><div className="shop-price"><strong>{item.price.toLocaleString()} gp</strong>{item.isSale && <span>Sale</span>}{item.rarityAdjusted && <small>Nearest available rarity</small>}</div></article>)}</div>
    {!items.length && <p className="empty-state">{count ? 'Generate an inventory to begin.' : 'No items match these filters. Clear a filter to continue.'}</p>}
    {open && <ItemFilters filters={filters} onChange={setFilters} onClose={() => setOpen(false)} count={count} />}
  </section>;
}
