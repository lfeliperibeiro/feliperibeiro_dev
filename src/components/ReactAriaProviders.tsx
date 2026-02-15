'use client';

import type { ReactNode } from 'react';
import { SSRProvider, I18nProvider } from 'react-aria-components';
import type { Locale } from '../i18n/request';

const localeToAriaLocale: Record<Locale, string> = {
  en: 'en-US',
  pt: 'pt-BR',
};

interface ReactAriaProvidersProps {
  locale: Locale;
  children: ReactNode;
}

export function ReactAriaProviders({ locale, children }: ReactAriaProvidersProps) {
  const ariaLocale = localeToAriaLocale[locale] ?? 'en-US';

  return (
    <SSRProvider>
      <I18nProvider locale={ariaLocale}>{children}</I18nProvider>
    </SSRProvider>
  );
}
