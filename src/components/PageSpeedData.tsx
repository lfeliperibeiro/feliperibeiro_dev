import React from 'react';

interface LighthouseCategory {
  score: number;
}

interface LighthouseResult {
  categories: {
    performance: LighthouseCategory;
    accessibility: LighthouseCategory;
    'best-practices': LighthouseCategory;
    seo: LighthouseCategory;
  };
}

interface PageSpeedDataType {
  lighthouseResult: LighthouseResult;
}

interface PageSpeedDataProps {
  pageSpeedData: PageSpeedDataType | null;
}

export function PageSpeedData({ pageSpeedData }: PageSpeedDataProps) {
  return (
    pageSpeedData && (
      <div className="mt-14 flex w-full flex-1 flex-col items-center justify-center pl-8 sm:pl-0">
        <div className="mx-auto mt-10 w-full max-w-xl flex-1 flex-col items-start justify-center">
          <h2 className="mb-2 text-xl text-zinc-50">PageSpeed Insights</h2>
          <p className="text-left text-base font-light text-zinc-400">
            Performance Score:{' '}
            <span className="text-green-500">
              {pageSpeedData.lighthouseResult.categories.performance.score *
                100}
            </span>
          </p>
          <p className="text-left text-base font-light text-zinc-400">
            Accessibility Score:{' '}
            <span className="text-green-500">
              {pageSpeedData.lighthouseResult.categories.accessibility.score *
                100}
            </span>
          </p>
          <p className="text-left text-base font-light text-zinc-400">
            Best Practices Score:{' '}
            <span className="text-green-500">
              {pageSpeedData.lighthouseResult.categories['best-practices']
                .score * 100}
            </span>
          </p>
          <p className="text-left text-base font-light text-zinc-400">
            SEO Score:{' '}
            <span className="text-green-500">
              {pageSpeedData.lighthouseResult.categories.seo.score * 100}
            </span>
          </p>
        </div>
      </div>
    )
  );
}
