import Modal from '../../components/ui/Modal.jsx';
import { mdInlineToHtml } from '../../utils/text.js';
import { useRef } from "react";
import { slugify, spellImgUrl, schoolImgUrl, genericSpellImgUrl } from "./utils";

const levelLabel = (lvl) =>
  lvl === 0 ? "Cantrip" : `${lvl}${[null, "st", "nd", "rd"][lvl] || "th"}-level`;

// Tiny inline md (**bold**, __bold__, and newlines)

// JSON-driven reference table (theme-aware via CSS)
function RefTable({ title, columns = [], rows = [] }) {
  return (
    <figure className="refblock">
      {title ? <figcaption className="refblock__title">{title}</figcaption> : null}
      <table>
        {columns.length ? (
          <thead>
            <tr>{columns.map((c) => <th key={c}>{c}</th>)}</tr>
          </thead>
        ) : null}
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((cell, j) => <td key={j}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

export default function SpellModal({ spell, onClose }) {
  // Image with fallbacks
  const slug = spell.slug || slugify(spell.name || "");
  const initialSrc = spell.imagePath || spellImgUrl(slug) || schoolImgUrl(spell.school);
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
    }
  };

  // Components formatter
  const comps = (() => {
    const c = spell.components || {};
    const s = `${c.verbal ? "V" : ""}${c.somatic ? "S" : ""}${c.material ? "M" : ""}`;
    return s + (c.material && c.materialText ? ` (${c.materialText})` : "") || "—";
  })();

  return (
    <Modal title={spell.name} onClose={onClose} wide>
      <div className="spell-modal__content">
        <p className="spell-modal__subtitle">{levelLabel(spell.spellLevel)} · {spell.school} · {spell.classes?.join(', ')}</p>
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

        {/* Body: art + text */}
        <section className="spell-modal__body">
          <div className="spell-modal__artwrap">
            <img
              ref={imgRef}
              src={initialSrc}
              onError={onImgError}
              alt={`${spell.name} art`}
              className="spell-modal__art spell-image--transparent"
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
                dangerouslySetInnerHTML={{ __html: mdInlineToHtml(spell.scalingMd) }}
              />
            )}

            {/* Higher-levels text */}
            {spell.higherLevelsMd && (
              <p
                className="spell-modal__sub"
                dangerouslySetInnerHTML={{ __html: mdInlineToHtml(spell.higherLevelsMd) }}
              />
            )}

            {/* Sources, tags, and availability */}
            {(spell.sources?.length || spell.tags?.length || spell.classes?.length) && (
              <div className="spell-modal__chips">
                {spell.sources?.length ? (
                  <div className="chiprow">
                    <span className="chipcap">Sources:</span>
                    {spell.sources.map((source) => (
                      <span key={source} className="chip chip--source">
                        {source}
                      </span>
                    ))}
                  </div>
                ) : null}
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

            {/* Stat block (modal-only) */}
            {(spell.statblockHtml || spell.statblockMd) && (
              <section className="spell-modal__statblock">
                <div
                  className="statblock"
                  dangerouslySetInnerHTML={{
                    __html: spell.statblockHtml
                      ? spell.statblockHtml
                      : mdInlineToHtml(spell.statblockMd),
                  }}
                />
              </section>
            )}

            {/* Reference table(s) (HTML drop-in or JSON-driven) */}
            {(spell.tableHtml || (spell.tables && spell.tables.length)) && (
              <section className="spell-modal__reftables">
                {spell.tableHtml && (
                  <div
                    className="refblock"
                    dangerouslySetInnerHTML={{ __html: spell.tableHtml }}
                  />
                )}
                {spell.tables?.map((t, idx) => (
                  <RefTable
                    key={idx}
                    title={t.title}
                    columns={t.columns}
                    rows={t.rows}
                  />
                ))}
              </section>
            )}
          </div>
        </section>
      </div>
    </Modal>
  );
}
