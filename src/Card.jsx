import React from 'react';
import './Card.css';

/* Light-mode back (shared) */
import cardBack from './assets/card-design.png';

/* Dark-mode back (use one or map by rarity if you like) */
import darkCardBack from './assets/darkmodecard1.png';

/* Rarity-based FRONT art */
import commonFront    from './assets/common.png';
import uncommonFront  from './assets/uncommon.png';
import rareFront      from './assets/rare.png';
import veryRareFront  from './assets/very-rare.png';
import legendaryFront from './assets/legendary.png';
import uniqueFront    from './assets/unique.png';

/* Overlay icons */
import lightArmorSymbol from './assets/light-armor.png';
import mediumArmorSymbol from './assets/medium-armor.png';
import robeSymbol from './assets/robe.png';
import ringSymbol from './assets/ring-symbol.png';
import magicSymbol from './assets/wondrous.png';
import magicSkillSymbol from './assets/magicskill.png';
import helmetSymbol from './assets/helmet-symbol.png';
import armorSymbol from './assets/armor-symbol.png';
import attackSkillSymbol from './assets/swordart.png';
import bootsSymbol from './assets/boots-symbol.png';
import bowSymbol from './assets/bow-symbol.png';
import keySymbol from './assets/key-symbol.png';
import axeSymbol from './assets/axe.png';
import daggerSymbol from './assets/dagger-symbol.png';
import gauntletSymbol from './assets/gauntlets-symbol.png';
import swordSymbol from './assets/sword.png';
import necklaceSymbol from './assets/necklace.png';
import cloakSymbol from './assets/cloak-symbol.png';
import potionSymbol from './assets/potion.png';
import scrollSymbol from './assets/scroll-symbol.png';
import grimoireSymbol from './assets/grimoire-symbol.png';
import rodSymbol from './assets/rod-symbol.png';
import staffSymbol from './assets/staff.png';
import wandSymbol from './assets/wand-symbol.png';
import hammerSymbol from './assets/hammer-symbol.png';
import expSymbol from './assets/exp.png';
import skillPointsSymbol from './assets/skillpoints.png';
import fantasySkillSymbol from './assets/fantasy-skill.png';
import glaiveSymbol from './assets/halberd-symbol.png';
import skillSymbol from './assets/skill-symbol.png';
import shieldSymbol from './assets/shield.png';
import gemSymbol from './assets/gem.png';
import crossbowSymbol from './assets/crossbow.png';
import halberdSymbol from './assets/halberd-symbol.png';
import spearSymbol from './assets/spear.png';
import whipSymbol from './assets/whip.png';
import maceSymbol from './assets/mace.png';
import clubSymbol from './assets/club.png';
import pikeSymbol from './assets/pike.png';
import warpickSymbol from './assets/warpick.png';
import lanceSymbol from './assets/lance.png';
import mapSymbol from './assets/map-symbol.png';
import manaSymbol from './assets/mana-symbol.png';
import staminaSymbol from './assets/stamina-symbol.png';
import scythesymbol from './assets/scythe-symbol.png';

const rarityFrontMap = {
  Common:     commonFront,
  Uncommon:   uncommonFront,
  Rare:       rareFront,
  'Very Rare': veryRareFront,
  Legendary:  legendaryFront,
  Unique:     uniqueFront,
};

const Card = ({ card, onClick, isDark = false }) => {
  // BACK: light uses shared back; dark uses dark-mode back
  const backImg = isDark ? darkCardBack : cardBack;

  // FRONT: rarity image + solid color behind it (white light / black dark)
  const frontImg = rarityFrontMap[card.rarity.name] || commonFront;
  const frontBackground = isDark ? '#000' : '#f8f3e9';

  const getOverlayImage = (itemType) => {
    const [mainType, subtype] = itemType.split(' ');
    switch (subtype || mainType) {
      case 'Mana': return manaSymbol;
      case 'Stamina': return staminaSymbol;
      case 'Scythe': return scythesymbol;
      case 'Sword': return swordSymbol;
      case 'TreasureMap': return mapSymbol;
      case 'Pike': return pikeSymbol;
      case 'Warpick': return warpickSymbol;
      case 'Lance': return lanceSymbol;
      case 'Bow': return bowSymbol;
      case 'Axe': return axeSymbol;
      case 'Dagger': return daggerSymbol;
      case 'Gauntlet': return gauntletSymbol;
      case 'Helmet': return helmetSymbol;
      case 'HeavyArmor': return armorSymbol;
      case 'LightArmor': return lightArmorSymbol;
      case 'MediumArmor': return mediumArmorSymbol;
      case 'Boots': return bootsSymbol;
      case 'Ring': return ringSymbol;
      case 'Robe': return robeSymbol;
      case 'Necklace': return necklaceSymbol;
      case 'Cloak': return cloakSymbol;
      case 'Potion': return potionSymbol;
      case 'Grimoire': return grimoireSymbol;
      case 'Rod': return rodSymbol;
      case 'Staff': return staffSymbol;
      case 'Wand': return wandSymbol;
      case 'Hammer': return hammerSymbol;
      case 'Glaive': return glaiveSymbol;
      case 'SpellScroll': return scrollSymbol;
      case 'Gems': return gemSymbol;
      case 'WondrousItem': return magicSymbol;
      case 'Crossbow': return crossbowSymbol;
      case 'WeaponArt': return attackSkillSymbol;
      case 'SkillPoints': return skillPointsSymbol;
      case 'ExperiencePoints': return expSymbol;
      case 'Shield': return shieldSymbol;
      case 'PassiveArt': return fantasySkillSymbol;
      case 'Spear': return spearSymbol;
      case 'Halberd': return halberdSymbol;
      case 'Club': return clubSymbol;
      case 'Mace': return maceSymbol;
      case 'Keys': return keySymbol;
      case 'Whip': return whipSymbol;
      case 'BoostArt': return skillSymbol;
      default: return null;
    }
  };

  const getRarityClass = (rarity) =>
    rarity.name.toLowerCase().replace(/\s+/g, '-');

  const overlayImage = getOverlayImage(card.itemType);

  return (
    <div
      className={`card ${card.revealed ? 'revealed' : ''} ${card.fadeAway ? 'fade-away' : ''} ${getRarityClass(card.rarity)}`}
      onClick={!card.fadeAway && !card.revealed ? onClick : undefined}
    >
      <div className="card-inner">
        {/* BACK shows first */}
        <div
          className="card-face card-back"
          style={{
            backgroundImage: `url(${backImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '20px',
          }}
        />

        {/* FRONT shows after flip — rarity PNG + solid background color */}
        <div
          className="card-face card-front"
          style={{
            /* solid color behind the PNG */
            backgroundColor: frontBackground,
            /* PNG on top */
            backgroundImage: `url(${frontImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            borderRadius: '20px',
          }}
        >
          {overlayImage && (
            <img src={overlayImage} alt={`${card.itemType} symbol`} className="item-overlay" />
          )}
          <div className="item-text" style={{ color: card.rarity.color }}>
            <div className="item-category">{card.itemType}</div>
            <div className="item-name">{card.item}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
