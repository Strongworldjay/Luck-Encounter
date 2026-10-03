# Monster Crystals

Player Tools → Monster Crystals offers 13 creature types and six crystal rarities (78 combinations). Humanoid is not offered for new crystals; previously queued Humanoid crystals remain usable. Neutral is reserved for item fallback. Add mixed quantities, then open each crystal individually. Each opening consumes one crystal and produces either one eligible item or nothing.

## Destruction and item odds

Destruction percentages are the requested exact values. The item-rarity percentages are conservative defaults chosen for this feature, separate from chest rules. They apply **conditional on a successful opening**, not to every crystal. Drops are capped at the crystal's rarity.

| Crystal | Destroyed / nothing | Common | Uncommon | Rare | Very Rare | Legendary | Unique |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Common | 90% | 100% | 0% | 0% | 0% | 0% | 0% |
| Uncommon | 75% | 90% | 10% | 0% | 0% | 0% | 0% |
| Rare | 50% | 70% | 25% | 5% | 0% | 0% | 0% |
| Very Rare | 25% | 45% | 40% | 14% | 1% | 0% | 0% |
| Legendary | 5% | 15% | 40% | 35% | 9% | 1% | 0% |
| Unique | 0.1% | 5% | 15% | 45% | 28% | 6% | 1% |

Edit `src/config/monsterCrystals.js` to adjust these defaults. The page's expandable odds table reads the same configuration.

## Eligibility and matching

- Uses the existing dungeon reward categories and shared item catalog; no duplicate loot dataset.
- Excludes Weapon Art, Boost Art, Passive Art, skill points, experience, mana, stamina, currency, and filler. No shop-only categories enter the pool.
- On success, matching creature-type items receive 85% of selections and Neutral items 15% when both pools exist. With just one pool, that pool gets all successful selections.
- Neutral fallback means items tagged **only** Neutral. Items tagged for unrelated creatures do not qualify as fallback.
- There is no crystal theme selector. Older saved crystal themes are ignored when a queue loads.
- Item rarity weights are redistributed across the rarities actually available in the chosen pool, without changing destruction chances or exceeding the crystal tier.
- If no eligible item exists, the crystal remains unopened; it is not silently consumed.
- Uses browser tag edits immediately. Matching is only as accurate as the shared catalog's editable, inferred tags.
- Each crystal rolls independently; different crystals can yield the same item. A resolved crystal cannot be opened again.

## Queue behavior

Add 1–50 crystals at once, up to 100 total queued/opened entries. Remove unopened crystals individually, or use Clear opened to remove resolved entries. Queue and results persist in this browser on this device, including after reload or navigation. They are not synchronized between devices. This is a local game tool, not a server-enforced inventory.

## Type-specific artwork

Place images in `public/assets/` or `src/assets/`. Use the lowercase creature type followed by `crystal.png` for the unopened crystal and `crystalbroken.png` after it is opened, whether it yielded an item or nothing. For example, Beast uses `beastcrystal.png` and `beastcrystalbroken.png`; Dragon uses `dragoncrystal.png` and `dragoncrystalbroken.png`. The same convention applies to all 13 types. Missing images use the built-in icon until artwork is supplied. Restart Vite or rebuild after adding images.

## Files in the initial Monster Crystals revision

Updated:
- `README.md`
- `package.json`
- `src/App.jsx`
- `src/config/navigation.js`
- `scripts/browser-check.mjs`
- `docs/browser-check.json`
- `docs/VERIFICATION.md`

Added:
- `src/config/monsterCrystals.js`
- `src/utils/monsterCrystals.js`
- `src/features/monster-crystals/MonsterCrystals.jsx`
- `src/features/monster-crystals/MonsterCrystals.css`
- `tests/monster-crystals.test.mjs`
- `scripts/monster-crystals-check.mjs`
- `docs/monster-crystals-check.json`
- `docs/MONSTER-CRYSTALS.md`

Removed: none.
