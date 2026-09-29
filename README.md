# Luck Encounter — Refined Project

A cleaned, structured, production-buildable version of the Luck Encounter React application.

## Run locally

```bash
npm install
npm run check
npm run dev
```

`npm run check` runs linting and a production build. `npm run audit:data` reviews the item catalog for repeated weighted entries and malformed pools.

## Artwork

The uploaded source did not include the original artwork folders. Tiny placeholders are included so the project builds immediately. Replace them with the original artwork while preserving filenames. See [`docs/ASSETS_REQUIRED.md`](docs/ASSETS_REQUIRED.md).

## Project layout

```text
src/
  components/       Shared interface pieces
  config/           Navigation and reward configuration
  data/             Large item, feat, and spell catalogs
  features/         Self-contained application tools
  hooks/            Shared browser behavior
  legacy/           Archived code not mounted by the live app
  styles/           Global tokens and root layout only
  utils/            Shared item helpers
```

## Important design choices

- Feature tools are lazy-loaded so the homepage is not forced to download every spell, feat, and item catalog immediately.
- Spell catalogs are split into cacheable level chunks at build time.
- Feature CSS is scoped to prevent unrelated pages from restyling each other.
- Duplicate entries inside the item catalog are preserved because several appear to be intentional probability weighting. Run `npm run audit:data` before removing them.
- `src/legacy/BoostArts.jsx` is archived rather than mounted because it was not connected to the active application and depended on a missing stylesheet.

## Scripts

```bash
npm run dev          # Start Vite development server
npm run lint         # Run ESLint
npm run build        # Create production build
npm run check        # Lint, then build
npm run audit:data   # Review item pool duplicates and malformed entries
npm run preview      # Serve the production build locally
```
