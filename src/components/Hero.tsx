import Image from 'next/image'

export function Hero() {
  return (
    <section
      className="mt-32 flex w-full flex-1 flex-col items-center justify-center"
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
          />
        </div>
        <div className="max-w-sm">
          <p className=" px-4 text-base font-light text-zinc-400 md:px-0">
            <span className="font-normal text-zinc-50">
              Hi! I&apos;m Felipe Ribeiro
            </span>
            , a Senior Frontend Engineer. 6 years of experience. Currently I
            have worked with the following technologies: React, NextJS, Styled
            Components, Tailwind CSS, Zustand, Immer, Axios, Jest, Testing
            Library, Storybook, Figma, Git, Github, Gitlab, Bitbucket, Jira.
          </p>
        </div>
      </div>

      <div className="mt-8 max-w-xl">
        <span className="pl-8 text-xl text-zinc-50 sm:pl-0">Bio</span>

        <blockquote className="mt-8 border-l-4 border-solid border-l-gray-700 pl-5">
          <p className="px-4 text-base font-light text-zinc-400 md:px-0">
            At wBrain Agile People, I drive projects as a Senior Frontend
            Engineer, applying my Marketing knowledge acquired at Universidade
            Paulista. My expertise encompasses React, Next.js, and Typescript,
            which are fundamental in creating web solutions that optimize user
            experience. With certifications from Rocketseat, I have enhanced my
            skills in CI/CD, significantly contributing to interface innovation
            and actively collaborating to align business strategies with
            technology. Our team values collaboration and the constant pursuit
            of improvements in development practices.
          </p>
        </blockquote>
      </div>
      {/* <div className="mt-8 max-w-xl">
        <span className="text-xl text-zinc-50">Bio</span>

        <div className="">
          <p className="px-4 text-base font-light text-zinc-400 md:px-0">
            At wBrain Agile People, I drive projects as a Senior Frontend
            Engineer, applying my Marketing knowledge acquired at Universidade
            Paulista. My expertise encompasses React, Next.js, and Typescript,
            which are fundamental in creating web solutions that optimize user
            experience. With certifications from Rocketseat, I have enhanced my
            skills in CI/CD, significantly contributing to interface innovation
            and actively collaborating to align business strategies with
            technology. Our team values collaboration and the constant pursuit
            of improvements in development practices.
          </p>
        </div>
      </div> */}
    </section>
  )
}
