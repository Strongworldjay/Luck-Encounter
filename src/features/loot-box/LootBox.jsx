import { useMemo, useState } from 'react';
import { useItemCatalog } from '../../hooks/useItemCatalog.js';
import { EMPTY_FILTERS, categoryLabel, rarityLabel } from '../../data/items/index.js';
import { CHEST_GROUPS } from '../../config/itemGroups.js';
import { LOOT_BOX_WEIGHTS } from '../../config/lootBoxes.js';
import { lootBoxPools, openLootBox } from '../../utils/lootBoxes.js';
import ItemFilters, { FilterSummary } from '../../components/items/ItemFilters.jsx';
import ItemTags from '../../components/items/ItemTags.jsx';
import './LootBox.css';

const COLORS = { Common:'#b6c7d0', Uncommon:'#69d68b', Rare:'#70b3ff', VeryRare:'#ca98ff', Legendary:'#ffba64', Unique:'#ff7e89' };
const filterCategories = [...new Set(Object.values(CHEST_GROUPS).flat())].filter((category) => category !== 'Misc');

function BoxArtwork({ open }) {
  return <svg className={`loot-box-art${open ? ' loot-box-art--open' : ''}`} viewBox="0 0 240 210" fill="none" aria-hidden="true">
    <ellipse cx="120" cy="185" rx="90" ry="12" fill="currentColor" opacity=".12" />
    {open && <path d="M70 68 55 36m65 25V19m51 49 16-32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".65" />}
    <path d="M37 90 119 113 203 90 185 174 119 194 54 174Z" fill="currentColor" opacity=".19" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d="M119 113v81M54 174l65 20 66-20" stroke="currentColor" strokeWidth="3" opacity=".75" />
    <path d="m37 90 82 23 84-23" stroke="currentColor" strokeWidth="3" />
    <path d={open ? 'M36 64 119 40 206 64 204 82 119 104 37 82Z' : 'M32 77 119 53 208 77 208 94 119 119 32 94Z'} fill="currentColor" opacity=".46" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d={open ? 'M119 40v64' : 'M119 53v66'} stroke="currentColor" strokeWidth="3" opacity=".55" />
    <path d="m108 143 11-8 11 8v17l-11 8-11-8Z" fill="currentColor" opacity=".8" />
  </svg>;
}

export default function LootBox() {
  const { entries } = useItemCatalog();
  const [rarity, setRarity] = useState('Common');
  const [type, setType] = useState('Random');
  const [filters, setFilters] = useState({ ...EMPTY_FILTERS });
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [opened, setOpened] = useState(null);
  const { main } = useMemo(() => lootBoxPools(entries, filters, type), [entries, filters, type]);
  const mainCount = new Set(main.map((item) => item.itemId)).size;
  const changeFilters = (next) => { setFilters(next); setOpened(null); };

  return <section className="loot-box-page tool-page" style={{ '--loot-color': COLORS[rarity] }}>
    <header className="tool-heading"><div><span className="eyebrow">PLAYER TOOLS</span><h1>Loot Box</h1><p>Pick a rarity and box type, then open it for a reward.</p></div><button className="app-btn" onClick={() => setFiltersOpen(true)}>Item filters</button></header>
    <div className="loot-box-layout">
      <div className="loot-box-setup">
        <div className="loot-box-illustration"><BoxArtwork open={Boolean(opened)} /><span>{rarityLabel(rarity)} Loot Box</span></div>
        <div className="loot-box-tiers" role="group" aria-label="Loot box rarity">{Object.keys(LOOT_BOX_WEIGHTS).map((value) => <button type="button" className="app-btn" key={value} aria-pressed={rarity === value} onClick={() => { setRarity(value); setOpened(null); }}>{rarityLabel(value)}</button>)}</div>
        <label className="loot-box-type">Box type<select value={type} onChange={(event) => { setType(event.target.value); setOpened(null); }}>{Object.keys(CHEST_GROUPS).map((value) => <option key={value} value={value}>{value === 'Random' ? 'Standard · all equipment' : value}</option>)}</select></label>
        <FilterSummary filters={filters} onClear={() => changeFilters({ ...EMPTY_FILTERS })} />
        <button type="button" className="app-btn app-btn--primary loot-box-open" onClick={() => setOpened(openLootBox(entries, { rarity, type, filters }))} disabled={!mainCount}>Open Loot Box</button>
        <p className="muted">{mainCount ? `${mainCount.toLocaleString()} possible main rewards.` : 'No main items match these filters.'} One main item per box, with a chance at an extra potion, ammunition, scroll, gem, or Skill Book. No gold or miscellaneous items.</p>
        <details className="loot-box-odds"><summary>Rarity odds</summary><p>{Object.entries(LOOT_BOX_WEIGHTS[rarity]).map(([name, chance]) => `${rarityLabel(name)} ${Math.round(chance * 100)}%`).join(' · ')}</p><p>Extra rewards use the chest bonus odds; only one extra category can roll per box.</p></details>
      </div>
      <div className="loot-box-results" aria-live="polite">{opened ? <><div className="loot-box-results__heading"><span>BOX OPENED</span><h2>{rarityLabel(opened.rarity)} · {opened.type === 'Random' ? 'Standard' : opened.type}</h2></div>{opened.items.map((item, index) => <article className="loot-box-item" key={item.itemId} style={{ '--item-color': COLORS[item.rarity] }}><span className="loot-box-item__role">{index ? 'EXTRA REWARD' : 'MAIN REWARD'} · {rarityLabel(item.rarity)}</span><h3>{item.name}</h3><p>{categoryLabel(item.category)}{item.rarityAdjusted && ' · Nearest available rarity'}</p><ItemTags item={item} /></article>)}{opened.items.length === 1 && <p className="muted">No extra reward this time.</p>}</> : <div className="empty-state"><h2>Ready to open</h2><p>Your rewards will appear here.</p></div>}</div>
    </div>
    {filtersOpen && <ItemFilters filters={filters} onChange={changeFilters} onClose={() => setFiltersOpen(false)} count={mainCount} categories={filterCategories} help="The box type sets the main item group. Categories, creature types, and themes narrow the main reward. Potions, scrolls, gems, and Skill Books remain possible extra rewards even under those filters; ammunition follows its normal filters." />}
  </section>;
}
