import Image from 'next/image';
import { Repositories } from '../Repositories/Repositories';
import { Skills } from '../Skills';
import { Social } from '../Social/Social';
import { IntroInfo } from '../IntroInfo/IntroInfo';

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row bg-background h-full lg:h-screen items-center justify-between">
      <div className={'flex flex-col m-2 lg:p-10'}>
        <div className={'mb-1'}>
          <Image
            height={100}
            width={100}
            className={'rounded-full'}
            src="https://github.com/lfeliperibeiro.png"
            alt={'Felipe Ribeiro'}
          />
        </div>
        <IntroInfo />
        <Social />
        <div className={'mb-4'}>
          <h1 className={'text-3xl font-bold text-pink500 mb-2 text-center'}>
            Repositories
          </h1>
          <Repositories />
        </div>
      </div>
      <Skills />
    </div>
  );
};
