import { useMemo, useState } from 'react';
import { useItemCatalog } from '../../hooks/useItemCatalog.js';
import { EMPTY_FILTERS, categoryLabel, rarityLabel, matchesItem } from '../../data/items/index.js';
import { CREATURE_TYPES, ITEM_THEMES } from '../../data/items/taxonomy.js';
import ItemTags from '../../components/items/ItemTags.jsx';
import ItemFilters, { FilterSummary, TagSelect } from '../../components/items/ItemFilters.jsx';
import Modal from '../../components/ui/Modal.jsx';
import { downloadJson } from '../../utils/files.js';
import './ItemCatalog.css';
const PAGE_SIZE = 40;
export default function ItemCatalog() {
  const { items, saveTags } = useItemCatalog();
  const [filters, setFilters] = useState({ ...EMPTY_FILTERS });
  const [open, setOpen] = useState(false); const [active, setActive] = useState(null);
  const [page, setPage] = useState(1); const [reviewOnly, setReviewOnly] = useState(false);
  const [message, setMessage] = useState('');
  const matching = useMemo(() => items.filter((item) => matchesItem(item, filters) && (!reviewOnly || item.tagBasis === 'category')), [items, filters, reviewOnly]);
  const pages = Math.max(1, Math.ceil(matching.length / PAGE_SIZE)); const safePage = Math.min(page, pages);
  const update = (next) => { setFilters(next); setPage(1); };
  return <section className="catalog-page tool-page">
    <header className="tool-heading"><div><span className="eyebrow">THE REMARKABLE HOARD</span><h1>Item catalog</h1><p>Every item, one place. Find the right reward for your adventure.</p></div><button className="app-btn" onClick={() => downloadJson('item-catalog.json', items)}>Export catalog</button></header>
    <div className="catalog-toolbar"><input type="search" aria-label="Search items" placeholder="Search item names…" value={filters.query} onChange={(event) => update({ ...filters, query: event.target.value })} /><button className="app-btn" onClick={() => setOpen(true)}>Filters</button><label><input type="checkbox" checked={reviewOnly} onChange={(event) => { setReviewOnly(event.target.checked); setPage(1); }} />Review broad suggestions</label></div>
    <FilterSummary filters={filters} onClear={() => update({ ...EMPTY_FILTERS })} />
    <div className="catalog-pagination"><span>{matching.length.toLocaleString()} unique items</span><div><button className="app-btn" disabled={safePage === 1} onClick={() => setPage(safePage - 1)}>Previous</button><span>{safePage} / {pages}</span><button className="app-btn" disabled={safePage === pages} onClick={() => setPage(safePage + 1)}>Next</button></div></div>
    {message && <p role="status">{message}</p>}
    <div className="catalog-list">{matching.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE).map((item) => <article className="catalog-item" key={item.id}>
      <div><h2>{item.name}</h2><p>{[...new Set(item.variants.map((variant) => categoryLabel(variant.category)))].join(' · ')}</p><div className="catalog-rarities">{[...new Set(item.variants.map((variant) => variant.rarity))].map((rarity) => <span key={rarity} data-rarity={rarity}>{rarityLabel(rarity)}</span>)}</div>{item.description && <p>{item.description}</p>}{item.available === false && <p>Unavailable: original entry is redacted.</p>}</div>
      <ItemTags item={item} /><button className="app-btn" onClick={() => setActive(item)} aria-label={`Edit tags for ${item.name}`}>Edit tags</button>
    </article>)}</div>
    {!matching.length && <p className="empty-state">No items match these filters. Try clearing a tag or category.</p>}
    {open && <ItemFilters filters={filters} onChange={update} onClose={() => setOpen(false)} count={matching.length} includeRarity />}
    {active && <TagEditor item={active} onClose={() => setActive(null)} onSave={(tags) => {
      const saved = saveTags(active.id, tags); setMessage(saved ? `Updated tags for ${active.name}.` : 'Tags updated for this visit. Export the catalog to keep your changes.'); setActive(null);
    }} />}
  </section>;
}
function TagEditor({ item, onClose, onSave }) {
  const [types, setTypes] = useState(item.types); const [themes, setThemes] = useState(item.themes);
  return <Modal title={item.name} onClose={onClose} footer={<><span className="muted">Changes are saved on this device.</span><button className="app-btn app-btn--primary" disabled={!types.length || !themes.length} onClick={() => onSave({ types, themes })}>Save tags</button></>}>
    <p className="filter-help">{item.tagBasis === 'category' ? 'These tags are broad category-based suggestions. ' : item.tagBasis === 'name' ? 'These tags were suggested from the item’s name. ' : ''}Neutral means no specific creature association. Choose at least one type and one theme. Export the catalog to keep a shareable copy.</p>
    <TagSelect label="Creature types" options={CREATURE_TYPES} selected={types} onChange={setTypes} />
    <TagSelect label="Themes" options={ITEM_THEMES} selected={themes} onChange={setThemes} />
  </Modal>;
}
