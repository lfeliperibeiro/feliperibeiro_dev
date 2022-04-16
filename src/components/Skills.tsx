import { ProgressiveBar } from './ProgressiveBar/ProgressiveBar';

export function Skills() {
  return (
    <div
      className={
        'bg-white flex flex-col lg:gap-4 gap-2 p-10 lg:p-20 lg:w-5/12 w-96 lg:mr-10  rounded shadow-lg shadow-black'
      }
    >
      <h1 className={'text-purple100 font-bold text-lg'}>Skills</h1>
      <p className={'text-pink500 font-bold text-md'}>React</p>
      <ProgressiveBar width={32} percent={3.5} widthLG={30} />
      <p className={'text-pink500 font-bold text-md'}>Next</p>
      <ProgressiveBar width={100} percent={4} widthLG={100} />
      <p className={'text-pink500 font-bold text-md'}>Styled Components</p>
      <ProgressiveBar width={100} percent={4.4} widthLG={100} />
      <p className={'text-pink500 font-bold text-md'}>Tailwind</p>
      <ProgressiveBar width={100} percent={4.6} widthLG={100} />
      <p className={'text-pink500 font-bold text-md'}>Zustand</p>
      <ProgressiveBar width={100} percent={4.6} widthLG={100} />
      <p className={'text-pink500 font-bold text-md'}>Jest</p>
      <ProgressiveBar width={100} percent={4.4} widthLG={100} />
    </div>
  );
}
