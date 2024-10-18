interface ResumeProps {
  language: string;
}

export function Resume({ language }: ResumeProps) {
  return (
    <div className="max-w-sm">
      <p className=" px-4 text-base font-light text-zinc-400 md:px-0">
        {language === 'en' ? (
          <>
            <span className="font-normal text-zinc-50">
              Hi! I&apos;m Felipe Ribeiro
            </span>
            , a Senior Frontend Engineer. 7 years of experience. Currently I
            have worked with the following technologies: React, NextJS, Styled
            Components, Tailwind CSS, Zustand, Immer, Axios, Jest, Testing
            Library, Storybook, Figma, Git, Github, Gitlab, Bitbucket, Jira.
          </>
        ) : (
          <>
            <span className="font-normal text-zinc-50">
              Olá! Eu sou Felipe Ribeiro
            </span>
            , um Engenheiro Frontend Sênior. 7 anos de experiência. Atualmente
            tenho trabalhado com as seguintes tecnologias: React, NextJS, Styled
            Components, Tailwind CSS, Zustand, Immer, Axios, Jest, Testing
            Library, Storybook, Figma, Git, Github, Gitlab, Bitbucket, Jira.
          </>
        )}
      </p>
    </div>
  );
}
