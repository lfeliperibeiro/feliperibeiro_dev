export function IntroInfo() {
  return (
    <>
      <h1 className={'text-white font-black text-2xl  lg:text-3xl '}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Hi, I'm {''}
        <span className={'text-pink500 lg:text-4xl text-3xl'}>
          Felipe Ribeiro
        </span>
      </h1>
      <p className={'text-white mt-2  max-w-screen-sm'}>
        Front-end developer with 5 years of experience. Currently I have worked
        with the following technologies: React, NextJS, Styled Components,
        Tailwind CSS, Zustand, Immer, Axios, Jest, Testing Library
      </p>
    </>
  );
}
