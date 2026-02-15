'use client';
import { useTranslations } from 'next-intl';

export function Career() {
  const t = useTranslations('Career');
  const job1 = useTranslations('Career.job1');
  const job2 = useTranslations('Career.job2');
  const job3 = useTranslations('Career.job3');
  const job4 = useTranslations('Career.job4');

  return (
    <div id="career" className="mt-8 max-w-xl scroll-mt-20" data-testid="career">
      <span className="pl-8 text-xl text-gray-900 dark:text-zinc-50 sm:pl-0">{t('title')}</span>

      <div className="mb-4 mt-6 px-4">
        <p className="mb-4 px-4 text-base font-normal text-gray-800 dark:text-zinc-200 md:px-0">
          {t('frontendEngineer')}
        </p>
        <ul className="px-4 text-base font-light text-gray-600 dark:text-zinc-400 md:px-0">
          <li> {job4('item1')} </li>
          <li>{job4('item2')}</li>
          <li>{job4('item3')}</li>
          <li>{job4('item4')}</li>
          <li>{job4('item5')}</li>
          <li>{job4('item6')}</li>
        </ul>
        <p className="mt-4 px-4 text-base font-light text-gray-700 dark:text-zinc-300 md:px-0">
          {t('sensediaPeriod')}
        </p>
      </div>

      <hr className="my-6 border-t border-gray-300 dark:border-gray-500" />

      <div className="mb-4 mt-6 px-4">
        <p className="mb-4 px-4 text-base font-normal text-gray-800 dark:text-zinc-200 md:px-0">
          {t('seniorFrontend')}
        </p>
        <ul className="px-4 text-base font-light text-gray-600 dark:text-zinc-400 md:px-0">
          <li>
            {job1('item1')} <span className="text-gray-800 dark:text-zinc-200">PagSeguro </span> {job1('item2')}{' '}
            <span className="text-gray-800 dark:text-zinc-200">Banco Sofisa</span>;
          </li>
          <li> {job1('item3')} </li>
          <li>{job1('item4')}</li>
          <li>{job1('item5')}</li>
          <li>{job1('item6')}</li>
          <li>{job1('item7')}</li>
          <li>{job1('item8')}</li>
        </ul>
        <p className="mt-4 px-4 text-base font-light text-gray-700 dark:text-zinc-300 md:px-0">
          {t('wbrainPeriod')}
        </p>
      </div>

      <hr className="my-6 border-t border-gray-300 dark:border-gray-500" />

      <div className="mb-4 mt-6 px-4">
        <p className="mb-4 px-4 text-base font-normal text-gray-800 dark:text-zinc-200 md:px-0">
          {t('frontEndDeveloper')}
        </p>
        <ul className="px-4 text-base font-light text-gray-600 dark:text-zinc-400 md:px-0">
          <li> {job2('item1')} </li>
          <li>{job2('item2')}</li>
          <li>{job2('item3')}</li>
          <li>{job2('item4')}</li>
          <li>{job2('tech1')}</li>
          <li>{job2('tech2')}</li>
          <li>{job2('tech3')}</li>
          <li>{job2('tech4')}</li>
          <li>{job2('tech5')}</li>
          <li>{job2('tech6')}</li>
          <li>{job2('tech7')}</li>
        </ul>
        <p className="mt-4 px-4 text-base font-light text-gray-700 dark:text-zinc-300 md:px-0">
          {t('folhaPeriod')}
        </p>
      </div>
      <hr className="my-6 border-t border-gray-300 dark:border-gray-500" />

      <div className="mb-4 mt-6 px-4">
        <p className="mb-4 px-4 text-base font-normal text-gray-800 dark:text-zinc-200 md:px-0">
          {t('webDeveloper')}
        </p>
        <ul className="px-4 text-base font-light text-gray-600 dark:text-zinc-400 md:px-0">
          <li> {job3('item1')} </li>
          <li>{job3('tech1')}</li>
          <li>{job3('tech2')}</li>
          <li>{job3('tech3')}</li>
          <li>{job3('tech4')}</li>
          <li>{job3('tech5')}</li>
        </ul>
        <p className="mt-4 px-4 text-base font-light text-gray-700 dark:text-zinc-300 md:px-0">
          {t('freelancerPeriod')}
        </p>
      </div>
    </div>
  );
}
