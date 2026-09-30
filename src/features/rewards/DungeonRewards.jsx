import { useMemo, useState } from 'react';
import { DUNGEON_DIFFICULTIES, REWARD_ITEM_TYPES, getRewardRarity } from '../../config/rewards.js';
import { useItemCatalog } from '../../hooks/useItemCatalog.js';
import { filterEntries, EMPTY_FILTERS } from '../../data/items/index.js';
import { drawItems } from '../../utils/items.js';
import { readStorage, writeStorage } from '../../utils/storage.js';
import Card from '../../components/rewards/Card.jsx';
import ItemFilters, { FilterSummary } from '../../components/items/ItemFilters.jsx';
import './DungeonRewards.css';
const initialFilters = () => {
  const saved = readStorage('hoard-reward-filters', {});
  return { ...EMPTY_FILTERS, ...Object.fromEntries(['categories', 'types', 'themes', 'rarities'].map((key) => [key, Array.isArray(saved?.[key]) ? saved[key] : []])) };
};
export default function DungeonRewards({ state, onStateChange }) {
  const { entries } = useItemCatalog(); const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState(initialFilters);
  const pool = useMemo(() => filterEntries(entries.filter((item) => REWARD_ITEM_TYPES.includes(item.category)), filters), [entries, filters]);
  const count = new Set(pool.map((item) => item.itemId)).size;
  const difficulty = DUNGEON_DIFFICULTIES.find((item) => item.id === state.dungeon);
  const luck = Number.isFinite(Number(state.luck)) ? Number(state.luck) : 0;
  const totalLuck = luck + (difficulty?.luck ?? 0);
  const update = (next) => onStateChange((current) => ({ ...current, ...next }));
  const updateFilters = (next) => { setFilters(next); writeStorage('hoard-reward-filters', next); };
  const draw = () => update({ selected: null, cards: drawItems(pool, 3, { rarity: () => getRewardRarity(Math.floor(Math.random() * 100) + 1 + totalLuck).name }) });
  return <section className="rewards-page" aria-label="Dungeon rewards">
    <header className="rewards-header">
      <span className="eyebrow">DUNGEON COMPLETE</span>
      <h1>Congratulations, you have survived the Dungeon!</h1>
      <div className="rewards-controls">
        <label>Character’s Luck<input type="number" inputMode="numeric" min="-10000" max="10000" value={state.luck} onChange={(event) => update({ luck: event.target.value === '' ? '' : Math.max(-10000, Math.min(10000, Number(event.target.value) || 0)) })} /></label>
        <div className="rewards-total"><span>Total Luck</span><strong>{totalLuck >= 0 ? '+' : ''}{totalLuck}</strong></div>
        <button className="app-btn" onClick={() => setOpen(true)}>Filters{filters.categories.length + filters.types.length + filters.themes.length > 0 ? ' •' : ''}</button>
      </div>
      <div className="dungeon-difficulty" role="group" aria-label="Dungeon class">{DUNGEON_DIFFICULTIES.map(({ id, luck }) => <button key={id} aria-pressed={state.dungeon === id} onClick={() => update({ dungeon: id })}><strong>{id}</strong><span>{luck >= 0 ? '+' : ''}{luck} Luck</span></button>)}</div>
      <FilterSummary filters={filters} onClear={() => updateFilters({ ...EMPTY_FILTERS })} />
    </header>
    <div className={`reward-stage ${state.selected !== null ? 'has-selection' : ''}`}>
      {state.cards.length ? <div className="reward-cards">{state.cards.map((item, index) => <Card key={`${item.itemId}-${index}`} item={item} index={index} revealed={state.selected === index} dismissed={state.selected !== null && state.selected !== index} onReveal={() => { if (state.selected === null) update({ selected: index }); }} />)}</div> : <div className="reward-intro"><div className="reward-intro__mark" aria-hidden>✧</div><h2>Your next discovery awaits</h2><p>Draw three cards. Choose one to reveal your reward.</p></div>}
      <p className="rewards-status" aria-live="polite">{!count ? 'No rewards match these filters. Clear a filter to draw again.' : state.cards.length && state.selected === null ? 'Choose a card.' : state.selected !== null ? 'Your reward is revealed.' : `${count.toLocaleString()} possible rewards`}</p>
    </div>
    <footer className="rewards-dock"><button className="app-btn app-btn--primary" disabled={!count} onClick={draw}>✦ Draw reward cards</button><button className="app-btn" disabled={!state.cards.length} onClick={() => update({ cards: [], selected: null })}>Clear cards</button></footer>
    {open && <ItemFilters filters={filters} onChange={updateFilters} onClose={() => setOpen(false)} count={count} categories={REWARD_ITEM_TYPES} />}
  </section>;
}
