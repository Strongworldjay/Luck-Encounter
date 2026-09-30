import Modal from '../../components/ui/Modal.jsx';
import { featSlug as slugify } from '../../utils/text.js';
import { publicArtwork } from '../../utils/publicArtwork.js';
import { mdInlineToHtml } from '../../utils/text.js';
import { useEffect, useMemo, useRef, useState } from "react";


// ✅ slug helper for auto image paths (same as yours)

const listToText = (arr) => (Array.isArray(arr) && arr.length ? arr.join(", ") : "—");

export default function FeatModal({ feat, onClose }) {
  const [imgSrc, setImgSrc] = useState("");
  const tried = useRef(false);

  // Auto image path: public/assets/feats/<slug>.png
  const autoImagePath = useMemo(() => {
    const s = slugify(feat?.name);
    return s ? publicArtwork(`assets/feats/${s}.png`) : "";
  }, [feat?.name]);

  useEffect(() => {
    setImgSrc(autoImagePath);
    tried.current = false;
  }, [autoImagePath]);

  if (!feat) return null;

  const type = feat.type || feat.categoryLine || "—";
  const source = feat.sourceBook || feat.sourceLine || feat.source || "—";
  const prerequisite = feat.featTypeLine || feat.prerequisiteLine || feat.prerequisite || "—";
  const tags = feat.tags || [];

  // A concise summary derived from the selected feat.
  const summary = feat.summaryLine
    || (Array.isArray(feat.benefits) && feat.benefits.length
      ? feat.benefits.map((benefit) => benefit.title).slice(0, 3).join(", ")
      : "—");

  const onImgError = () => {
    if (!tried.current) {
      tried.current = true;
      setImgSrc("");
    }
  };

  return (
    <Modal title={feat.name} onClose={onClose} wide>
      <div className="feat-modal__content">
        <p className="feat-modal__subtitle">{type} · {source}</p>
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
    </Modal>
  );
}