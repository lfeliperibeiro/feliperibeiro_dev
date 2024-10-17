import Image from 'next/image'

interface HeroProps {
  language: string
  setLanguage: (language: string) => void
}

export function Hero({ language }: HeroProps) {
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
            {language === 'en' ? (
              <>
                <span className="font-normal text-zinc-50">
                  Hi! I&apos;m Felipe Ribeiro
                </span>
                , a Senior Frontend Engineer. 7 years of experience. Currently I
                have worked with the following technologies: React, NextJS,
                Styled Components, Tailwind CSS, Zustand, Immer, Axios, Jest,
                Testing Library, Storybook, Figma, Git, Github, Gitlab,
                Bitbucket, Jira.
              </>
            ) : (
              <>
                <span className="font-normal text-zinc-50">
                  Olá! Eu sou Felipe Ribeiro
                </span>
                , um Engenheiro Frontend Sênior. 7 anos de experiência.
                Atualmente tenho trabalhado com as seguintes tecnologias: React,
                NextJS, Styled Components, Tailwind CSS, Zustand, Immer, Axios,
                Jest, Testing Library, Storybook, Figma, Git, Github, Gitlab,
                Bitbucket, Jira.
              </>
            )}
          </p>
        </div>
      </div>

      <div className="mt-8 max-w-xl">
        <span className="pl-8 text-xl text-zinc-50 sm:pl-0">Bio</span>

        <blockquote className="mt-8 border-l-4 border-solid border-l-gray-700 pl-5">
          <p className="px-4 text-base font-light text-zinc-400 md:px-0">
            {language === 'en' ? (
              <>
                At wBrain Agile People, I drive projects as a Senior Frontend
                Engineer, applying my Marketing knowledge acquired at
                Universidade Paulista. My expertise encompasses React, Next.js,
                and Typescript, which are fundamental in creating web solutions
                that optimize user experience. With certifications from
                Rocketseat, I have enhanced my skills in CI/CD, significantly
                contributing to interface innovation and actively collaborating
                to align business strategies with technology. Our team values
                collaboration and the constant pursuit of improvements in
                development practices.
              </>
            ) : (
              <>
                Na wBrain Agile People, impulsiono projetos como Engenheiro
                Frontend Sênior, aplicando meu conhecimento em Marketing
                adquirido na Universidade Paulista. Minha expertise abrange
                React, Next.js e Typescript, fundamentais na criação de soluções
                web que otimizam a experiência do usuário. Com as certificações
                da Rocketseat, aprimorei minha habilidade em CI/CD, contribuindo
                significativamente para a inovação de interfaces e colaborando
                ativamente para alinhar estratégias de negócios com a
                tecnologia. Nossa equipe valoriza a colaboração e a busca
                constante por melhorias nas práticas de desenvolvimento.
              </>
            )}
          </p>
        </blockquote>
      </div>
      <div className="mt-8 max-w-xl">
        <span className="pl-8 text-xl text-zinc-50 sm:pl-0">
          {language === 'en' ? 'Career' : 'Carreira'}
        </span>

        <div className="mb-4 mt-6 px-4">
          <p className="mb-4 px-4 text-base font-normal text-zinc-200 md:px-0">
            {language === 'en'
              ? 'Senior Frontend Engineer'
              : 'Engenheiro Frontend Sênior'}
          </p>
          <ul className="px-4 text-base font-light text-zinc-400 md:px-0">
            {language === 'en' ? (
              <>
                <li>
                  Worked at <span className="text-zinc-200">PagSeguro </span>{' '}
                  and <span className="text-zinc-200">Banco Sofisa</span>;
                </li>
                <li> Development and maintenance of applications; </li>
                <li>
                  Define the architecture of applications, choosing the
                  appropriate technologies and tools for the project.
                </li>
                <li>
                  Establish and promote coding standards, best practices, and
                  guidelines for the development team.
                </li>
                <li>
                  Analyze and optimize application performance, ensuring they
                  are fast and responsive.
                </li>
                <li>CI/CD;</li>
                <li>REST API consumption;</li>
              </>
            ) : (
              <>
                <li>
                  Atuação na <span className="text-zinc-200">PagSeguro </span> e{' '}
                  <span className="text-zinc-200">Banco Sofisa</span>;
                </li>
                <li> Desenvolvimento e manutenção de aplicações; </li>
                <li>
                  Definir a arquitetura das aplicações, escolhendo as
                  tecnologias e ferramentas adequadas para o projeto.
                </li>
                <li>
                  Estabelecer e promover padrões de codificação, melhores
                  práticas e diretrizes para a equipe de desenvolvimento.
                </li>
                <li>
                  Analisar e otimizar a performance das aplicações, garantindo
                  que sejam rápidas e responsivas.
                </li>
                <li>CI/CD;</li>
                <li>Consumo de API REST;</li>
              </>
            )}
          </ul>
          <p className="mt-4 px-4 text-base font-light text-zinc-300 md:px-0">
            {language === 'en'
              ? 'wBrain Agile People Mar 2022 - Present - São Paulo, Brazil'
              : 'wBrain Agile People mar de 2022 - o momento - São Paulo, Brasil'}
          </p>
        </div>

        <hr className="my-6 border-t border-gray-500" />

        <div className="mb-4 mt-6 px-4">
          <p className="mb-4 px-4 text-base font-normal text-zinc-200 md:px-0">
            {language === 'en'
              ? 'Front End Developer'
              : 'Desenvolvedor Frontend'}
          </p>
          <ul className="px-4 text-base font-light text-zinc-400 md:px-0">
            {language === 'en' ? (
              <>
                <li> Development and maintenance of applications; </li>
                <li>
                  Define the architecture of applications, choosing the
                  appropriate technologies and tools for the project.
                </li>
                <li>
                  Establish and promote coding standards, best practices, and
                  guidelines for the development team.
                </li>
                <li>Working with the following technologies:</li>
                <li>React</li>
                <li>React Native</li>
                <li>Nest.js</li>
                <li>Typescript</li>
                <li>Node.js</li>
                <li>Graphql</li>
                <li>PostgreSQL</li>
              </>
            ) : (
              <>
                <li> Desenvolvimento e manutenção de aplicações; </li>
                <li>
                  Definir a arquitetura das aplicações, escolhendo as
                  tecnologias e ferramentas adequadas para o projeto.
                </li>
                <li>
                  Estabelecer e promover padrões de codificação, melhores
                  práticas e diretrizes para a equipe de desenvolvimento.
                </li>
                <li>Trabalhando com as seguintes tecnologias:</li>
                <li>React</li>
                <li>React Native</li>
                <li>Nest.js</li>
                <li>Typescript</li>
                <li>Node.js</li>
                <li>Graphql</li>
                <li>PostgreSQL</li>
              </>
            )}
          </ul>
          <p className="mt-4 px-4 text-base font-light text-zinc-300 md:px-0">
            {language === 'en'
              ? 'Folha Dirigida Oct 2021 - Mar 2022 - Rio de Janeiro, Brazil'
              : 'Folha Dirigida out de 2021 - mar de 2022 - Rio de Janeiro, Brasil'}
          </p>
        </div>
        <hr className="my-6 border-t border-gray-500" />

        <div className="mb-4 mt-6 px-4">
          <p className="mb-4 px-4 text-base font-normal text-zinc-200 md:px-0">
            {language === 'en' ? 'Web Developer' : 'Desenvolvedor da web'}
          </p>
          <ul className="px-4 text-base font-light text-zinc-400 md:px-0">
            {language === 'en' ? (
              <>
                <li>
                  {' '}
                  Creation of applications with the following technologies:{' '}
                </li>
                <li>HTML, CSS, JavaScript</li>
                <li>React</li>
                <li>React Native</li>
                <li>Nunjucks</li>
                <li>Node.js</li>
              </>
            ) : (
              <>
                <li> Criação de aplicações com as seguintes tecnologias: </li>
                <li>HTML, CSS, JavaScript</li>
                <li>React</li>
                <li>React Native</li>
                <li>Nunjucks</li>
                <li>Node.js</li>
              </>
            )}
          </ul>
          <p className="mt-4 px-4 text-base font-light text-zinc-300 md:px-0">
            {language === 'en'
              ? 'Freelancer Jan 2017 - Nov 2020 - São Paulo, Brazil'
              : 'Autônomo · Freelance jan de 2017 - nov de 2020 - São Paulo, Brasil'}
          </p>
        </div>
      </div>
    </section>
  )
}
