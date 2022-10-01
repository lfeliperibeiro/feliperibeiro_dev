import { Repositories } from '../Repositories/Repositories';
import { Skills } from '../Skills';
import { Social } from '../Social/Social';
import { IntroInfo } from '../IntroInfo/IntroInfo';
import {Avatar, Box, Heading} from "dracula-ui";

export const Hero = () => {
  return (
    <Box color="blackSecondary">
      <div className={'flex flex-col m-2 lg:p-10'}>
        <Avatar
          title="Felipe RIbeiro"
          src="https://github.com/lfeliperibeiro.png"
          height={100}
          width={100}
        />
        <IntroInfo />
        <Social />
        <div className={'mb-4'}>
          <div className={'ml-2 mb-4'}>
            <Heading size="lg" color="pink" >
              Repositories
            </Heading>
          </div>
          <Repositories />
        </div>
      </div>
      <Skills />
    </Box>
  );
};
