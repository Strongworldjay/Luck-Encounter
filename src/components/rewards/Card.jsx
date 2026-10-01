import { categoryLabel, rarityLabel } from '../../data/items/index.js';
import { categoryArtwork } from '../../utils/artwork.js';
import { REWARD_RARITIES } from '../../config/rewards.js';
import cardBack from '../../assets/card-design.png';
import './Card.css';

export default function Card({ item, index, selected, dismissed, phase, offset, onReveal }) {
  const complete = selected && phase === 'revealed';
  const rarity = REWARD_RARITIES.find((value) => value.name.replaceAll(' ', '') === item.rarity);
  const icon = categoryArtwork(item.category);
  return <article className={`reward-card ${selected ? 'is-selected' : ''} ${dismissed ? 'is-dismissed' : ''} ${complete ? 'is-revealed' : ''}`}
    data-rarity={item.rarity} aria-hidden={dismissed || undefined}
    style={{ '--card-offset': `${offset}px`, '--rarity-color': rarity?.cardColor ?? '#e8edf2' }}>
    <div className="reward-card__motion">
      <div className="reward-card__rotor">
        <div className="reward-card__back" aria-hidden={selected || undefined}>
          <button type="button" onClick={onReveal} disabled={selected || dismissed} tabIndex={selected || dismissed ? -1 : 0} aria-label={`Reveal reward card ${index + 1}`}>
            <img src={cardBack} alt="" draggable="false" />
          </button>
        </div>
        <div className="reward-card__front" aria-hidden={!complete}>
          {icon && <img className="reward-card__watermark" src={icon} alt="" draggable="false" />}
          {complete && <div className="reward-card__content">
            <span className="reward-card__rarity">{rarityLabel(item.rarity)}</span>
            <h2>{item.name}</h2>
            <p className="reward-card__category">{categoryLabel(item.category)}</p>
            {item.rarityAdjusted && <p className="reward-card__note">Nearest available rarity for these filters.</p>}
          </div>}
        </div>
      </div>
    </div>
  </article>;
}
