import { useId, useState } from 'react';
import Modal from '../ui/Modal.jsx';
import { ITEM_CATEGORIES, ITEM_THEMES, CREATURE_TYPES } from '../../data/items/taxonomy.js';
import { EMPTY_FILTERS, RARITIES, categoryLabel, rarityLabel } from '../../data/items/index.js';
import './ItemFilters.css';
export function TagSelect({ label, options, selected, onChange, format = (value) => value }) {
  const [query, setQuery] = useState(''); const id = useId();
  const filtered = options.filter((option) => format(option).toLowerCase().includes(query.toLowerCase()));
  const toggle = (value) => onChange(selected.includes(value) ? selected.filter((x) => x !== value) : [...selected, value]);
  return <fieldset className="tag-select">
    <legend>{label} {selected.length > 0 && <small>· {selected.length} selected</small>}</legend>
    {options.length > 15 && <input aria-label={`Find ${label.toLowerCase()}`} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Find ${label.toLowerCase()}…`} />}
    {selected.length > 0 && <div className="tag-select__chosen">{selected.map((value) => <button type="button" key={value} onClick={() => toggle(value)} aria-label={`Remove ${format(value)}`}>{format(value)} ×</button>)}</div>}
    <div className="tag-select__options">{filtered.map((value, index) => <label key={value} htmlFor={`${id}-${index}`}>
      <input id={`${id}-${index}`} type="checkbox" checked={selected.includes(value)} onChange={() => toggle(value)} /><span>{format(value)}</span>
    </label>)}</div>
    {!filtered.length && <p className="muted">No matching tags.</p>}
  </fieldset>;
}
export default function ItemFilters({ filters, onChange, onClose, count, categories = ITEM_CATEGORIES, includeRarity = false }) {
  return <Modal title="Item filters" onClose={onClose} footer={<><span className="muted">{count.toLocaleString()} matching items</span><button className="app-btn" onClick={() => onChange({ ...EMPTY_FILTERS })}>Reset filters</button><button className="app-btn app-btn--primary" onClick={onClose}>Done</button></>}>
    <p className="filter-help">Choose any matching tag within each group. Selected groups are combined. An empty group includes everything.</p>
    <TagSelect label="Categories" options={categories} selected={filters.categories} format={categoryLabel} onChange={(categories) => onChange({ ...filters, categories })} />
    <TagSelect label="Creature types" options={CREATURE_TYPES} selected={filters.types} onChange={(types) => onChange({ ...filters, types })} />
    <TagSelect label="Themes" options={ITEM_THEMES} selected={filters.themes} onChange={(themes) => onChange({ ...filters, themes })} />
    {includeRarity && <TagSelect label="Rarities" options={RARITIES} selected={filters.rarities} format={rarityLabel} onChange={(rarities) => onChange({ ...filters, rarities })} />}
  </Modal>;
}
export function FilterSummary({ filters, onClear }) {
  const labels = [...filters.categories.map(categoryLabel), ...filters.types, ...filters.themes, ...filters.rarities.map(rarityLabel)];
  return labels.length ? <div className="filter-summary"><span>{labels.join(' · ')}</span><button className="text-btn" onClick={onClear}>Reset</button></div> : null;
}
