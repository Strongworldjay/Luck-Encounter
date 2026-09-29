import { useEffect } from 'react';

export function useIOSInputZoomLock() {
  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
      || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const viewport = document.querySelector('meta#viewport');
    if (!isIOS || !viewport) return undefined;

    const base = viewport.getAttribute('content') || 'width=device-width, initial-scale=1, viewport-fit=cover';
    const lock = () => viewport.setAttribute('content', `${base}, maximum-scale=1, user-scalable=no`);
    const unlock = () => viewport.setAttribute('content', base);
    const isEditable = (target) => ['INPUT', 'TEXTAREA', 'SELECT'].includes(target?.tagName) || target?.isContentEditable;
    const focusIn = ({ target }) => isEditable(target) && lock();
    const focusOut = ({ target }) => isEditable(target) && setTimeout(unlock, 250);

    document.addEventListener('focusin', focusIn, true);
    document.addEventListener('focusout', focusOut, true);
    return () => {
      document.removeEventListener('focusin', focusIn, true);
      document.removeEventListener('focusout', focusOut, true);
      unlock();
    };
  }, []);
}
