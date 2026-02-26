// FeatRow.jsx
import React, { useMemo, useRef, useState } from "react";

const mdInlineToHtml = (md) =>
  String(md ?? "")
    .replace(/\*\*([\s\S]*?)\*\*/g, "<strong>$1</strong>")
    .replace(/__([\s\S]*?)__/g, "<strong>$1</strong>")
    .replace(/\r\n|\r|\n/g, "<br/>");

// Helpers for display
const listToText = (arr) => (Array.isArray(arr) && arr.length ? arr.join(", ") : "—");

// ✅ slug helper for auto image paths
const slugify = (s) =>
  String(s ?? "")
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function FeatRow({ feat, onOpenModal }) {
  const [open, setOpen] = useState(false);

  // ✅ Auto image path from feat name (served from /public)
  // Put images in: public/assets/feats/<slug>.png
  const autoImagePath = useMemo(() => {
    const s = slugify(feat?.name);
    return s ? `/assets/feats/${s}.png` : "";
  }, [feat?.name]);

  const [src, setSrc] = useState(autoImagePath);
  const tried = useRef(false);

  const onImgError = () => {
    if (!tried.current) {
      tried.current = true;
      setSrc("");
    }
  };

  const summary = useMemo(() => {
    if (feat.summaryLine) return feat.summaryLine;
    if (Array.isArray(feat.benefits) && feat.benefits.length) {
      return feat.benefits.map((b) => b.title).slice(0, 3).join(", ");
    }
    return "—";
  }, [feat.summaryLine, feat.benefits]);

  const prerequisite = feat.featTypeLine || feat.prerequisiteLine || feat.prerequisite || "—";
  const source = feat.sourceBook || feat.sourceLine || feat.source || "—";
  const tags = feat.tags || [];
  const type = feat.type || feat.categoryLine || "—";

  // ✅ icon click opens modal ONLY (doesn't toggle details)
  const openModalFromIcon = (e) => {
    e.preventDefault();   // stop <summary> toggle
    e.stopPropagation();  // stop bubbling
    onOpenModal?.(feat);
  };

  return (
    <details className="feat-row" open={open} onToggle={(e) => setOpen(e.currentTarget.open)}>
      <summary className="feat-row__summary">
        <div className="cell type">{type}</div>

        <div className="cell name">
          {src ? (
            <img
              className="icon icon--clickable"
              src={src}
              onError={onImgError}
              alt=""
              width={26}
              height={26}
              loading="lazy"
              decoding="async"
              onClick={openModalFromIcon}
              onMouseDown={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
            />
          ) : (
            <span className="icon icon--blank" aria-hidden />
          )}

          <div className="namewrap">
            <div className="title">{feat.name}</div>
            <div className="sub">{source}</div>
          </div>
        </div>

        <div className="cell">{prerequisite}</div>
        <div className="cell">{summary}</div>
        <div className="cell">{listToText(tags)}</div>

        <div className="cell chevron">{open ? "–" : "+"}</div>
      </summary>

      <div className="feat-row__details">
        <div className="detailgrid">
          <div>
            <span className="cap">Type</span>
            <span>{type}</span>
          </div>
          <div>
            <span className="cap">Source</span>
            <span>{source}</span>
          </div>
          <div>
            <span className="cap">Prerequisite</span>
            <span>{prerequisite}</span>
          </div>
          <div>
            <span className="cap">Tags</span>
            <span>{listToText(tags)}</span>
          </div>
        </div>

        <hr className="rowrule" />

        <div className="rowdesc">
          {feat.descriptionMd && (
            <p className="desc" dangerouslySetInnerHTML={{ __html: mdInlineToHtml(feat.descriptionMd) }} />
          )}

          {Array.isArray(feat.benefits) && feat.benefits.length > 0 && (
            <div className="feat-benefits">
              {feat.benefits.map((b, idx) => (
                <p key={idx} className="desc">
                  <strong>{b.title}.</strong>{" "}
                  <span dangerouslySetInnerHTML={{ __html: mdInlineToHtml(b.text) }} />
                </p>
              ))}
            </div>
          )}

          {feat.specialMd && (
            <p className="sub" dangerouslySetInnerHTML={{ __html: mdInlineToHtml(feat.specialMd) }} />
          )}
        </div>
      </div>
    </details>
  );
}