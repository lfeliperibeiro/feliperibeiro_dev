import type { NextPage } from 'next';
import Head from 'next/head';
import { Hero } from '../components/Hero/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Felipe Ribeiro | Front-End Developer</title>
      </Head>
      <Hero />
    </>
  );
};

export default Home;
