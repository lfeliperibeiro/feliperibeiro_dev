import React from 'react';

export function useTranslations() {
  return (key: string) => key;
}

export function useLocale() {
  return 'en';
}

export function NextIntlClientProvider({
  children,
}: {
  children: React.ReactNode;
  locale?: string;
  messages?: Record<string, unknown>;
}) {
  return React.createElement(React.Fragment, null, children);
}
