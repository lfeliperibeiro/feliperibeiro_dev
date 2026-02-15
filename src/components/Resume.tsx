'use client';
import { useTranslations } from 'next-intl';

export function Resume() {
  const t = useTranslations('Resume');

  return (
    <div className="max-w-sm" data-testid="resume">
      <p className="px-4 text-base font-light text-gray-600 dark:text-zinc-400 md:px-0">
        <span className="font-normal text-gray-900 dark:text-zinc-50">
          {t('greeting')}
        </span>
        , {t('role')}
      </p>
    </div>
  );
}
