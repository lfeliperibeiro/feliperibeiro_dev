import Image from 'next/image'

export function Hero() {
  return (
    <section className="flex max-w-3xl flex-1 flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center ">
        <Image
          className="h-36 w-36 rounded-full shadow-sm"
          src={'https://github.com/lfeliperibeiro.png'}
          alt={'Felipe Ribeiro'}
          width={200}
          height={200}
        />
        <div>
          <p className=" text-center text-2xl font-bold text-zinc-50">
            <span className=" mr-2 bg-gradient-to-r from-[#B16CEA] to-[#FF8A56] bg-clip-text text-3xl font-bold text-transparent">
              Hello, {`I'm`} Felipe,
            </span>
            Senior Frontend Engineer <br /> based in São Paulo, Brazil
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="mt-4 max-w-2xl text-center text-sm font-thin text-zinc-50">
          Senior Frontend engineer with 6 years of experience. Currently I have
          worked with the following technologies: React, NextJS, Styled
          Components, Tailwind CSS, Zustand, Immer, Axios, Jest, Testing
          Library, Storybook, Figma, Git, Github, Gitlab, Bitbucket, Jira.
        </p>
        <a
          href="https://github.com/lfeliperibeiro"
          target="_blank"
          type="button"
          className="mt-8  cursor-pointer rounded-lg bg-whitePrimary p-2 text-sm hover:bg-slate-300"
        >
          Access my GitHub
        </a>
      </div>
    </section>
  )
}
