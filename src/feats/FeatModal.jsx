import React, { useEffect, useMemo, useRef, useState } from "react";

const mdInlineToHtml = (md) =>
  String(md ?? "")
    .replace(/\*\*([\s\S]*?)\*\*/g, "<strong>$1</strong>")
    .replace(/__([\s\S]*?)__/g, "<strong>$1</strong>")
    .replace(/\r\n|\r|\n/g, "<br/>");

// ✅ slug helper for auto image paths (same as yours)
const slugify = (s) =>
  String(s ?? "")
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const listToText = (arr) => (Array.isArray(arr) && arr.length ? arr.join(", ") : "—");

export default function FeatModal({ feat, onClose }) {
  const [imgSrc, setImgSrc] = useState("");
  const tried = useRef(false);

  // Auto image path: public/assets/feats/<slug>.png
  const autoImagePath = useMemo(() => {
    const s = slugify(feat?.name);
    return s ? `/assets/feats/${s}.png` : "";
  }, [feat?.name]);

  useEffect(() => {
    setImgSrc(autoImagePath);
    tried.current = false;
  }, [autoImagePath]);

  // ESC + body scroll lock (matches “modal like spells” behavior)
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!feat) return null;

  const type = feat.type || feat.categoryLine || "—";
  const source = feat.sourceBook || feat.sourceLine || feat.source || "—";
  const prerequisite = feat.featTypeLine || feat.prerequisiteLine || feat.prerequisite || "—";
  const tags = feat.tags || [];

  // A “summary” like your row does
  const summary = useMemo(() => {
    if (feat.summaryLine) return feat.summaryLine;
    if (Array.isArray(feat.benefits) && feat.benefits.length) {
      return feat.benefits.map((b) => b.title).slice(0, 3).join(", ");
    }
    return "—";
  }, [feat.summaryLine, feat.benefits]);

  const onImgError = () => {
    if (!tried.current) {
      tried.current = true;
      setImgSrc("");
    }
  };

  return (
    <div className="feat-modal__backdrop" onMouseDown={onClose} role="dialog" aria-modal="true">
      <div
        className="feat-modal__panel feat-modal__panel--responsive"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="feat-modal__header">
          <div>
            <h2 className="feat-modal__title">{feat.name}</h2>
            <div className="feat-modal__subtitle">
              {type} • {source}
            </div>
          </div>

          <button className="feat-modal__close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="feat-modal__infobar">
          <div className="infocell">
            <div className="cap">Type</div>
            <div>{type}</div>
          </div>
          <div className="infocell">
            <div className="cap">Prerequisite</div>
            <div>{prerequisite}</div>
          </div>
          <div className="infocell">
            <div className="cap">Summary</div>
            <div>{summary}</div>
          </div>
          <div className="infocell">
            <div className="cap">Tags</div>
            <div>{tags.length ? listToText(tags) : "—"}</div>
          </div>
        </div>

        <hr className="feat-modal__rule" />

        <div className="feat-modal__body">
          <div className="feat-modal__artwrap">
            {imgSrc ? (
              <img
                className="feat-modal__art feat-image--transparent"
                src={imgSrc}
                alt=""
                width={220}
                height={220}
                loading="eager"
                decoding="async"
                onError={onImgError}
              />
            ) : null}
          </div>

          <div>
            {feat.descriptionMd && (
              <div
                className="feat-modal__desc"
                dangerouslySetInnerHTML={{ __html: mdInlineToHtml(feat.descriptionMd) }}
              />
            )}

            {Array.isArray(feat.benefits) && feat.benefits.length > 0 && (
              <div className="feat-modal__benefits">
                {feat.benefits.map((b, idx) => (
                  <p key={idx} className="feat-modal__benefit">
                    <strong>{b.title}.</strong>{" "}
                    <span dangerouslySetInnerHTML={{ __html: mdInlineToHtml(b.text) }} />
                  </p>
                ))}
              </div>
            )}

            {feat.specialMd && (
              <div
                className="feat-modal__sub"
                dangerouslySetInnerHTML={{ __html: mdInlineToHtml(feat.specialMd) }}
              />
            )}

            <div className="feat-modal__chips">
              <div className="chiprow">
                <span className="chipcap">Tags:</span>
                {tags?.length ? (
                  tags.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))
                ) : (
                  <span className="chip chip--hollow">—</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}