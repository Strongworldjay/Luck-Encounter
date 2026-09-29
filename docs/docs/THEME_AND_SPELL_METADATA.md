# Coastal Theme and Spell Metadata Update

## Theme behavior

The navbar now exposes three explicit theme preferences:

- **Auto** follows `prefers-color-scheme` and updates when the device setting changes.
- **Day** overrides the device setting with the Coastal Retreat daytime palette.
- **Night** overrides the device setting with the darker ocean-at-night companion palette.

The preference is stored under `luck-encounter-theme-preference`. Existing installations using the earlier binary `luck-encounter-theme` key are migrated automatically.

## Day palette

- Deep coastal blue: `#335765`
- Sea glass: `#74A8A4`
- Pale mist: `#B6D9E0`
- Soft foam: `#DBE2DC`
- Driftwood brown: `#7F543D`

## Spell sources

Spell publication labels are normalized into a dedicated `sources` field at runtime. They no longer appear as functional tags. The spells page includes a new Source filter, and spell detail modals display Sources separately from Tags.

Aliases are normalized where needed, including:

- `The Illrigger Revised` → `Illrigger Revised`
- `Guide to Wildemount` → `Explorer's Guide to Wildemount`

## Functional spell tags

Existing curated functional tags are preserved. Additional useful tags are inferred consistently from structured spell data and description text, including Damage, Healing, Control, Concentration, Ritual, Attack Roll, Saving Throw, Area of Effect, Buff, Debuff, Defense, Movement, Teleportation, Summoning, Detection, Creation, Shapechanging, Communication, Reaction, Illumination, Restoration, Anti-Magic, Social, and Banishment.

## Verification

The catalog audit confirms:

- 987 spells processed
- 23 normalized sources
- 49 functional tag values
- 0 spells without a source
- 0 spells without functional tags
- 0 publication-source labels leaking into functional tags
