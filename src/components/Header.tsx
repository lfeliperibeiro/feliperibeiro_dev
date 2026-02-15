'use client';

import { Sun, Moon } from 'lucide-react';
import { Link } from 'react-aria-components';
import { useTranslations, useLocale } from 'next-intl';
import { useTheme } from './ThemeProvider';

const LOCALE_COOKIE = 'locale';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function setLocaleCookie(value: string) {
  if (typeof document === 'undefined') return;
  // biome-ignore lint/suspicious/noDocumentCookie: locale persistence for i18n
  document.cookie = `${LOCALE_COOKIE}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

export function Header() {
  const t = useTranslations('Header');
  const locale = useLocale();
  const { theme, setTheme } = useTheme();

  const handleLanguageClick = () => {
    const next = locale === 'en' ? 'pt' : 'en';
    setLocaleCookie(next);
    globalThis.location.reload();
  };

  const handleThemeClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className="sticky top-0 z-10 w-full border-b border-gray-200 bg-white/80 py-3 backdrop-blur dark:border-zinc-800 dark:bg-gray-950/80"
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4">
        <nav
          className="flex items-center gap-4 md:gap-6"
          aria-label={t('nav.ariaLabel')}
        >
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            globalThis.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-sm font-medium text-gray-700 outline-none hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded dark:text-zinc-300 dark:hover:text-zinc-50 dark:focus:ring-offset-gray-950"
        >
          {t('nav.home')}
        </Link>
        <Link
          href="#career"
          className="text-sm font-medium text-gray-700 outline-none hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded dark:text-zinc-300 dark:hover:text-zinc-50 dark:focus:ring-offset-gray-950"
        >
          {t('nav.career')}
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handleLanguageClick}
          className="rounded px-2 py-1 text-sm text-gray-600 outline-none hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus:ring-offset-gray-950"
          aria-label={t('languageToggle')}
        >
          {t('languageToggle')}
        </button>
        <button
          type="button"
          onClick={handleThemeClick}
          className="rounded p-2 text-gray-600 outline-none hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus:ring-offset-gray-950"
          aria-label={theme === 'dark' ? t('themeLight') : t('themeDark')}
        >
          {theme === 'dark' ? (
            <Sun size={20} aria-hidden />
          ) : (
            <Moon size={20} aria-hidden />
          )}
        </button>
      </div>
      </div>
    </header>
  );
}
