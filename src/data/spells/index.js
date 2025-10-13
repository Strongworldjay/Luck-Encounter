import { CANTRIPS } from "./cantrips";
import { LEVEL1 } from "./level1";
// import { LEVEL2 } from "./level2"; // add as created

export const SPELLS_BY_LEVEL = {
  0: CANTRIPS,
  1: LEVEL1,
  // 2: LEVEL2,
  // 3: LEVEL3,
};

export const ALL_SPELLS = Object.values(SPELLS_BY_LEVEL).flat();
