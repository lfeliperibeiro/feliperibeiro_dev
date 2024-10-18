'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Bio } from './Bio';
import { Resume } from './Resume';
import { Career } from './Career';

export function Hero() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'pt' : 'en'));
  };
  return (
    <>
      <div className="mt-2 flex w-full flex-1 flex-col items-center justify-center">
        <div className="mx-auto mt-2 w-full max-w-xl flex-1 flex-col items-start justify-center pl-8 sm:pl-0">
          <button
            className="rounded-md py-2 text-slate-300 hover:text-slate-100"
            onClick={toggleLanguage}
          >
            {language === 'en' ? '🇧🇷 Portuguese' : '🇺🇸 English'}
          </button>
        </div>
      </div>
      <section
        className="mt-4 flex w-full flex-1 flex-col items-center justify-center"
        data-testid="hero"
      >
        <div className="w-full max-w-2xl pl-8">
          <h1 className="mb-4 inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-4xl text-transparent">
            Inspired. UX. Idea
          </h1>
        </div>
        <div className="gap-6 sm:flex">
          <div>
            <Image
              className="mb-4 rounded-md pl-4 shadow-md sm:mb-0 sm:pl-0 "
              alt="Felipe Ribeiro"
              width={200}
              height={200}
              quality={100}
              src={
                'https://media.licdn.com/dms/image/v2/C4D03AQG7fifUFFS-yQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1648318789556?e=1734566400&v=beta&t=b4DrX-JMUkoKAJRiB2qJGWLFGr04HqkfFhb-S_EtNIw'
              }
              priority
            />
          </div>
          <Resume language={language} />
        </div>
        <Bio language={language} />
        <Career language={language} />
      </section>
    </>
  );
}
