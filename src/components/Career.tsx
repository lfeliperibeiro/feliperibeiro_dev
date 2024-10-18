interface CareerProps {
  language: string;
}

export function Career({ language }: CareerProps) {
  return (
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
                Worked at <span className="text-zinc-200">PagSeguro </span> and{' '}
                <span className="text-zinc-200">Banco Sofisa</span>;
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
                Analyze and optimize application performance, ensuring they are
                fast and responsive.
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
                Definir a arquitetura das aplicações, escolhendo as tecnologias
                e ferramentas adequadas para o projeto.
              </li>
              <li>
                Estabelecer e promover padrões de codificação, melhores práticas
                e diretrizes para a equipe de desenvolvimento.
              </li>
              <li>
                Analisar e otimizar a performance das aplicações, garantindo que
                sejam rápidas e responsivas.
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
          {language === 'en' ? 'Front End Developer' : 'Desenvolvedor Frontend'}
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
                Definir a arquitetura das aplicações, escolhendo as tecnologias
                e ferramentas adequadas para o projeto.
              </li>
              <li>
                Estabelecer e promover padrões de codificação, melhores práticas
                e diretrizes para a equipe de desenvolvimento.
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
  );
}
