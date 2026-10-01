# The Remarkable Hoard — Luck Encounter

A consolidated React/Vite project with 18 tools, one item catalog, shared multi-tag filters, and responsive coastal light/dark themes.

## Start here

Extract this ZIP into a **new folder**. Do not merge it into the old `src` tree: that would bring the duplicate implementations back. Keep your old project as a backup until you have reviewed this version.

Use Node.js **22.12 or later**:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. No environment variables, API keys, database, or backend are required.

```sh
npm run check      # reward tests, complete data audit, production build
npm run preview    # serves the production build after npm run build
```

For the included browser checks:

```sh
npx playwright install chromium --only-shell
npm run test:ui
```

`npm run test:ui` starts its own local server on port 5174. It verifies 18 sections at 320, 390, and 1366 pixels in both themes, then exercises the main workflows. Optional: set `QA_SCREENSHOTS` to a directory to save screenshots.

## Using the project

- **Dungeon Completion:** enter character luck, choose a dungeon class, set optional filters, draw up to three different rewards, and reveal one. The chosen card slides into the center, the others fade away, and a smooth flip reveals rarity-colored text and an equipment watermark. Bottom controls remain in normal page flow and reserve safe-area space.
- **Monster Crystals:** queue any mix of 14 monster types and six rarities, optionally choose a theme, and open each crystal separately. Your exact destruction chances are applied; successful openings yield only eligible dungeon items with matching types or Neutral fallback. Results persist locally. See `docs/MONSTER-CRYSTALS.md` for odds and this update’s exact file list. Run `npm run test:crystals` for the focused browser checks.
- **Item Catalog:** search every item, filter by category/type/theme/rarity, edit tags, and export the full catalog. "Review broad suggestions" shows entries that only had enough information for category-based tags.
- **Shop Inventory:** select a shop preset and size; filter by type/theme; generate, copy, or export stock. Duplicate items are disabled by default.
- **Chests:** select a tier and chest type. All generated item drops, including extras, respect active item filters. Currency remains separate.
- **Random Wheel:** uses your dungeon luck by default, with optional custom luck. Its item rewards use the same catalog and filters.
- **Reference and player tools:** 986 spells, 158 feats across six groups, character sheets/backstories, skill-point planning, jump calculations, Bingo, and the Insamont bounty board.

Selections within one filter group are OR conditions; different groups are combined with AND. An empty group places no restriction. A theme filter with no matching items produces an empty state, not unrelated loot.

## Maintaining items and tags

The only stored item source is `src/data/items/catalog.json`. A record has one stable ID, one name, arrays of `types` and `themes`, and a `variants` array for category/rarity membership. A repeated item's variants are preserved together. Keep IDs unchanged when updating names or tags.

`src/data/items/taxonomy.js` contains all **116 themes** and **15 creature types** supplied for this project. Theme labels have no numbering. `Neutral` means no specific creature association, not moral alignment. Equipment categories such as Sword remain separate from creature types such as Dragon.

Every record has at least one type and one theme; both support multiple values. Tags are best-effort suggestions from names and categories because the uploaded item lists do not include descriptions. They are not verified rules classifications. Eight familiar named items received specific suggestions, 3,315 use name-based suggestions, and 1,972 use broad category-based suggestions. The editor identifies the latter two bases.

Tag edits save in this browser on this device and immediately affect subsequent draws in the other tools. They are **not** automatically synchronized between players. To publish reviewed tags:

1. Choose **Export catalog** in Item Catalog.
2. Replace `src/data/items/catalog.json` with the exported JSON.
3. Run `npm run check`, then deploy your reviewed source.

The catalog includes 5,295 records: 5,294 available entries plus one preserved, unavailable `[Redacted]` placeholder. All 5,377 distinct name/category/rarity combinations from the chosen source were retained. Duplicate rows no longer store duplicate items; repeated Boost Art occurrences become explicit selection weights.

When a filtered pool lacks the rolled rarity, the generator uses the nearest available rarity within that pool, preferring the lower rarity on a tie. The result says "Nearest available rarity". A small pool returns fewer unique rewards instead of repeating an item.

## Project layout

| Path | Responsibility |
| --- | --- |
| `src/App.jsx` | Navigation, shared dungeon state, lazy-loaded tools |
| `src/config/` | Navigation, dungeon classes, shop/chest rules and category groups |
| `src/data/items/` | Canonical item records, taxonomy, filtering |
| `src/data/spells/`, `src/data/feats/` | Preserved reference content |
| `src/components/` | Navigation, dialogs, tags, filters, reward display |
| `src/features/` | One implementation per tool |
| `src/hooks/` | Theme, media queries, shared item edits |
| `src/utils/` | Sampling, storage, exports, text, optional artwork |
| `src/styles/` | Global theme and application layout only |
| `public/`, `src/assets/` | Referenced artwork and favicon |
| `scripts/`, `tests/` | Data integrity and behavioral checks |
| `docs/` | Exact changes, migration details, and verification results |

## Artwork

The package includes the recovered card back, bounty board/posters, favicon, eight school images, and a generic spell placeholder. Chest, portrait, individual spell, and feat images were not included in the source uploads. Their absence is handled gracefully: code-drawn chests, character initials, school artwork, and clickable feat symbols.

Original individual spell and feat images are available at some paths on the existing live site. To recover that larger collection **before replacing the old deployment**, run:

```sh
npm run assets:restore -- --all
npm run build
```

This can be a large download. The recovery script keeps existing files, downloads original PNGs with four concurrent requests, records unavailable paths in `docs/artwork-recovery.json`, and can be rerun. Without `--all`, it only checks the eight school images. Missing source images continue to use fallbacks. Portrait and chest files can be added manually using the paths below.

To add original artwork later:

| Artwork | Location |
| --- | --- |
| Character portraits | `src/assets/Ryun.png`, `Lucky.png`, `Blu.png`, `Braknir.png` |
| Chest closed/open | `src/assets/wooden.jpg`, `wooden2.jpg`; same pattern for steel, bronze, silver, gold, platinum, emerald |
| Spell artwork | `public/assets/spells/<slug>.png` — lowercase letters/numbers, no spaces/punctuation |
| School fallback | `public/assets/spells/schools/<school>.png` |
| Generic spell art | `public/assets/spells/schools/spell.png` |
| Feat artwork | `public/assets/feats/<slug>.png` — lowercase, apostrophes removed, words joined by hyphens |

Restart Vite or rebuild after adding files so its artwork manifest refreshes. These paths preserve the original project's naming conventions. No external image service is required.

## Mobile behavior

The application paints the entire viewport in the selected theme, uses dynamic viewport sizing, and respects iOS safe-area insets. The reward controls reserve their own space instead of covering content. Inputs remain at least 16px to avoid unwanted iOS input zoom. Long pages scroll normally.

Safari's own address/navigation toolbar is controlled by iOS. This project addresses page gaps, background mismatches, and covered controls; it cannot remove browser chrome. Browser verification used Chromium mobile emulation, not physical iPhone hardware.

## Vercel

This package is ready for your existing Vercel workflow: build command `npm run build`, output directory `dist`. `vercel.json` is included. Replace the old source tree with this reviewed project in your repository, keeping your existing repository/Vercel project linkage. No deployment has been performed by this deliverable.

Read `docs/CHANGES.md` for every added, modified, and removed source file, and `docs/VERIFICATION.md` for the checks completed.

## Card presentation update

See `docs/CARD-UPDATE.md` for this revision’s exact changed files. Reward card fronts show the rarity, item name, and equipment category. Creature-type/theme tags remain available to filters and the catalog but are hidden on reward cards.

Add your wallpaper files to **`public/assets/`** (or `src/assets/`):

- `wallpaperday.png` — light theme, desktop
- `wallpaperdaymobile.png` — light theme, mobile up to 720px
- `wallpapernight.png` — dark theme, desktop
- `wallpapernightmobile.png` — dark theme, mobile up to 720px

These four wallpapers were not included in the uploads, so they are not invented or substituted in this package. Until supplied, the coastal theme remains visible. Restart Vite or rebuild after adding artwork. Mobile uses the desktop wallpaper if only that version is present.

For equipment watermarks, the preferred filename is the lowercase equipment category plus `.png`: `axe.png`, `sword.png`, `heavyarmor.png`, `wondrousitem.png`, etc. The old project’s names such as `armor-symbol.png`, `ring-symbol.png`, and `light-armor.png` are also supported. Put these in `src/assets/` or `public/assets/`. Eleven usable original equipment icons are included; missing icons are simply omitted.

`npm run test:cards` checks the actual animation timing, delayed result text, left/middle/right centering, unchanged empty slots, non-overlapping controls, cancellation, reduced motion, and all four wallpaper source selections. Wallpaper routing uses temporary HTTP fixtures; it does not claim to preview your missing wallpapers.
