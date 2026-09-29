import { useEffect, useState } from 'react';

export function useMediaQuery(query = '(max-width: 640px)') {
  const getMatches = () => typeof window !== 'undefined' && window.matchMedia?.(query).matches;
  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    const media = window.matchMedia?.(query);
    if (!media) return undefined;

    const update = (event) => setMatches(event.matches);
    setMatches(media.matches);
    media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, [query]);

  return matches;
}
