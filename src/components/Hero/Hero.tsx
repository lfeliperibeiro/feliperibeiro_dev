import { Repositories } from '../Repositories/Repositories';
import { Skills } from '../Skills';
import { Social } from '../Social/Social';
import { IntroInfo } from '../IntroInfo/IntroInfo';
import { Avatar, Box, Heading } from 'dracula-ui';
import profileImg from '../../assets/profile.png';
export const Hero = () => {
  return (
    <Box color="blackSecondary">
      <div className={'flex mt-8 flex-col m-2 lg:p-10 items-center'}>
        <div className={'items-center'}>
          <Avatar
            title="Felipe RIbeiro"
            src={profileImg.src}
            height={100}
            width={100}
            borderVariant="large"
          />
        </div>

        <IntroInfo />
        <Social />
        <div className={'mb-4'}>
          <div className={'text-center mb-4'}>
            <Heading size="lg" color="pink">
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
