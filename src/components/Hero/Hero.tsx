import Image from 'next/image';
import { ProgressiveBar } from '../ProgressiveBar/ProgressiveBar';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export const Hero = () => {
  return (
    <div className="flex bg-background h-screen items-center justify-between">
      <div className={'flex flex-col p-10 mb-52'}>
        <div className={'mb-3'}>
          <Image
            height={100}
            width={100}
            className={'rounded-full'}
            src="https://github.com/lfeliperibeiro.png"
            alt={'Felipe Ribeiro'}
          />
        </div>

        <h1 className={'text-white font-black text-3xl'}>
          Olá eu sou o{' '}
          <span className={'text-pink500 text-4xl'}>Felipe Ribeiro</span>
        </h1>
        <p className={'text-white mt-2  max-w-screen-sm'}>
          Desenvolvedor Front-end com 5 anos de experiência. Atualmente tenho
          trabalhado com as seguintes tecnologias: React, NextJS, Styled
          Components, Tailwind CSS, Zustand, Immer
        </p>
        <div className={'flex items-center  gap-4 my-10 text-3xl'}>
          <a
            className={'text-purple100 hover:text-pink500'}
            href={'https://github.com/lfeliperibeiro'}
            target={'_blank'}
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className={'text-purple100 hover:text-pink500'}
            href={'https://www.linkedin.com/in/lfeliperibeiro/'}
            target={'_blank'}
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className={'text-purple100 hover:text-pink500'}
            href={'https://twitter.com/Lfelipe_rib'}
            target={'_blank'}
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
      <div
        className={
          'bg-white flex flex-col gap-4 p-20 w-5/12 mr-10 rounded shadow-lg shadow-black'
        }
      >
        <h1 className={'text-purple100 font-bold text-lg'}>Skills</h1>
        <p className={'text-pink500 font-bold text-md'}>React</p>
        <ProgressiveBar width={100} percent={4.6} />
        <p className={'text-pink500 font-bold text-md'}>Next</p>
        <ProgressiveBar width={100} percent={4.4} />
        <p className={'text-pink500 font-bold text-md'}>Vue</p>
        <ProgressiveBar width={100} percent={2} />
        <p className={'text-pink500 font-bold text-md'}>Styled Components</p>
        <ProgressiveBar width={100} percent={4.4} />
        <p className={'text-pink500 font-bold text-md'}>Tailwind</p>
        <ProgressiveBar width={100} percent={4.6} />
        <p className={'text-pink500 font-bold text-md'}>Zustand</p>
        <ProgressiveBar width={100} percent={4.6} />
        <p className={'text-pink500 font-bold text-md'}>Jest</p>
        <ProgressiveBar width={100} percent={4.4} />
      </div>
    </div>
  );
};
