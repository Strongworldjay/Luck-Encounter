# Dungeon Rewards Viewport Fit

The dungeon-reward screen now uses a compact desktop layout designed to keep the full workflow visible without vertical page scrolling.

## Changes

- Corrected `.app-shell` sizing with `box-sizing: border-box` so navbar padding no longer adds accidental page height.
- Converted `.rewards-page` into a two-row viewport layout: compact controls above and a flexible card stage below.
- Reduced unused padding and margins in the reward header, luck controls, and dungeon buttons.
- Positioned the filter action outside the main control flow on wide screens.
- Scaled reward cards responsively from both browser width and browser height.
- Reduced draw-deck and clear-deck footprint on desktop.
- Added a more compact rule set for browser heights below 700px.

Mobile behavior remains scroll-friendly so controls are not made too small for touch interaction.
