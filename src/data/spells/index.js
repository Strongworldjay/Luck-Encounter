import { CANTRIPS } from './cantrips.js';
import { LEVEL1 } from './level1.js';
import { LEVEL2 } from './level2.js';
import { LEVEL3 } from './level3.js';
import { LEVEL4 } from './level4.js';
import { LEVEL5 } from './level5.js';
import { LEVEL6 } from './level6.js';
import { LEVEL7 } from './level7.js';
import { LEVEL8 } from './level8.js';
import { LEVEL9 } from './level9.js';
import { normalizeSpellMetadata } from './metadata.js';

const RAW_SPELLS_BY_LEVEL = {
  0: CANTRIPS,
  1: LEVEL1,
  2: LEVEL2,
  3: LEVEL3,
  4: LEVEL4,
  5: LEVEL5,
  6: LEVEL6,
  7: LEVEL7,
  8: LEVEL8,
  9: LEVEL9,
};

export const SPELLS_BY_LEVEL = Object.fromEntries(
  Object.entries(RAW_SPELLS_BY_LEVEL).map(([level, spells]) => [
    level,
    spells.map(normalizeSpellMetadata),
  ])
);

export const ALL_SPELLS = Object.values(SPELLS_BY_LEVEL).flat();
