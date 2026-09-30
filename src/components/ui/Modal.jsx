import { useEffect, useId, useRef } from 'react';
import './Modal.css';
export default function Modal({ title, onClose, children, footer, wide = false }) {
  const ref = useRef(null); const id = useId();
  useEffect(() => {
    const previousFocus = document.activeElement;
    const overflow = document.body.style.overflow;
    const dialog = ref.current;
    dialog.showModal(); document.body.style.overflow = 'hidden';
    return () => { dialog.close(); document.body.style.overflow = overflow; previousFocus?.focus?.(); };
  }, []);
  return <dialog ref={ref} className={`ui-dialog ${wide ? 'ui-dialog--wide' : ''}`} aria-labelledby={id}
    onCancel={(event) => { event.preventDefault(); onClose(); }}
    onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="ui-dialog__panel">
      <header><h2 id={id}>{title}</h2><button className="app-btn icon-btn" onClick={onClose} aria-label="Close dialog">×</button></header>
      <div className="ui-dialog__body">{children}</div>
      {footer && <footer>{footer}</footer>}
    </div>
  </dialog>;
}
