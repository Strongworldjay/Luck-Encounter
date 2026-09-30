import './ItemTags.css';
export default function ItemTags({ item, compact = false }) {
  return <div className={`item-tags ${compact ? 'item-tags--compact' : ''}`}>
    <div aria-label="Creature types">{item.types.map((type) => <span key={type} className="item-tag item-tag--type">{type}</span>)}</div>
    <div aria-label="Themes">{item.themes.map((theme) => <span key={theme} className="item-tag">{theme}</span>)}</div>
  </div>;
}
