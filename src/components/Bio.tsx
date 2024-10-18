interface BioProps {
  language: string;
}

export function Bio({ language }: BioProps) {
  return (
    <div className="mt-8 max-w-xl">
      <span className="pl-8 text-xl text-zinc-50 sm:pl-0">Bio</span>

      <blockquote className="mt-8 border-l-4 border-solid border-l-gray-700 pl-5">
        <p className="px-4 text-base font-light text-zinc-400 md:px-0">
          {language === 'en' ? (
            <>
              At wBrain Agile People, I drive projects as a Senior Frontend
              Engineer, applying my Marketing knowledge acquired at Universidade
              Paulista. My expertise encompasses React, Next.js, and Typescript,
              which are fundamental in creating web solutions that optimize user
              experience. With certifications from Rocketseat, I have enhanced
              my skills in CI/CD, significantly contributing to interface
              innovation and actively collaborating to align business strategies
              with technology. Our team values collaboration and the constant
              pursuit of improvements in development practices.
            </>
          ) : (
            <>
              Na wBrain Agile People, impulsiono projetos como Engenheiro
              Frontend Sênior, aplicando meu conhecimento em Marketing adquirido
              na Universidade Paulista. Minha expertise abrange React, Next.js e
              Typescript, fundamentais na criação de soluções web que otimizam a
              experiência do usuário. Com as certificações da Rocketseat,
              aprimorei minha habilidade em CI/CD, contribuindo
              significativamente para a inovação de interfaces e colaborando
              ativamente para alinhar estratégias de negócios com a tecnologia.
              Nossa equipe valoriza a colaboração e a busca constante por
              melhorias nas práticas de desenvolvimento.
            </>
          )}
        </p>
      </blockquote>
    </div>
  );
}
