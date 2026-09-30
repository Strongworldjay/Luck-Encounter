import { useMemo, useState } from 'react';
import { useItemCatalog } from '../../hooks/useItemCatalog.js';
import { EMPTY_FILTERS, filterEntries, rarityLabel, categoryLabel } from '../../data/items/index.js';
import { drawItem, drawItems } from '../../utils/items.js';
import { randomInt, weightedKey } from '../../utils/random.js';
import { artwork } from '../../utils/artwork.js';
import { CHEST_SETTINGS, SPECIAL_DROPS } from '../../config/chests.js';
import { CHEST_GROUPS } from '../../config/itemGroups.js';
import ChestIcon from '../../components/rewards/ChestIcon.jsx';
import ItemTags from '../../components/items/ItemTags.jsx';
import ItemFilters, { FilterSummary } from '../../components/items/ItemFilters.jsx';
import './Chests.css';
export default function Chests() {
  const { entries } = useItemCatalog(); const [tier, setTier] = useState('wooden'); const [chestType, setChestType] = useState('Random');
  const [filters, setFilters] = useState({ ...EMPTY_FILTERS }); const [filtersOpen, setFiltersOpen] = useState(false); const [loot, setLoot] = useState(null);
  const matching = useMemo(() => filterEntries(entries, filters), [entries, filters]);
  const pool = useMemo(() => matching.filter((item) => CHEST_GROUPS[chestType].includes(item.category)), [matching, chestType]);
  const count = new Set(pool.map((item) => item.itemId)).size;
  const openChest = () => {
    const config = CHEST_SETTINGS[tier]; const used = new Set(); const items = [];
    const add = (item) => { if (item) { items.push(item); used.add(item.itemId); } };
    add(drawItem(pool, { rarity: weightedKey(config.rarityWeights) }));
    if (chestType === 'Random') {
      let roll = Math.random();
      for (const [category, chance] of Object.entries(SPECIAL_DROPS.chances)) {
        roll -= chance;
        if (roll < 0) { add(drawItem(matching.filter((item) => item.category === category), { rarity: weightedKey(SPECIAL_DROPS.rarityWeights[category]), excluded: used })); break; }
      }
    }
    drawItems(matching.filter((item) => item.category === 'Misc' && !used.has(item.itemId)), randomInt(1, 3), { rarity: 'Common' }).forEach(add);
    setLoot({ tier, chestType, items, gold: chestType === 'Random' ? randomInt(...config.goldRange) : null, lockDC: randomInt(...config.dcRange) });
  };
  const art = artwork(`${tier}${loot?.tier === tier ? '2' : ''}.jpg`);
  return <section className="chests-page tool-page">
    <header className="tool-heading"><div><span className="eyebrow">DM TOOLS</span><h1>Chest loot</h1><p>Choose a chest and discover what lies inside.</p></div><button className="app-btn" onClick={() => setFiltersOpen(true)}>Item filters</button></header>
    <div className="chest-layout"><div className="chest-setup">
      <div className="chest-art">{art ? <img src={art} alt={`${tier} chest`} /> : <ChestIcon tier={tier} open={loot?.tier === tier} />}</div>
      <div className="chest-options" role="group" aria-label="Chest tier">{Object.keys(CHEST_SETTINGS).map((value) => <button className="app-btn" key={value} aria-pressed={tier === value} onClick={() => { setTier(value); setLoot(null); }}>{value[0].toUpperCase() + value.slice(1)}</button>)}</div>
      <label className="chest-type">Chest type<select value={chestType} onChange={(event) => { setChestType(event.target.value); setLoot(null); }}>{Object.keys(CHEST_GROUPS).map((value) => <option key={value}>{value}</option>)}</select></label>
      <FilterSummary filters={filters} onClear={() => setFilters({ ...EMPTY_FILTERS })} />
      <button className="app-btn app-btn--primary" onClick={openChest} disabled={!count}>Open chest</button>
      <p className="muted">{count ? `${count.toLocaleString()} possible main rewards` : 'No items match. Clear a filter or change chest type.'}</p>
    </div><div className="chest-loot" aria-live="polite">{loot ? <><div className="chest-loot__heading"><h2>{loot.tier[0].toUpperCase() + loot.tier.slice(1)} · {loot.chestType}</h2><p>Lockpicking DC <strong>{loot.lockDC}</strong>{loot.gold !== null && <> · <strong>{loot.gold} gp</strong></>}</p></div>{loot.items.map((item) => <article className="chest-loot__item" key={item.itemId}><h3>{item.name}</h3><p>{categoryLabel(item.category)} · {rarityLabel(item.rarity)}{item.rarityAdjusted && ' · Nearest available rarity'}</p><ItemTags item={item} /></article>)}</> : <div className="empty-state"><h2>Ready when you are</h2><p>Your treasure appears here.</p></div>}</div></div>
    {filtersOpen && <ItemFilters filters={filters} onChange={setFilters} onClose={() => setFiltersOpen(false)} count={count} />}
  </section>;
}
