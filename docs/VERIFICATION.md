# Verification

Validated September 30, 2026.

- Production build: Vite + React, successful.
- Seven automated behavioral tests: rarity boundaries including extreme luck; identity deduplication across variants; nearest-rarity fallback; strict category/type/theme filtering; same-variant category/rarity matching; malformed stored tag overrides; strongworldjay source handling.
- Full item audit: 5,295 records, 5,377 distinct variants, 116 themes, 15 types. No empty names, duplicate normalized names/IDs/variants, unknown tags, or invalid weights.
- Source conservation: all 5,377 distinct original name/category/rarity combinations preserved; no unexpected combinations. Source fingerprint and deduplication details are in `catalog-migration.json`.
- Reference audit: all 986 spells and 158 feats have names and unique keys in their respective catalogs.
- Browser checks: **102 section/theme/viewport combinations** — all 17 sections, both themes, at widths 320, 390, and 1366. No horizontal overflow and no global theme leakage.
- Browser workflows: reward draw/reveal, shared dungeon luck, repeated wheel spins, unique shop inventory, restrictive theme filters, chest generation, tag editing and reload, spell/feat dialogs and expandable lists, Bingo persistence, character stories, mobile navigation.
- No browser JavaScript errors in the completed suite. Structured result: `browser-check.json`.

The browser suite runs against the local Vite app using Chromium headless with mobile viewport emulation and reduced motion. It does not certify every item tag, every randomized outcome, every spell rule, every browser, or physical iOS Safari behavior. The production source was built separately. Inferred tags remain editable suggestions.

Run `npm run check` to repeat the build/data/unit gates. For browser checks, install the bundled Playwright browser as shown in README, then run `npm run test:ui`.
