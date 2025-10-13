// src/features/spells/utils.js

export const slugify = (s) =>
  String(s).toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 64);

// Vite base (safe in browser)
const BASE =
  (typeof import.meta !== "undefined" &&
    import.meta.env &&
    import.meta.env.BASE_URL) || "/";

const SCHOOL_ALIASES = {
  abjuration:"abjuration", conjuration:"conjuration", divination:"divination",
  enchantment:"enchantment", evocation:"evocation", illusion:"illusion",
  necromancy:"necromancy", transmutation:"transmutation",
  enchanemtnt:"enchantment", enchanment:"enchantment",
  abj:"abjuration", conj:"conjuration", div:"divination",
  evo:"evocation", illu:"illusion", necro:"necromancy", transmute:"transmutation"
};
export const normalizeSchool = (s="") =>
  SCHOOL_ALIASES[s.toLowerCase().replace(/[^a-z]/g,"")] || "spell";

export const spellImgUrl = (slugOrName) =>
  `${BASE}assets/spells/${slugify(slugOrName)}.png`;

export const schoolImgUrl = (school) =>
  `${BASE}assets/spells/schools/${normalizeSchool(school)}.png`;

export const genericSpellImgUrl = () =>
  `${BASE}assets/spells/schools/spell.png`;

// Optional legacy alias if your data files still import { img }
export const img = (x) => spellImgUrl(x);

// Dev validator without touching process.*
export const devValidate = (spells=[]) => {
  if (import.meta?.env?.PROD) return; // skip in prod
  const ABILS = new Set(["None","STR","DEX","CON","INT","WIS","CHA"]);
  const ATKS  = new Set(["None","Melee","Ranged","Spell"]);
  const errs = [];
  for (const s of spells) {
    if (typeof s.spellLevel !== "number" || s.spellLevel < 0 || s.spellLevel > 9)
      errs.push(`${s.name}: spellLevel must be 0..9`);
    if (!ABILS.has(s.saveRequired))
      errs.push(`${s.name}: bad saveRequired (${s.saveRequired})`);
    if (!ATKS.has(s.attackType))
      errs.push(`${s.name}: bad attackType (${s.attackType})`);
    const url = s.imagePath || spellImgUrl(s.slug || s.name || "");
    const test = new Image();
    test.onerror = () => console.warn("Missing spell art →", s.name, url);
    test.src = url;
  }
  if (errs.length) console.warn("[devValidate] issues:", errs);
  else console.log(`[devValidate] ${spells.length} spell(s) look good.`);
};
