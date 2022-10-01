import {Box, Text} from 'dracula-ui'

export function IntroInfo() {
  return (
    <div className={'mt-4'}>
      <Text color="white" weight="semibold" size="md">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Hi, I'm {''}
        <Text  color={'pinkPurple'} weight={'bold'} size={'lg'}>
          Felipe Ribeiro
        </Text>
      </Text>
      <Box>
      <Text color="white" weight="normal" size="sm">
        Front-end developer with 5 years of experience. Currently I have worked
        with the following technologies: React, NextJS, Styled Components,
        Tailwind CSS, Zustand, Immer, Axios, Jest, Testing Library
      </Text>
      </Box>
    </div>
  );
}
