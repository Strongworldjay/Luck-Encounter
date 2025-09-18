import { useEffect, useState } from 'react';

export function useBreakpoint(query = '(max-width: 640px)') {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (!window.matchMedia) return;
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    mql.addEventListener ? mql.addEventListener('change', onChange)
                         : mql.addListener(onChange);
    return () => {
      mql.removeEventListener ? mql.removeEventListener('change', onChange)
                              : mql.removeListener(onChange);
    };
  }, [query]);

  return matches;
}
