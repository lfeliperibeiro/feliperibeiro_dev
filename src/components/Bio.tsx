'use client';
import { useTranslations } from 'next-intl';

export function Bio() {
  const t = useTranslations('Bio');

  return (
    <div className="mt-8 max-w-xl" data-testid="bio">
      <span className="pl-8 text-xl text-gray-900 dark:text-zinc-50 sm:pl-0">
        {t('title')}
      </span>

      <blockquote className="mt-8 border-l-4 border-solid border-l-gray-300 pl-5 dark:border-l-gray-700">
        <p className="px-4 text-base font-light text-gray-600 dark:text-zinc-400 md:px-0">
          {t('text')}
        </p>
      </blockquote>
    </div>
  );
}
