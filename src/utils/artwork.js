import { publicArtwork } from './publicArtwork.js';
const sources = import.meta.glob('../assets/*.{png,jpg,jpeg,gif,svg,webp}', { eager: true, query: '?url', import: 'default' });
export const artwork = (name) => sources[`../assets/${name}`] ?? (publicArtwork(`assets/${name}`) || publicArtwork(name));

const LEGACY_CATEGORY_ART = {
  LightArmor:'light-armor.png', MediumArmor:'medium-armor.png', HeavyArmor:'armor-symbol.png',
  Ring:'ring-symbol.png', WondrousItem:'wondrous.png', Helmet:'helmet-symbol.png',
  WeaponArt:'swordart.png', Boots:'boots-symbol.png', Bow:'bow-symbol.png', Keys:'key-symbol.png',
  Dagger:'dagger-symbol.png', Gauntlet:'gauntlets-symbol.png', Cloak:'cloak-symbol.png',
  Scrolls:'scroll-symbol.png', Grimoire:'grimoire-symbol.png', Rod:'rod-symbol.png', Wand:'wand-symbol.png',
  Hammer:'hammer-symbol.png', BoostArt:'fantasy-skill.png', PassiveArt:'skill-symbol.png',
  Glaive:'halberd-symbol.png', Halberd:'halberd-symbol.png', Gems:'gem.png', TreasureMap:'map-symbol.png',
  Mana:'mana-symbol.png', Stamina:'stamina-symbol.png', Scythe:'scythe-symbol.png',
};
export function categoryArtwork(category) {
  return artwork(`${category.toLowerCase()}.png`) || (LEGACY_CATEGORY_ART[category] ? artwork(LEGACY_CATEGORY_ART[category]) : '');
}
