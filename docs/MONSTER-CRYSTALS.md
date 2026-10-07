# Monster Crystals

Player Tools → Monster Crystals offers 13 creature types and six crystal rarities (78 combinations). Humanoid is not offered for new crystals; previously queued Humanoid crystals remain usable. Neutral is reserved for item fallback. Add mixed quantities, then open each crystal individually. Each opening consumes one crystal and produces either one eligible item or nothing.

## Destruction and item odds

Destruction percentages remain unchanged. The item-rarity percentages below are the requested distribution, separate from chest rules. They apply **conditional on a successful opening**, not to every crystal. Common through Very Rare crystals can yield an item one tier above their own rarity where shown.

| Crystal | Destroyed / nothing | Common | Uncommon | Rare | Very Rare | Legendary | Unique |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Common | 90% | 90% | 10% | 0% | 0% | 0% | 0% |
| Uncommon | 75% | 59% | 40% | 1% | 0% | 0% | 0% |
| Rare | 50% | 0% | 60% | 35% | 5% | 0% | 0% |
| Very Rare | 25% | 0% | 20% | 65% | 14% | 1% | 0% |
| Legendary | 5% | 0% | 0% | 30% | 65% | 5% | 0% |
| Unique | 0.1% | 0% | 0% | 0% | 60% | 35% | 5% |

The page's expandable odds table reads `src/config/monsterCrystals.js`.

## Eligibility and matching

- Uses eligible dungeon reward categories plus Skill Books from the shared item catalog; no duplicate loot dataset.
- Excludes direct Weapon and Magic Attack Arts, Boost Arts, Passive Arts, skill points, experience, mana, stamina, currency, and filler. Skill Books can appear.
- On success, matching creature-type items receive 85% of selections and Neutral items 15% when both pools exist. With just one pool, that pool gets all successful selections.
- Neutral fallback means items tagged **only** Neutral. Items tagged for unrelated creatures do not qualify as fallback.
- There is no crystal theme selector. Older saved crystal themes are ignored when a queue loads.
- Item rarity weights are redistributed across the listed rarities actually available in the chosen pool, without changing destruction chances. A missing rarity can never produce an item of an unlisted rarity.
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
