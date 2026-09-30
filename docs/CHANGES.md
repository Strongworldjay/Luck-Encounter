# Exact project changes

The cleaned project is a replacement source tree. Original uploads were left intact; redundant parallel versions were not copied into this package. The inventory below compares the selected organized baseline with the final project, not an unseen Git repository.

## Main changes

- Replaced four separate item-generation implementations with one catalog, shared filter logic, and identity-aware reward sampling. Preserved every distinct name/category/rarity membership.
- Added all 116 unnumbered themes and 15 creature types, a catalog browser, per-item multi-tag editing, and JSON export. Suggested tags remain reviewable.
- Removed duplicate stored entries; kept repeated Boost Art weights explicitly. Kept the redacted placeholder unavailable, and removed the nonexistent MagicArt reward category.
- Unified dungeon-class luck modifiers and corrected out-of-range luck rarity handling. Small pools return fewer unique results. Empty rarity pools stay within active filters and show a fallback note.
- Rebuilt dungeon rewards, shop stock, and chest loot around the shared catalog. Retained shop price ranges and chest tier probabilities/DC/gold ranges from the selected source.
- Consolidated reference-page CSS and dialog behavior. Feature CSS stays within its page and cannot change the global body/theme or neighboring tools.
- Replaced the conflicting fixed-height/mobile layouts with viewport-aware sizing, in-flow safe-area controls, wrapping controls, and normal long-page scrolling.
- Preserved spell/feat data and character backstories. Added Homebrew/New normalization for strongworldjay references.
- Fixed repeated wheel rotation and its completion timer; respected reduced motion. Fixed Bingo's seeded generation and persistence of the seed and marked squares together.
- Repaired character story layout, keyboard access, and absent-image handling. Added original school artwork, code-drawn chest fallbacks, and an optional original-artwork recovery command.
- Added a reproducible lockfile, Vercel config, data audit, behavioral tests, browser checks, and setup/migration documentation.

## Consolidation rules

Keep only `src/features/<feature>/` for page implementations. The old root-level components, `src/pages`, `src/feats`, alternate numbered copies, duplicate `SpellGrid`, `useBreakpoint`, and input-zoom locking hook do not belong in this replacement tree. The original reference data arrays are retained once each. Do not combine this tree with the old one.

Recovered but unused backgrounds/icons and duplicate asset copies are excluded. Working card/bounty artwork and the eight school fallbacks are included. Individual spell/feat PNGs can be recovered with `npm run assets:restore -- --all` before replacing the old deployment.

## Modified baseline files (33)

- `src/App.jsx`
- `src/components/layout/Navbar.css`
- `src/components/rewards/Card.css`
- `src/components/rewards/Card.jsx`
- `src/config/navigation.js`
- `src/config/rewards.js`
- `src/data/spells/metadata.js`
- `src/features/bingo/MagicBingo.jsx`
- `src/features/bingo/MagicBingo.module.css`
- `src/features/bounty/BountyBoard.css`
- `src/features/character-sheets/CharacterSheets.css`
- `src/features/character-sheets/CharacterSheets.jsx`
- `src/features/feats/FeatModal.jsx`
- `src/features/feats/FeatRow.jsx`
- `src/features/feats/Feats.css`
- `src/features/jump/jump.css`
- `src/features/planner/SkillPointPlanner.css`
- `src/features/rewards/Chests.css`
- `src/features/rewards/Chests.jsx`
- `src/features/rewards/RandomWheel.css`
- `src/features/rewards/RandomWheel.jsx`
- `src/features/shop/ShopInventory.jsx`
- `src/features/shop/shop.css`
- `src/features/spells/SpellCard.jsx`
- `src/features/spells/SpellModal.jsx`
- `src/features/spells/SpellRow.jsx`
- `src/features/spells/SpellsPage.jsx`
- `src/features/spells/spells.css`
- `src/features/spells/utils.js`
- `src/hooks/useTheme.js`
- `src/styles/app.css`
- `src/styles/theme.css`
- `src/utils/items.js`

## Added files (58)

- `README.md`
- `docs/VERIFICATION.md`
- `docs/artwork-recovery.json`
- `docs/browser-check.json`
- `docs/catalog-migration.json`
- `index.html`
- `package-lock.json`
- `package.json`
- `public/assets/bounty1.png`
- `public/assets/bounty2.png`
- `public/assets/bounty3.png`
- `public/assets/bounty4.png`
- `public/assets/bounty5.png`
- `public/assets/bounty6.png`
- `public/assets/bountyboard.png`
- `public/assets/sale.jpg`
- `public/assets/spell-placeholder.svg`
- `public/assets/spells/schools/abjuration.png`
- `public/assets/spells/schools/conjuration.png`
- `public/assets/spells/schools/divination.png`
- `public/assets/spells/schools/enchantment.png`
- `public/assets/spells/schools/evocation.png`
- `public/assets/spells/schools/illusion.png`
- `public/assets/spells/schools/necromancy.png`
- `public/assets/spells/schools/transmutation.png`
- `public/d20favicon.png`
- `scripts/audit-data.mjs`
- `scripts/browser-check.mjs`
- `scripts/restore-artwork.mjs`
- `src/assets/card-design.png`
- `src/components/items/ItemFilters.css`
- `src/components/items/ItemFilters.jsx`
- `src/components/items/ItemTags.css`
- `src/components/items/ItemTags.jsx`
- `src/components/reference/Reference.css`
- `src/components/rewards/ChestIcon.jsx`
- `src/components/ui/Modal.css`
- `src/components/ui/Modal.jsx`
- `src/config/chests.js`
- `src/config/itemGroups.js`
- `src/config/shop.js`
- `src/data/items/catalog.json`
- `src/data/items/index.js`
- `src/data/items/taxonomy.js`
- `src/features/items/ItemCatalog.css`
- `src/features/items/ItemCatalog.jsx`
- `src/features/rewards/DungeonRewards.css`
- `src/features/rewards/DungeonRewards.jsx`
- `src/hooks/useItemCatalog.js`
- `src/utils/artwork.js`
- `src/utils/files.js`
- `src/utils/publicArtwork.js`
- `src/utils/random.js`
- `src/utils/storage.js`
- `src/utils/text.js`
- `tests/rewards.test.mjs`
- `vercel.json`
- `vite.config.js`

## Removed baseline files (3)

- `src/components/feedback/LoadingScreen.css`
- `src/components/feedback/LoadingScreen.jsx`
- `src/data/itemsData.js`

## Preserved baseline files (26)

- `src/components/layout/Navbar.jsx`
- `src/data/feats/epicBoons.js`
- `src/data/feats/generalFeats.js`
- `src/data/feats/masteryFeats.js`
- `src/data/feats/mavenArms.js`
- `src/data/feats/originFeats.js`
- `src/data/feats/racialFeats.js`
- `src/data/spells/cantrips.js`
- `src/data/spells/index.js`
- `src/data/spells/level1.js`
- `src/data/spells/level2.js`
- `src/data/spells/level3.js`
- `src/data/spells/level4.js`
- `src/data/spells/level5.js`
- `src/data/spells/level6.js`
- `src/data/spells/level7.js`
- `src/data/spells/level8.js`
- `src/data/spells/level9.js`
- `src/features/bounty/BountyBoard.jsx`
- `src/features/feats/FeatPageLoader.jsx`
- `src/features/feats/Feats.jsx`
- `src/features/jump/JumpCalculator.jsx`
- `src/features/planner/SkillPointPlanner.jsx`
- `src/features/spells/SpellsFilters.jsx`
- `src/hooks/useMediaQuery.js`
- `src/main.jsx`

`docs/CHANGES.md` is itself newly added. `.gitignore` is also added. The package excludes generated `dist` and installed `node_modules`.

## Selected upload mapping

| Uploaded file | Canonical path |
| --- | --- |
| `App(2).jsx` | `src/App.jsx` |
| `main(3).jsx` | `src/main.jsx` |
| `Navbar(3).jsx` | `src/components/layout/Navbar.jsx` |
| `Navbar(3).css` | `src/components/layout/Navbar.css` |
| `Card(3).jsx` | `src/components/rewards/Card.jsx` |
| `Card(3).css` | `src/components/rewards/Card.css` |
| `LoadingScreen(3).jsx` | `Removed: artificial loading screen` |
| `LoadingScreen(3).css` | `Removed: artificial loading screen` |
| `app(3).css` | `src/styles/app.css` |
| `theme(3).css` | `src/styles/theme.css` |
| `navigation(1).js` | `src/config/navigation.js` |
| `rewards(1).js` | `src/config/rewards.js` |
| `items(1).js` | `src/utils/items.js` |
| `itemsData(3).js` | `src/data/items/catalog.json (migrated)` |
| `BountyBoard(3).jsx` | `src/features/bounty/BountyBoard.jsx` |
| `BountyBoard(3).css` | `src/features/bounty/BountyBoard.css` |
| `CharacterSheets(3).jsx` | `src/features/character-sheets/CharacterSheets.jsx` |
| `CharacterSheets(3).css` | `src/features/character-sheets/CharacterSheets.css` |
| `Chests(3).jsx` | `src/features/rewards/Chests.jsx` |
| `Chests(3).css` | `src/features/rewards/Chests.css` |
| `JumpCalculator(2).jsx` | `src/features/jump/JumpCalculator.jsx` |
| `jump(2).css` | `src/features/jump/jump.css` |
| `SkillPointPlanner(3).jsx` | `src/features/planner/SkillPointPlanner.jsx` |
| `SkillPointPlanner(3).css` | `src/features/planner/SkillPointPlanner.css` |
| `ShopInventory(1).jsx` | `src/features/shop/ShopInventory.jsx` |
| `shop(1).css` | `src/features/shop/shop.css` |
| `SpellsPage(1).jsx` | `src/features/spells/SpellsPage.jsx` |
| `FeatPageLoader(1).jsx` | `src/features/feats/FeatPageLoader.jsx` |
| `Feats(3).jsx` | `src/features/feats/Feats.jsx` |
| `Feats(3).css` | `src/features/feats/Feats.css` |
| `FeatRow(3).jsx` | `src/features/feats/FeatRow.jsx` |
| `FeatModal(3).jsx` | `src/features/feats/FeatModal.jsx` |
| `SpellCard.jsx` | `src/features/spells/SpellCard.jsx` |
| `SpellRow.jsx` | `src/features/spells/SpellRow.jsx` |
| `SpellsFilters.jsx` | `src/features/spells/SpellsFilters.jsx` |
| `SpellModal.jsx` | `src/features/spells/SpellModal.jsx` |
| `spells.css` | `src/features/spells/spells.css` |
| `utils.js` | `src/features/spells/utils.js` |
| `useMediaQuery(1).js` | `src/hooks/useMediaQuery.js` |
| `useTheme(1).js` | `src/hooks/useTheme.js` |
| `epicBoons(1).js` | `src/data/feats/epicBoons.js` |
| `generalFeats(1).js` | `src/data/feats/generalFeats.js` |
| `masteryFeats(1).js` | `src/data/feats/masteryFeats.js` |
| `mavenArms(1).js` | `src/data/feats/mavenArms.js` |
| `originFeats(1).js` | `src/data/feats/originFeats.js` |
| `racialFeats(1).js` | `src/data/feats/racialFeats.js` |
| `index(1).js` | `src/data/spells/index.js` |
| `metadata(1).js` | `src/data/spells/metadata.js` |
| `cantrips(1).js` | `src/data/spells/cantrips.js` |
| `level1(1).js` | `src/data/spells/level1.js` |
| `level2(1).js` | `src/data/spells/level2.js` |
| `level3(1).js` | `src/data/spells/level3.js` |
| `level4(1).js` | `src/data/spells/level4.js` |
| `level5(1).js` | `src/data/spells/level5.js` |
| `level6(1).js` | `src/data/spells/level6.js` |
| `level7(1).js` | `src/data/spells/level7.js` |
| `level8(1).js` | `src/data/spells/level8.js` |
| `level9(1).js` | `src/data/spells/level9.js` |
| `MagicBingo(2).jsx` / `MagicBingo.module(2).css` | `src/features/bingo/` |
| `RandomWheel(3).jsx` / `RandomWheel(3).css` | `src/features/rewards/RandomWheel.*` |
