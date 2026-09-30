import { categoryLabel, rarityLabel } from '../../data/items/index.js';
import ItemTags from '../items/ItemTags.jsx';
import './Card.css';
import cardBack from '../../assets/card-design.png';
export default function Card({ item, index, revealed, dismissed, onReveal }) {
  if (dismissed) return null;
  return <article className={`reward-card ${revealed ? 'is-revealed' : ''}`} data-rarity={item.rarity}>
    {revealed ? <div className="reward-card__face"><span className="reward-card__rarity">{rarityLabel(item.rarity)}</span><span className="reward-card__symbol" aria-hidden>✦</span><h2>{item.name}</h2><p className="reward-card__category">{categoryLabel(item.category)}</p><ItemTags item={item} compact />{item.rarityAdjusted && <p className="reward-card__note">Nearest available rarity for these filters.</p>}</div>
      : <button onClick={onReveal} aria-label={`Reveal reward card ${index + 1}`}><img src={cardBack} alt="" /><span>Choose {index + 1}</span></button>}
  </article>;
}
