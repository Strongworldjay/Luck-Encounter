# Verification

Validated September 30, 2026.

- Production build: Vite + React, successful.
- Seven original automated behavioral tests: rarity boundaries including extreme luck; identity deduplication across variants; nearest-rarity fallback; strict category/type/theme filtering; same-variant category/rarity matching; malformed stored tag overrides; strongworldjay source handling.
- Full item audit: 5,295 records, 5,377 distinct variants, 116 themes, 15 types. No empty names, duplicate normalized names/IDs/variants, unknown tags, or invalid weights.
- Source conservation: all 5,377 distinct original name/category/rarity combinations preserved; no unexpected combinations. Source fingerprint and deduplication details are in `catalog-migration.json`.
- Reference audit: all 986 spells and 158 feats have names and unique keys in their respective catalogs.
- Browser checks: **108 section/theme/viewport combinations** — all 18 sections, both themes, at widths 320, 390, and 1366. No horizontal overflow and no global theme leakage.
- Browser workflows: reward draw/reveal, shared dungeon luck, repeated wheel spins, unique shop inventory, restrictive theme filters, chest generation, tag editing and reload, spell/feat dialogs and expandable lists, Bingo persistence, character stories, mobile navigation.
- No browser JavaScript errors in the completed suite. Structured result: `browser-check.json`.

The browser suite runs against the local Vite app using Chromium headless with mobile viewport emulation and reduced motion. It does not certify every item tag, every randomized outcome, every spell rule, every browser, or physical iOS Safari behavior. The production source was built separately. Inferred tags remain editable suggestions.

Run `npm run check` to repeat the build/data/unit gates. For browser checks, install the bundled Playwright browser as shown in README, then run `npm run test:ui`.

## Reward card update

The revised reveal component passed six animated selections (left, center, right at mobile and desktop sizes), deferred result rendering, no theme/type badges, correct axe artwork, preserved empty card slots, no control overlap, cancellation during a reveal, and reduced-motion behavior. All four wallpaper source names were tested with HTTP fixtures because the actual wallpaper files were not supplied. No JavaScript errors were observed. Run `npm run test:cards` to repeat these checks.

## Monster Crystals update

Fourteen total automated behavioral tests pass. Seven new tests cover exact destruction thresholds for all six tiers, all 84 type/tier combinations against the real catalog, excluded categories and invalid pools, type-versus-Neutral selection, theme matching, tier ceilings, and rarity redistribution. The production build and complete data audit also pass.

The focused Chromium suite passes 12 layout checks (320/390/1366 pixels, both themes, odds table open/closed), Player Tools navigation, mixed quantities, individual destroyed/reward results, type and Neutral selections, saved results after reload/navigation, no reopening, clearing resolved entries, removing pending entries, and optional theme matching. No browser JavaScript errors. Screenshots were visually inspected at mobile and desktop sizes. Run `npm run test:crystals`; structured results are in `monster-crystals-check.json`.

The existing full browser suite now includes Monster Crystals and passes all 108 section/theme/viewport combinations plus its prior workflows. Build output retains the existing nonfatal warning about the shared item-catalog chunk size.
