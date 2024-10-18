import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import Head from 'next/head';

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

interface PageSpeedData {
  lighthouseResult: LighthouseResult;
}

export default async function Home() {
  let pageSpeedData: PageSpeedData | null = null;

  try {
    const response = await fetch(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${process.env.NEXT_PUBLIC_PAGESPEED_URL}&key=${process.env.NEXT_PUBLIC_PAGESPEED_API_KEY}&category=performance&category=accessibility&category=best-practices&category=seo`,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    pageSpeedData = await response.json();
  } catch (error) {
    console.error('Failed to fetch PageSpeed data:', error);
  }

  return (
    <>
      <Head>
        <title>Felipe Ribeiro - Senior Frontend Engineer</title>
        <meta
          name="description"
          content={
            'Perfil profissional de Felipe Ribeiro como Engenheiro Frontend Sênior.'
          }
        />
        <meta
          name="keywords"
          content="Frontend Engineer, React, Next.js, Typescript, CI/CD, Marketing, Programming, Web Development"
        />
        <meta name="author" content="Felipe Ribeiro" />
      </Head>
      <main className="flex h-screen w-full flex-col items-end overflow-auto bg-gray-950">
        {pageSpeedData && (
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
                  {pageSpeedData.lighthouseResult.categories.accessibility
                    .score * 100}
                </span>
              </p>
              <p className="text-left text-base font-light text-zinc-400">
                Best Practices Score:{' '}
                <span className="text-green-500">
                  {pageSpeedData.lighthouseResult.categories['best-practices']
                    .score * 100}
                </span>
              </p>
              <p className="text-left text-base font-light text-zinc-100">
                SEO Score:{' '}
                <span className="text-green-500">
                  {pageSpeedData.lighthouseResult.categories.seo.score * 100}
                </span>
              </p>
            </div>
          </div>
        )}

        <Hero />
        <Footer />
      </main>
    </>
  );
}
