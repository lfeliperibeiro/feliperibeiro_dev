import type React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Analytics } from '@vercel/analytics/react';
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

import { Poppins } from 'next/font/google';
import { ReactAriaProviders } from '../components/ReactAriaProviders';
import { ThemeProvider } from '../components/ThemeProvider';
import type { Locale } from '../i18n/request';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Felipe Ribeiro',
  description: 'Senior Frontend Engineer',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = (await getLocale()) as Locale;
  const messages = await getMessages();
  const store = await cookies();
  const themeCookie = store.get('theme')?.value;
  const theme = themeCookie === 'light' ? 'light' : 'dark';

  return (
    <html lang={locale} className={theme === 'light' ? '' : 'dark'} suppressHydrationWarning>
      <body className={`${poppins.className} bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-zinc-100`}>
        <ThemeProvider initialTheme={theme}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ReactAriaProviders locale={locale}>
              {children}
              <Analytics />
            </ReactAriaProviders>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
