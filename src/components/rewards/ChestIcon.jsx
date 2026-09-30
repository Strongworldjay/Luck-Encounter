const COLORS = { wooden:'#9b6d45', steel:'#728895', bronze:'#b98452', silver:'#b9cccf', gold:'#cca44f', platinum:'#d4ddd9', emerald:'#5c9e80' };
export default function ChestIcon({ tier, open }) {
  return <svg viewBox="0 0 280 190" width="280" height="190" role="img" aria-label={`${open ? 'Opened' : 'Closed'} ${tier} chest`}>
    <ellipse cx="140" cy="169" rx="100" ry="12" fill="currentColor" opacity=".08" />
    {open && <path d="M83 98L63 25l53 47 24-60 24 60 53-47-20 73" fill="var(--accent-warm)" opacity=".18" />}
    <g stroke="var(--app-text)" strokeWidth="2.5" strokeLinejoin="round">
      <path d="M45 97h190v61l-18 12H62l-17-12z" fill={COLORS[tier]} />
      <path d="M45 97h190v14H45zM72 112v56M208 112v56" fill="none" opacity=".5" />
      <g transform={open ? 'translate(0 -34) rotate(-8 140 82)' : undefined}>
        <path d="M45 97V78c0-38 190-38 190 0v19z" fill={COLORS[tier]} />
        <path d="M73 97V62M207 97V62M45 85h190" fill="none" opacity=".5" />
      </g>
      <rect x="125" y="94" width="30" height="35" rx="5" fill="var(--surface)" />
      <path d="M140 105v13" strokeLinecap="round" />
      <circle cx="58" cy="146" r="2" fill="var(--app-text)" /><circle cx="222" cy="146" r="2" fill="var(--app-text)" />
    </g>
  </svg>;
}
