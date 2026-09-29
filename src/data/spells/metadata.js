const SOURCE_ALIASES = new Map([
  ["Player's Handbook", "Player's Handbook"],
  ["Homebrew", "Homebrew"],
  ["Grim Hollow", "Grim Hollow"],
  ["Crooked Moon", "Crooked Moon"],
  ["Xanathar's Guide to Everything", "Xanathar's Guide to Everything"],
  ["Heliana's Guide to Monster Hunting", "Heliana's Guide to Monster Hunting"],
  ["Elemental Evil Player's Companion", "Elemental Evil Player's Companion"],
  ["Obojima", "Obojima"],
  ["Forgotten Realms", "Forgotten Realms"],
  ["Valda's Spire of Secrets", "Valda's Spire of Secrets"],
  ["Tasha's Cauldron of Everything", "Tasha's Cauldron of Everything"],
  ["Strixhaven", "Strixhaven"],
  ["Fizban's Treasury of Dragons", "Fizban's Treasury of Dragons"],
  ["Illrigger Revised", "Illrigger Revised"],
  ["The Illrigger Revised", "Illrigger Revised"],
  ["The Book of Many Things", "The Book of Many Things"],
  ["Sword Coast Adventurer's Guide", "Sword Coast Adventurer's Guide"],
  ["Icewind Dale", "Icewind Dale"],
  ["Explorer's Guide to Wildemount", "Explorer's Guide to Wildemount"],
  ["Guide to Wildemount", "Explorer's Guide to Wildemount"],
  ["Acquisitions Incorporated", "Acquisitions Incorporated"],
  ["Spelljammer", "Spelljammer"],
  ["Lost Laboratory of Kwalish", "Lost Laboratory of Kwalish"],
  ["Dungeons of Drakkenheim", "Dungeons of Drakkenheim"],
]);

const SOURCE_KEYS = new Set(SOURCE_ALIASES.keys());
const uniq = (values) => [...new Set(values.filter(Boolean))];
const includesAny = (text, patterns) => patterns.some((pattern) => text.includes(pattern));

function inferFunctionalTags(spell) {
  const text = [
    spell.name,
    spell.descriptionMd,
    spell.scalingMd,
    spell.higherLevelsMd,
    ...(spell.conditions || []),
  ].join(' ').toLowerCase();
  const tags = new Set();
  const add = (...values) => values.forEach((value) => tags.add(value));

  if (spell.damageTypes?.length) add('Damage');
  if (spell.conditions?.length) add('Control');
  if (spell.concentration) add('Concentration');
  if (spell.ritual) add('Ritual');
  if (spell.attackType && spell.attackType !== 'None') add('Attack Roll');
  if (spell.saveRequired && spell.saveRequired !== 'None') add('Saving Throw');

  const area = String(spell.area || '').toLowerCase();
  if (area && !['self', 'single target', 'one creature', '—'].includes(area)) add('Area of Effect');

  if (includesAny(text, ['regain hit points', 'restore hit points', 'healing', 'heal ', 'stabilize'])) add('Healing');
  if (includesAny(text, ['temporary hit points', 'advantage on', 'bonus to', 'increase your', 'resistance to'])) add('Buff');
  if (includesAny(text, ['disadvantage on', 'subtract', 'penalty', 'can’t regain', "can't regain", 'reduces its', 'reduce the target'])) add('Debuff');
  if (includesAny(text, ['teleport', 'misty step', 'dimension door'])) add('Movement', 'Teleportation');
  if (includesAny(text, ['speed increases', 'walking speed', 'flying speed', 'swimming speed', 'climbing speed', 'jump distance', 'move up to'])) add('Movement');
  if (includesAny(text, ['summon ', 'conjure a creature', 'conjure one', 'create a creature', 'spirit appears', 'spectral creature'])) add('Summoning');
  if (includesAny(text, ['detect ', 'sense ', 'locate ', 'learn the location', 'you know the location', 'reveal the presence'])) add('Detection');
  if (includesAny(text, ['shield', 'barrier', 'ward', 'armor class', 'protective field'])) add('Defense');
  if (includesAny(text, ['invisible', 'invisibility', 'illusory', 'illusion', 'disguise'])) add('Deception');
  if (includesAny(text, ['create ', 'conjure ', 'fabricate', 'wall of '])) add('Creation');
  if (includesAny(text, ['charmed', 'frightened', 'restrained', 'paralyzed', 'stunned', 'prone', 'poisoned', 'blinded', 'deafened'])) add('Control');
  if (includesAny(text, ['banish', 'another plane', 'extradimensional space'])) add('Banishment');
  if (includesAny(text, ['transform', 'shapechange', 'polymorph', 'assume the form'])) add('Shapechanging');
  if (includesAny(text, ['communicate', 'message', 'telepathy', 'speak with'])) add('Communication');
  if (includesAny(text, ['reaction', 'when you are hit', 'when a creature'])) add('Reaction');
  if (includesAny(text, ['light', 'bright light', 'dim light', 'illuminate'])) add('Illumination');
  if (includesAny(text, ['restore a spell slot', 'end one condition', 'remove a condition', 'remove curse'])) add('Restoration');
  if (includesAny(text, ['counterspell', 'dispel magic', 'antimagic', 'negate the spell'])) add('Anti-Magic');
  if (includesAny(text, ['social interaction', 'charisma check', 'persuasion', 'deception check'])) add('Social');

  return [...tags];
}

export function normalizeSpellMetadata(spell) {
  const sourceTags = (spell.tags || []).filter((tag) => SOURCE_KEYS.has(tag));
  const retainedTags = (spell.tags || []).filter((tag) => !SOURCE_KEYS.has(tag));
  const sources = uniq([...(spell.sources || []), ...sourceTags.map((tag) => SOURCE_ALIASES.get(tag))]);
  const tags = uniq([...retainedTags, ...inferFunctionalTags(spell)]).sort();

  return {
    ...spell,
    sources: sources.length ? sources.sort() : ['Unspecified Source'],
    tags: tags.length ? tags : ['Utility'],
  };
}

export const KNOWN_SPELL_SOURCES = [...new Set(SOURCE_ALIASES.values())].sort();
