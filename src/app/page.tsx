import { Footer } from '../components/Footer';
import { Content } from '../components/Content';
import Head from 'next/head';
import { PageSpeedData } from '../components/PageSpeedData';

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

export default async function Home() {
  let pageSpeedData: PageSpeedDataType | null = null;

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
        <PageSpeedData pageSpeedData={pageSpeedData} />
        <Content />
        <Footer />
      </main>
    </>
  );
}
