import React, { useMemo, useRef, useState } from "react";
import { slugify, spellImgUrl, schoolImgUrl, genericSpellImgUrl } from "./utils";

const levelLabel = (lvl) => (lvl === 0 ? "Cantrip" : `${lvl}${[,"st","nd","rd"][lvl]||"th"}-level`);

export default function SpellRow({ spell }) {
  const [open, setOpen] = useState(false);

  // image + fallbacks (small icon)
  const initial = useMemo(() => {
    const slug = spell.slug || slugify(spell.name || "");
    return spell.imagePath || spellImgUrl(slug);
  }, [spell.slug, spell.name, spell.imagePath]);

  const [src, setSrc] = useState(initial);
  const tried = useRef({ school: false, generic: false });
  const onImgError = (e) => {
    if (!tried.current.school) { tried.current.school = true; setSrc(schoolImgUrl(spell.school)); return; }
    if (!tried.current.generic) { tried.current.generic = true; setSrc(genericSpellImgUrl()); return; }
    e.currentTarget.onerror = null;
  };

  // Components helpers
  const compMap = { V: "verbal", S: "somatic", M: "material" };
  const componentsObj = spell.components || {};
  const compsAbbrev = ["V", "S", "M"]
    .filter((k) => componentsObj[compMap[k]])
    .join(", ");
  const compsFull = (() => {
    const s = ["V", "S", "M"].filter((k) => componentsObj[compMap[k]]).join("");
    return s + (componentsObj.material && componentsObj.materialText ? ` (${componentsObj.materialText})` : "") || "—";
  })();

  return (
    <details className="spell-row" open={open} onToggle={(e) => setOpen(e.currentTarget.open)}>
      <summary className="spell-row__summary">
        <div className="cell level">{levelLabel(spell.spellLevel)}</div>

        <div className="cell name">
          <img className="icon" src={src} onError={onImgError} alt="" width={26} height={26} />
          <div className="namewrap">
            <div className="title">{spell.name}</div>
            <div className="sub">{spell.school} • {compsAbbrev || "—"}</div>
          </div>
        </div>

        <div className="cell">{spell.castingTime || "—"}</div>
        <div className="cell">{spell.duration || "—"}</div>
        <div className="cell">
          {spell.range || "—"}{spell.area ? ` (${spell.area})` : ""}
        </div>
        <div className="cell">
          {spell.attackType || "—"}{spell.saveRequired ? ` • ${spell.saveRequired}` : ""}
        </div>
        <div className="cell">{(spell.damageTypes || []).join(", ") || "—"}</div>
        <div className="cell chevron">{open ? "–" : "+"}</div>
      </summary>

      <div className="spell-row__details">
        <div className="detailgrid">
          <div><span className="cap">Level</span><span>{levelLabel(spell.spellLevel)}</span></div>
          <div><span className="cap">Casting Time</span><span>{spell.castingTime || "—"}</span></div>
          <div><span className="cap">Range/Area</span><span>{spell.range || "—"}{spell.area ? ` (${spell.area})` : ""}</span></div>
          <div><span className="cap">Components</span><span>{compsFull}</span></div>
          <div><span className="cap">Duration</span><span>{spell.duration || "—"}</span></div>
          <div><span className="cap">School</span><span>{spell.school || "—"}</span></div>
          <div><span className="cap">Attack/Save</span><span>{spell.attackType || "—"}{spell.saveRequired ? ` / ${spell.saveRequired}` : ""}</span></div>
          <div><span className="cap">Damage/Effect</span><span>{(spell.damageTypes || []).join(", ") || "—"}</span></div>
        </div>

        <hr className="rowrule" />

        <div className="rowdesc">
          <p className="desc">{spell.descriptionMd}</p>
          {spell.scalingMd && (
            <p
              className="sub"
              dangerouslySetInnerHTML={{
                __html: spell.scalingMd.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
              }}
            />
          )}
          {spell.higherLevelsMd && (
            <p
              className="sub"
              dangerouslySetInnerHTML={{
                __html: spell.higherLevelsMd.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
              }}
            />
          )}
        </div>
      </div>
    </details>
  );
}
