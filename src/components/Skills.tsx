import { ProgressiveBar } from './ProgressiveBar/ProgressiveBar';
import { Card, Heading, Text } from 'dracula-ui';

export function Skills() {
  return (
    <div className={'px-10 mb-10'}>
      <Card color="yellowPink" p="sm">
        <Heading size={'lg'} color={'pink'}>
          Skills
        </Heading>
        <Text color="black">React</Text>
        <ProgressiveBar width={32} percent={3.5} widthLG={30} />
        <Text color="black">Next</Text>
        <ProgressiveBar width={100} percent={4} widthLG={100} />
        <Text color="black">Styled Components</Text>
        <ProgressiveBar width={100} percent={4.4} widthLG={100} />
        <Text color="black">Tailwind</Text>
        <ProgressiveBar width={100} percent={4.6} widthLG={100} />
        <Text color="black">Zustand</Text>
        <ProgressiveBar width={100} percent={4.6} widthLG={100} />
        <Text color="black">Jest</Text>
        <ProgressiveBar width={100} percent={4.4} widthLG={100} />
      </Card>
    </div>
  );
}
