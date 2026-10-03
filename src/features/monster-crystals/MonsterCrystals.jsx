import { useRef, useState } from 'react';
import { useItemCatalog } from '../../hooks/useItemCatalog.js';
import { RARITIES, categoryLabel, rarityLabel } from '../../data/items/index.js';
import { MONSTER_CRYSTAL_TYPES, MONSTER_CRYSTAL_RULES, MAX_CRYSTALS, percent, crystalImageName, isExistingCrystalType } from '../../config/monsterCrystals.js';
import { REWARD_RARITIES } from '../../config/rewards.js';
import { crystalPools, openMonsterCrystal } from '../../utils/monsterCrystals.js';
import { readStorage, writeStorage } from '../../utils/storage.js';
import { artwork, categoryArtwork } from '../../utils/artwork.js';
import './MonsterCrystals.css';
const STORAGE_KEY = 'hoard-monster-crystals-v1';
const colorFor = (rarity) => REWARD_RARITIES.find((entry) => entry.name.replaceAll(' ', '') === rarity)?.cardColor;
function loadQueue() {
  const saved = readStorage(STORAGE_KEY, []);
  if (!Array.isArray(saved)) return [];
  const ids = new Set();
  return saved.filter((entry) => {
    if (!entry || typeof entry.id !== 'string' || ids.has(entry.id) || !isExistingCrystalType(entry.type)
      || !RARITIES.includes(entry.rarity)
      || !['pending', 'destroyed', 'reward'].includes(entry.status)) return false;
    if (entry.status === 'reward' && (!entry.item || typeof entry.item.name !== 'string' || typeof entry.item.category !== 'string' || !RARITIES.includes(entry.item.rarity))) return false;
    ids.add(entry.id); return true;
  }).slice(0, MAX_CRYSTALS).map(({ theme, themeMatched, ...entry }) => {
    // Older queues may have optional themes. They no longer affect unopened crystals.
    void theme; void themeMatched;
    return entry;
  });
}
function CrystalIcon({ broken = false }) {
  return <svg className="mc-crystal" viewBox="0 0 80 96" aria-hidden="true"><g fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
    <path d={broken ? 'M36 4 12 22 18 40 32 34 27 21Z' : 'M40 4 14 22 8 58 40 92 72 58 66 22Z'} fillOpacity=".13" />
    {broken ? <><path d="m44 15 25 15 6 26-25 23-6-30 12-8-16-6Z" fillOpacity=".1" /><path d="m10 57 18-9 6 18-12 18Z" fillOpacity=".15" /></> : <><path d="m40 4-14 28 14 60 14-60Z" fillOpacity=".22" /><path d="m14 22 12 10-18 26m58-36-12 10 18 26M26 32h28" fill="none" /></>}
  </g></svg>;
}
function CrystalArt({ type, broken }) {
  const [missing, setMissing] = useState(false);
  const filename = crystalImageName(type, broken);
  const source = artwork(filename);
  return missing || !source ? <CrystalIcon broken={broken} />
    : <img className="mc-crystal mc-crystal--image" src={source} alt="" onError={() => setMissing(true)} />;
}
export default function MonsterCrystals() {
  const { entries } = useItemCatalog();
  const [type, setType] = useState('Aberration'); const [rarity, setRarity] = useState('Common');
  const [quantity, setQuantity] = useState('1');
  const [queue, setQueue] = useState(loadQueue); const queueRef = useRef(queue);
  const [message, setMessage] = useState('');
  const commit = (next) => {
    queueRef.current = next; setQueue(next);
    if (!writeStorage(STORAGE_KEY, next)) setMessage('Your queue works for this visit, but this browser could not save it.');
  };
  const add = (event) => {
    event.preventDefault();
    const amount = Number(quantity);
    if (!Number.isInteger(amount) || amount < 1 || amount > 50) { setMessage('Choose a whole number from 1 to 50.'); return; }
    if (queueRef.current.length + amount > MAX_CRYSTALS) { setMessage(`The queue holds ${MAX_CRYSTALS} crystals. Clear opened crystals to make room.`); return; }
    const additions = Array.from({ length: amount }, () => ({ id: crypto.randomUUID(), type, rarity, status: 'pending' }));
    setMessage(`Added ${amount} ${rarityLabel(rarity)} ${type} crystal${amount === 1 ? '' : 's'}.`);
    commit([...queueRef.current, ...additions]);
  };
  const open = (id) => {
    const current = queueRef.current.find((entry) => entry.id === id);
    if (!current || current.status !== 'pending') return;
    // Resolve outside React state updaters: Strict Mode must never roll twice.
    const result = openMonsterCrystal(entries, current);
    if (result.status === 'unavailable') { setMessage('No eligible rewards are available. This crystal has not been consumed.'); return; }
    setMessage(result.status === 'destroyed' ? `${rarityLabel(current.rarity)} ${current.type} crystal shattered. Nothing inside.` : `${rarityLabel(current.rarity)} ${current.type} crystal yielded ${result.item.name}.`);
    commit(queueRef.current.map((entry) => entry.id === id ? { ...entry, ...result } : entry));
  };
  const pending = queue.filter((entry) => entry.status === 'pending').length;
  const pools = crystalPools(entries, { type, rarity });
  const candidates = new Set([...pools.matching, ...pools.neutral].map((item) => item.itemId)).size;
  return <section className="monster-crystals-page tool-page">
    <header className="tool-heading"><div><span className="eyebrow">PLAYER TOOLS</span><h1>Monster crystals</h1><p>Gather your crystals. Open them one at a time to discover what survived.</p></div></header>
    <form className="mc-builder" onSubmit={add}>
      <label>Monster type<select value={type} onChange={(event) => setType(event.target.value)}>{MONSTER_CRYSTAL_TYPES.map((value) => <option key={value}>{value}</option>)}</select></label>
      <label>Crystal rarity<select value={rarity} onChange={(event) => setRarity(event.target.value)}>{RARITIES.map((value) => <option key={value} value={value}>{rarityLabel(value)}</option>)}</select></label>
      <label>Quantity<input type="number" min="1" max="50" step="1" value={quantity} onChange={(event) => setQuantity(event.target.value)} required /></label>
      <button className="app-btn app-btn--primary" disabled={!candidates || queue.length >= MAX_CRYSTALS}>Add to queue</button>
      <p className="mc-builder-note">{percent(MONSTER_CRYSTAL_RULES[rarity].destructionChance)} chance of shattering with nothing · {candidates.toLocaleString()} eligible items</p>
    </form>
    <details className="mc-odds"><summary>How crystal rewards work &amp; rarity odds</summary>
      <p>Each crystal is consumed when opened. It either shatters with nothing or yields exactly one dungeon-reward item. No filler, gold, arts, skill points, experience, mana, or stamina.</p>
      <p>On a successful opening, matching monster-type items receive an 85% preference and Neutral items 15% when both pools exist. Otherwise the available pool is used. Unrelated monster types never enter the pool.</p>
      <p>The item chances below apply <strong>only after a successful opening</strong>. Common through Very Rare crystals can yield an item one tier above their own rarity where shown. Missing rarities redistribute their odds over the available pool. Each crystal rolls independently.</p>
      <div className="mc-odds-scroll"><table><caption>Destruction chance and conditional item-rarity percentages</caption><thead><tr><th>Crystal</th><th>Nothing</th>{RARITIES.map((value) => <th key={value}>{rarityLabel(value)}</th>)}</tr></thead><tbody>{RARITIES.map((value) => <tr key={value}><th scope="row">{rarityLabel(value)}</th><td>{percent(MONSTER_CRYSTAL_RULES[value].destructionChance)}</td>{RARITIES.map((itemRarity) => <td key={itemRarity}>{MONSTER_CRYSTAL_RULES[value].itemWeights[itemRarity] ?? 0}%</td>)}</tr>)}</tbody></table></div>
    </details>
    <div className="mc-queue-heading"><h2>Your crystals <span>{pending} unopened · {queue.length - pending} opened</span></h2><button className="app-btn" disabled={pending === queue.length} onClick={() => { setMessage('Opened crystals cleared.'); commit(queueRef.current.filter((entry) => entry.status === 'pending')); }}>Clear opened</button></div>
    <p className="mc-message" role="status" aria-live="polite">{message}</p>
    {!queue.length && <div className="empty-state"><h2>Your collection starts here</h2><p>Add any mix of types and rarities, then open each crystal below.</p></div>}
    <div className="mc-queue">{queue.map((crystal, index) => {
      const item = crystal.status === 'reward' ? crystal.item : null;
      const image = item ? categoryArtwork(item.category) : '';
      return <article key={crystal.id} className={`mc-entry mc-entry--${crystal.status}`} style={{ '--crystal-color': colorFor(crystal.rarity) }} aria-label={`Crystal ${index + 1}: ${rarityLabel(crystal.rarity)} ${crystal.type}`}>
        <div className="mc-entry-header"><CrystalArt key={`${crystal.type}-${crystal.status !== 'pending'}`} type={crystal.type} broken={crystal.status !== 'pending'} /><div><span className="mc-number">CRYSTAL {index + 1}</span><h3>{rarityLabel(crystal.rarity)} {crystal.type}</h3></div></div>
        {crystal.status === 'pending' ? <><p className="mc-risk">{percent(MONSTER_CRYSTAL_RULES[crystal.rarity].destructionChance)} chance of nothing</p><div className="mc-entry-actions"><button className="app-btn app-btn--primary" onClick={() => open(crystal.id)} aria-label={`Open crystal ${index + 1}`}>Open crystal</button><button className="text-btn" onClick={() => commit(queueRef.current.filter((entry) => entry.id !== crystal.id))} aria-label={`Remove crystal ${index + 1}`}>Remove</button></div></> : crystal.status === 'destroyed' ? <div className="mc-result"><h4>Crystal destroyed</h4><p>It shattered. Nothing remained.</p></div> : <div className="mc-result mc-result--item" style={{ '--item-color': colorFor(item.rarity) }}>{image && <img src={image} alt="" className="mc-item-art" />}<span className="mc-item-rarity">{rarityLabel(item.rarity)}</span><h4>{item.name}</h4><p>{categoryLabel(item.category)}</p><small>{crystal.affinity === 'type' ? `${crystal.type} match` : 'Neutral reward'}</small></div>}
      </article>;
    })}</div>
  </section>;
}
