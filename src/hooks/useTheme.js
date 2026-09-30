import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'luck-encounter-theme-preference';
const LEGACY_STORAGE_KEY = 'luck-encounter-theme';
const SYSTEM_QUERY = '(prefers-color-scheme: dark)';
const VALID_PREFERENCES = new Set(['system', 'light', 'dark']);

function getSystemTheme() {
  return window.matchMedia?.(SYSTEM_QUERY).matches ? 'dark' : 'light';
}

function getInitialPreference() {
  let stored, legacy;
  try { stored = localStorage.getItem(STORAGE_KEY); legacy = localStorage.getItem(LEGACY_STORAGE_KEY); } catch {}
  if (VALID_PREFERENCES.has(stored)) return stored;


  if (legacy === 'light' || legacy === 'dark') return legacy;

  return 'system';
}

export function useTheme() {
  const [preference, setPreference] = useState(getInitialPreference);
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);
  const theme = useMemo(
    () => (preference === 'system' ? systemTheme : preference),
    [preference, systemTheme]
  );

  useEffect(() => {
    const media = window.matchMedia?.(SYSTEM_QUERY);
    if (!media) return undefined;

    const syncSystemTheme = ({ matches }) => setSystemTheme(matches ? 'dark' : 'light');
    media.addEventListener?.('change', syncSystemTheme);
    return () => media.removeEventListener?.('change', syncSystemTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('theme-dark', theme === 'dark');
    root.classList.toggle('theme-light', theme === 'light');
    root.dataset.theme = theme;
    root.dataset.themePreference = preference;
    try { localStorage.setItem(STORAGE_KEY, preference); localStorage.removeItem(LEGACY_STORAGE_KEY); } catch {}
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#07171d' : '#eef3f0';
  }, [preference, theme]);

  const setThemePreference = (nextPreference) => {
    if (VALID_PREFERENCES.has(nextPreference)) setPreference(nextPreference);
  };

  return {
    theme,
    preference,
    isDark: theme === 'dark',
    setThemePreference,
  };
}
