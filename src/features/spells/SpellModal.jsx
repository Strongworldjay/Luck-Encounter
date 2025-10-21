import React, { useEffect, useRef } from "react";
import { slugify, spellImgUrl, schoolImgUrl, genericSpellImgUrl } from "./utils";

const levelLabel = (lvl) =>
  lvl === 0 ? "Cantrip" : `${lvl}${[, "st", "nd", "rd"][lvl] || "th"}-level`;

export default function SpellModal({ spell, onClose }) {
  const panelRef = useRef(null);

  // Close on Esc / backdrop click
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const stop = (e) => e.stopPropagation();

  // image with fallbacks
  const slug = spell.slug || slugify(spell.name || "");
  const initialSrc = spell.imagePath || spellImgUrl(slug);
  const imgRef = useRef(null);
  const tried = useRef({ school: false, generic: false });
  const onImgError = () => {
    if (!tried.current.school) {
      tried.current.school = true;
      imgRef.current.src = schoolImgUrl(spell.school);
      return;
    }
    if (!tried.current.generic) {
      tried.current.generic = true;
      imgRef.current.src = genericSpellImgUrl();
      return;
    }
  };

  // component helper for components field
  const comps = (() => {
    const c = spell.components || {};
    const s = `${c.verbal ? "V" : ""}${c.somatic ? "S" : ""}${c.material ? "M" : ""}`;
    return s + (c.material && c.materialText ? ` (${c.materialText})` : "") || "—";
  })();

  // Markdown-like inline parser for **bold**, __bold__, and newlines
  const mdInlineToHtml = (md) =>
    String(md ?? "")
      .replace(/\*\*([\s\S]*?)\*\*/g, "<strong>$1</strong>")
      .replace(/__([\s\S]*?)__/g, "<strong>$1</strong>")
      .replace(/\r\n|\r|\n/g, "<br/>");

  return (
    <div className="spell-modal__backdrop" onClick={onClose} role="presentation">
      <div
        className="spell-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="spell-modal-title"
        onClick={stop}
        ref={panelRef}
      >
        {/* Header */}
        <header className="spell-modal__header">
          <div className="spell-modal__titlewrap">
            <h2 id="spell-modal-title" className="spell-modal__title">
              {spell.name}
            </h2>
            <div className="spell-modal__subtitle">
              {levelLabel(spell.spellLevel)} · {spell.school} ·{" "}
              {spell.classes?.join(", ")}
            </div>
          </div>
          <button className="spell-modal__close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </header>

        {/* Info bar */}
        <section className="spell-modal__infobar">
          <div className="infocell">
            <div className="cap">Casting Time</div>
            <div>{spell.castingTime || "—"}</div>
          </div>
          <div className="infocell">
            <div className="cap">Duration</div>
            <div>{spell.duration || "—"}</div>
          </div>
          <div className="infocell">
            <div className="cap">Range / Area</div>
            <div>
              {spell.range || "—"}
              {spell.area ? ` (${spell.area})` : ""}
            </div>
          </div>
          <div className="infocell">
            <div className="cap">Attack / Save</div>
            <div>
              {spell.attackType || "—"}
              {spell.saveRequired ? ` / ${spell.saveRequired}` : ""}
            </div>
          </div>
          <div className="infocell">
            <div className="cap">Damage / Effect</div>
            <div>{spell.damageTypes?.length ? spell.damageTypes.join(", ") : "—"}</div>
          </div>
          <div className="infocell">
            <div className="cap">Components</div>
            <div>{comps}</div>
          </div>
          <div className="infocell">
            <div className="cap">Conc. / Ritual</div>
            <div>
              {spell.concentration ? "Yes" : "No"} / {spell.ritual ? "Yes" : "No"}
            </div>
          </div>
        </section>

        <hr className="spell-modal__rule" />

        {/* Body: image + text */}
        <section className="spell-modal__body">
          <div className="spell-modal__artwrap">
            <img
              ref={imgRef}
              src={initialSrc}
              onError={onImgError}
              alt={`${spell.name} art`}
              className="spell-modal__art"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="spell-modal__text">
            {/* Main description */}
            <p
              className="spell-modal__desc"
              dangerouslySetInnerHTML={{ __html: mdInlineToHtml(spell.descriptionMd) }}
            />

            {/* Scaling text */}
            {spell.scalingMd && (
              <p
                className="spell-modal__sub"
                dangerouslySetInnerHTML={{
                  __html: mdInlineToHtml(spell.scalingMd),
                }}
              />
            )}

            {/* Higher-levels text */}
            {spell.higherLevelsMd && (
              <p
                className="spell-modal__sub"
                dangerouslySetInnerHTML={{
                  __html: mdInlineToHtml(spell.higherLevelsMd),
                }}
              />
            )}

            {/* Tags & availability */}
            {(spell.tags?.length || spell.classes?.length) && (
              <div className="spell-modal__chips">
                {spell.tags?.length ? (
                  <div className="chiprow">
                    <span className="chipcap">Tags:</span>
                    {spell.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
                {spell.classes?.length ? (
                  <div className="chiprow">
                    <span className="chipcap">Available for:</span>
                    {spell.classes.map((c) => (
                      <span key={c} className="chip chip--hollow">
                        {c}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
