// New Art families are declared once here. Rank entries and their single Skill Book
// are derived from the same family instead of maintaining parallel loot lists.
const RANKS = ['F', 'D', 'C', 'B', 'A', 'S'];
const RARITY_BY_RANK = {
  F: 'Common', D: 'Uncommon', C: 'Rare',
  B: 'VeryRare', A: 'Legendary', S: 'Unique',
};

const magic = [
  ['Blood Manipulation: Shield', ['Blood', 'Flesh']],
  ['Blood Manipulation: Tendrils', ['Blood', 'Organic']],
  ['Blood Manipulation: Bound Wounds', ['Blood', 'Flesh']],
  ['Hellfire Winds', ['Infernal', 'Wind']],
  ['Hellfire Spire', ['Infernal', 'Lava']],
  ['Misty Day', ['Mist', 'Fog']],
  ['Shattering', ['Stone', 'Chaos']],
];
const weapon = [
  ['Pebble Shot', ['Stone', 'Earth']],
  ['Boundless massacre', ['Blood', 'Chaos']],
  ['Lethal Punisher', ['Blood', 'Shadow']],
  ['Gale Slash', ['Wind', 'Sky']],
  ['Rock Smasher', ['Stone', 'Earth']],
  ['Collision Counter', ['Gravity', 'Metal']],
  ['Apocalypse', ['Chaos', 'Ash']],
  ['Catastrophe', ['Chaos', 'Storm']],
  ['Armageddom', ['Infernal', 'Chaos']],
];
const boosts = [
  ['Infighting', ['Organic', 'Primal']],
  ['Inverse Gravity: Self', ['Gravity', 'Arcane']],
  ['Climax Booster', ['Chaos', 'Organic']],
  ['Substitution Log', ['Wood', 'Illusion']],
];
const beasts = [
  ['Wolf', ['Forest', 'Primal']],
  ['Tiger', ['Jungle', 'Primal']],
  ['Boar', ['Forest', 'Primal']],
  ['Bear', ['Mountain', 'Primal']],
  ['Eagle', ['Sky', 'Wind']],
  ['Crocodile', ['Swamp', 'Water']],
  ['Gorilla', ['Jungle', 'Primal']],
  ['Panther', ['Jungle', 'Shadow']],
  ['Rhinoceros', ['Earth', 'Primal']],
];
const ancients = [
  ['Tyrant King', ['Ancient', 'Primal']],
  ['Sky Terror', ['Ancient', 'Sky']],
  ['Saberfang', ['Ancient', 'Bone']],
  ['Thunderhorn', ['Ancient', 'Lightning']],
  ['Stoneback', ['Ancient', 'Stone']],
  ['Deepjaw', ['Ancient', 'Ocean']],
  ['Mammoth Lord', ['Ancient', 'Glacier']],
];
const draconic = [
  ['Red Dragon', ['Lava', 'Volcanic']],
  ['Blue Dragon', ['Lightning', 'Storm']],
  ['Black Dragon', ['Acidic', 'Swamp']],
  ['White Dragon', ['Ice', 'Snow']],
  ['Green Dragon', ['Poisonous', 'Forest']],
  ['Gold Dragon', ['Gold', 'Radiant']],
  ['Silver Dragon', ['Silver', 'Ice']],
  ['Bronze Dragon', ['Metal', 'Storm']],
  ['Storm Drake', ['Storm', 'Sky']],
  ['Wyvern', ['Poisonous', 'Wind']],
  ['Sea Drake', ['Ocean', 'Water']],
  ['Magma Drake', ['Magma', 'Volcanic']],
];
const mythical = [
  ['Phoenix', ['Lava', 'Radiant'], 'Elemental'],
  ['Unicorn', ['Forest', 'Radiant'], 'Celestial'],
  ['Griffin', ['Sky', 'Wind'], 'Monstrosity'],
  ['Chimera', ['Chaos', 'Organic'], 'Monstrosity'],
  ['Basilisk', ['Petrified', 'Stone'], 'Monstrosity'],
  ['Manticore', ['Desert', 'Primal'], 'Monstrosity'],
  ['Kirin', ['Lightning', 'Celestial'], 'Celestial'],
  ['Thunderbird', ['Lightning', 'Storm'], 'Elemental'],
  ['Cerberus', ['Infernal', 'Lava'], 'Fiend'],
];
const primordial = [
  ['World Serpent', ['Primal', 'Ocean'], 'Monstrosity'],
  ['Abyssal Leviathan', ['Chasm', 'Ocean'], 'Monstrosity'],
  ['First Dragon', ['Ancient', 'Primal'], 'Dragon'],
  ['World Turtle', ['Earth', 'Ocean'], 'Beast'],
  ['Celestial Behemoth', ['Celestial', 'Radiant'], 'Celestial'],
  ['Sun Eater', ['Void', 'Space'], 'Aberration'],
  ['Void Maw', ['Void', 'Darkness'], 'Aberration'],
];
const passives = [
  ['Moon Bounce', ['Gravity', 'Sky']],
  ['Hot Start', ['Lava', 'Steam']],
  ['Unbreakable', ['Stone', 'Metal']],
  ['Karmic Embrace', ['Order', 'Radiant']],
  ["Cat's Eye", ['Shadow', 'Light']],
];

const standard = (category, entries) => entries.map(([name, themes]) => ({ name, category, themes, types: ['Neutral'], firstRank: 'F' }));
const transformations = (kind, entries, firstRank, type) => entries.map(([creature, themes, creatureType]) => ({
  name: `${kind} Transformation: ${creature}`, category: 'BoostArt', themes,
  types: [creatureType ?? type], firstRank,
  ...(kind === 'Beast' ? {} : { bookRarity: RARITY_BY_RANK[firstRank] }),
}));

export const NEW_ART_FAMILIES = [
  ...standard('MagicArt', magic),
  ...standard('WeaponArt', weapon),
  ...standard('BoostArt', boosts),
  ...transformations('Beast', beasts, 'F', 'Beast'),
  ...transformations('Ancient', ancients, 'D', 'Beast'),
  ...transformations('Draconic', draconic, 'C', 'Dragon'),
  ...transformations('Mythical', mythical, 'B'),
  ...transformations('Primordial', primordial, 'A'),
  ...standard('PassiveArt', passives),
];

export const NEW_ART_ITEMS = NEW_ART_FAMILIES.flatMap(({ name, category, themes, types, firstRank, bookRarity }) =>
  RANKS.slice(RANKS.indexOf(firstRank)).map((rank) => ({
    id: `art:${category}:${name.toLowerCase()}:${rank}`,
    name: `${name} ${rank}`,
    variants: [{ category, rarity: RARITY_BY_RANK[rank] }],
    types, themes, tagBasis: 'name', ...(bookRarity ? { bookRarity } : {}),
  })));
