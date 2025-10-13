import React, { useMemo, useState, useRef } from "react";
import { slugify, spellImgUrl, schoolImgUrl, genericSpellImgUrl } from "./utils";

const levelLabel = (lvl) => {
  if (lvl === 0) return "Cantrip";
  const sfx = (n) => (n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th");
  return `${lvl}${sfx(lvl)}-level`;
};

export default function SpellCard({ spell, onOpen }) {
  // Initial image (per spell) → fallback to school → generic
  const initial = useMemo(() => {
    const slug = spell.slug || slugify(spell.name || "");
    return spell.imagePath || spellImgUrl(slug);
  }, [spell.slug, spell.name, spell.imagePath]);

  const [src, setSrc] = useState(initial);
  const triedSchool = useRef(false);
  const triedGeneric = useRef(false);

  const onImgError = (e) => {
    if (!triedSchool.current) {
      triedSchool.current = true;
      setSrc(schoolImgUrl(spell.school));
      return;
    }
    if (!triedGeneric.current) {
      triedGeneric.current = true;
      setSrc(genericSpellImgUrl());
      return;
    }
    e.currentTarget.onerror = null;
  };

  const handleOpen = (e) => {
    if (!onOpen) return;
    e.preventDefault();
    e.stopPropagation();
    onOpen();
  };

  return (
    <div
      className="spell-card spell-card--poster"
      role="button"
      tabIndex={0}
      onClick={handleOpen}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleOpen(e)}
      aria-label={`Open ${spell.name}`}
    >
      <div className="spell-poster">
        <h3 className="spell-poster__title">{spell.name}</h3>
        <img
          className="spell-poster__img"
          src={src}
          alt={`${spell.name} icon`}
          loading="lazy"
          decoding="async"
          onError={onImgError}
        />
        <div className="spell-poster__level">{levelLabel(spell.spellLevel)}</div>
      </div>
    </div>
  );
}
