'use client';

import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  // eslint-disable-next-line no-unused-vars -- type definition; param is part of the API
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_COOKIE = 'theme';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function setThemeCookie(value: Theme) {
  if (typeof document === 'undefined') return;
  // biome-ignore lint/suspicious/noDocumentCookie: simple theme cookie; Cookie Store API not needed
  document.cookie = `${THEME_COOKIE}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

type ThemeProviderProps = Readonly<{
  initialTheme: Theme;
  children: ReactNode;
}>;

export function ThemeProvider({ initialTheme, children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const setThemeAndPersist = useCallback((next: Theme) => {
    setTheme(next);
    setThemeCookie(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme: setThemeAndPersist }),
    [theme, setThemeAndPersist],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
