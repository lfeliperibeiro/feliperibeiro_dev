import { Box, Heading, Paragraph } from 'dracula-ui';

export function IntroInfo() {
  return (
    <div className={'mt-4 items-center max-w-2xl flex flex-col'}>
      <div className={'flex items-center gap-2'}>
        <Heading color="white" as={'h1'} size="md">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Hi, I'm
        </Heading>
        <Heading color={'pinkPurple'} size={'xl'}>
          Felipe Ribeiro
        </Heading>
      </div>
      <Box>
        <Paragraph color="white" weight="normal" size="sm" align="center">
          Front-end engineer with 5 years of experience. Currently I have worked
          with the following technologies: React, NextJS, Styled Components,
          Tailwind CSS, Zustand, Immer, Axios, Jest, Testing Library
        </Paragraph>
      </Box>
    </div>
  );
}
