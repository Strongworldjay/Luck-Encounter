# Reward cards and wallpapers — September 30, 2026

- Transparent card backs: no colored footer/padding, no visible Choose 1/2/3 labels. Accessible button names remain.
- A 600 ms move-to-center and enlargement followed by an 850 ms 3D flip. Unchosen cards fade out while preserving their slots. Results appear only after the flip, with a short text fade-in.
- Rarity-colored text and a faint matching border/glow: Common white, Uncommon green, Rare blue, Very Rare purple, Legendary orange, Unique red. Fronts stay dark for legible colored text in either app theme.
- Card fronts show rarity, item name, and equipment category. Creature-type and theme badges remain hidden there; filtering and catalog editing still use them.
- Category-matched PNGs appear at 13% opacity behind the text. Preferred lowercase names and the original project's symbol names are supported. Eleven recovered icons are included.
- Day/night and desktop/mobile wallpaper selection is wired to the requested filenames. **The wallpaper files themselves were not supplied.** Add them to `public/assets/` or `src/assets/` and rebuild; see README.
- Taller cards and bottom controls retain their own layout space, with no overlap. Reduced motion reveals immediately. Clear/redraw cancels an in-progress reveal.

## Verification

`npm run check` passes. `npm run test:cards` passes all six animated selections, wallpaper routing, deferred results, centering, preserved slots, category imagery, cancellation, reduced motion, and control non-overlap. Wallpaper routing uses HTTP fixtures; actual wallpaper appearance cannot be reviewed until the files are supplied. Full prior page regression results remain in `browser-check.json`; the new focused results are in `card-animation-check.json`.

## Files changed in this revision

### Modified

- `README.md`
- `docs/VERIFICATION.md`
- `package.json`
- `scripts/browser-check.mjs`
- `src/App.jsx`
- `src/components/rewards/Card.css`
- `src/components/rewards/Card.jsx`
- `src/config/rewards.js`
- `src/features/rewards/DungeonRewards.css`
- `src/features/rewards/DungeonRewards.jsx`
- `src/styles/app.css`
- `src/utils/artwork.js`

### Added

- `docs/card-animation-check.json`
- `scripts/card-animation-check.mjs`
- `src/assets/axe.png`
- `src/assets/club.png`
- `src/assets/crossbow.png`
- `src/assets/necklace.png`
- `src/assets/pike.png`
- `src/assets/potion.png`
- `src/assets/robe.png`
- `src/assets/shield.png`
- `src/assets/staff.png`
- `src/assets/sword.png`
- `src/assets/warpick.png`
- `src/components/layout/Wallpaper.jsx`
- `src/components/rewards/RewardCards.jsx`
- `docs/CARD-UPDATE.md`

### Removed

None.

