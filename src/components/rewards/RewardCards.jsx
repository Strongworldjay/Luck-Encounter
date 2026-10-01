import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery.js';
import { categoryLabel, rarityLabel } from '../../data/items/index.js';
import Card from './Card.jsx';

// Match the center/flip durations in Card.css. A single phase gates all result text.
export const REVEAL_DURATION = 1450;
export default function RewardCards({ cards, selected, onSelect }) {
  const tray = useRef(null);
  const [phase, setPhase] = useState(selected === null ? 'ready' : 'revealed');
  const [offset, setOffset] = useState(0);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const selectionLock = useRef(false);

  useEffect(() => {
    selectionLock.current = selected !== null;
    if (selected === null) setPhase('ready');
  }, [cards, selected]);
  useEffect(() => {
    if (phase !== 'revealing') return;
    const timer = setTimeout(() => setPhase('revealed'), reducedMotion ? 0 : REVEAL_DURATION);
    return () => clearTimeout(timer);
  }, [phase, cards, reducedMotion]);
  useLayoutEffect(() => {
    const element = tray.current;
    const measure = () => {
      const slot = element?.children[selected];
      if (!slot || selected === null) { setOffset(0); return; }
      const bounds = element.getBoundingClientRect();
      const cardBounds = slot.getBoundingClientRect();
      setOffset(bounds.left + bounds.width / 2 - cardBounds.left - cardBounds.width / 2);
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [selected, cards]);

  const select = (index) => {
    if (selectionLock.current || selected !== null) return;
    selectionLock.current = true;
    setPhase(reducedMotion ? 'revealed' : 'revealing');
    onSelect(index);
  };
  const item = selected === null ? null : cards[selected];
  return <>
    <div ref={tray} className="reward-cards" data-phase={phase} data-selected={selected !== null}>
      {cards.map((item, index) => <Card key={`${item.itemId}-${index}`} item={item} index={index}
        selected={selected === index} dismissed={selected !== null && selected !== index}
        phase={phase} offset={selected === index ? offset : 0} onReveal={() => select(index)} />)}
    </div>
    <p className="rewards-status" role="status" aria-live="polite" aria-atomic="true" aria-label={phase === 'revealed' && item ? `${rarityLabel(item.rarity)} · ${item.name} · ${categoryLabel(item.category)}` : undefined}>
      {selected === null ? 'Choose a card.' : phase === 'revealed' && item ? 'Your reward is revealed.' : 'Revealing your reward…'}
    </p>
  </>;
}
