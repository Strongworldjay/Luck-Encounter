import React from 'react';
import './Card.css';
import whiteCard from './assets/white-card.jpg';
import greenCard from './assets/green-card.jpg';
import blueCard from './assets/blue-card.webp';
import purpleBlackCard from './assets/purple-card.jpg';
import orangeCard from './assets/orange-card.avif';
import redCard from './assets/red-card.avif';
import cardBack from './assets/card-design.jpg';

// Import overlay images
import lightArmorSymbol from './assets/light-armor.webp'
import mediumArmorSymbol from './assets/medium-armor.png'
import robeSymbol from './assets/robe.webp'
import ringSymbol from './assets/ring.webp'
import magicSymbol from './assets/magic-symbol.png';
import magicSkillSymbol from './assets/magic-skill.png';
import helmetSymbol from './assets/helmet-symbol.png';
import armorSymbol from './assets/armor-symbol.png';
import attackSkillSymbol from './assets/attack-skill.png';
import bootsSymbol from './assets/boots-symbol.png';
import bowSymbol from './assets/bow-symbol.webp';
import axeSymbol from './assets/axe-symbol.webp';
import daggerSymbol from './assets/dagger-symbol.png';
import gauntletSymbol from './assets/gauntlet-symbol.png';
import swordSymbol from './assets/sword-symbol.png';
import necklaceSymbol from './assets/necklace-symbol.png';
import cloakSymbol from './assets/cloak-symbol.png';
import potionSymbol from './assets/potion-symbol.png';
import scrollSymbol from './assets/scroll-symbol.png';
import grimoireSymbol from './assets/grimoire-symbol.png';
import rodSymbol from './assets/rod-symbol.png';
import staffSymbol from './assets/staff-symbol.webp';
import wandSymbol from './assets/wand-symbol.png';
import hammerSymbol from './assets/hammer-symbol.png';
import expSymbol from './assets/exp.png';
import skillPointsSymbol from './assets/arrow.png';
import fantasySkillSymbol from './assets/fantasy-skill.png';
import glaiveSymbol from './assets/glaive-symbol.webp';
import skillSymbol from './assets/skill-symbol.png'; // Skill symbol for StatusSkill

const Card = ({ card, onClick }) => {
  const getFrontImage = (rarity) => {
    switch (rarity.name) {
      case 'Common':
        return whiteCard;
      case 'Uncommon':
        return greenCard;
      case 'Rare':
        return blueCard;
      case 'Very Rare':
        return purpleBlackCard;
      case 'Legendary':
        return orangeCard;
      case 'Unique':
        return redCard;
      default:
        return whiteCard;
    }
  };

  const getOverlayImage = (itemType) => {
    const [mainType, subtype] = itemType.split(" ");
    
    switch (subtype || mainType) {
      case 'Sword':
        return swordSymbol;
      case 'Bow':
        return bowSymbol;
      case 'Axe':
        return axeSymbol;
      case 'Dagger':
        return daggerSymbol;
      case 'Gauntlet':
        return gauntletSymbol;
      case 'Helmet':
        return helmetSymbol;
      case 'HeavyArmor':
        return armorSymbol;
      case 'LightArmor':
        return lightArmorSymbol;
      case 'MediumArmor':
        return mediumArmorSymbol;
      case 'Boots':
        return bootsSymbol;
      case 'Ring':
        return ringSymbol;
      case 'Robe':
        return robeSymbol;
      case 'Necklace':
        return necklaceSymbol;
      case 'Cloak':
        return cloakSymbol;
      case 'Potion':
        return potionSymbol;
      case 'Grimoire':
        return grimoireSymbol;
      case 'Rod':
        return rodSymbol;
      case 'Staff':
        return staffSymbol;
      case 'Wand':
        return wandSymbol;
      case 'Hammer':
        return hammerSymbol;
      case 'Glaive':
        return glaiveSymbol;
      case 'SpellScroll':
      case 'PermanentSpell':
        return scrollSymbol;
      case 'WondrousItem':
        return magicSymbol;
      case 'MagicArt':
        return magicSkillSymbol;
      case 'WeaponArt':
        return attackSkillSymbol;
      case 'SkillPoints':
        return skillPointsSymbol;
      case 'ExperiencePoints':
        return expSymbol;
      case 'PassiveArt':
        return fantasySkillSymbol;
      case 'BoostArt':
        return skillSymbol; // Overlay for StatusSkill
      default:
        console.warn(`No overlay image found for itemType: ${itemType}`);
        return null;
    }
  };

  const getRarityClass = (rarity) => {
    return rarity.name.toLowerCase().replace(' ', '-'); // Converts 'Very Rare' to 'very-rare'
  };

  const overlayImage = getOverlayImage(card.itemType);

  return (
    <div
      className={`card ${card.revealed ? 'revealed' : ''} ${getRarityClass(card.rarity)}`}
      onClick={onClick}
    >
      <div
        className="card-face card-front"
        style={{
          backgroundColor: 'black',
          backgroundImage: `url(${getFrontImage(card.rarity)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
      
      <div
        className="card-face card-back"
        style={{
          backgroundColor: 'black',
          backgroundImage: `url(${cardBack})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '20px',
        }}
      />
    </div>
  );
};

export default Card;
