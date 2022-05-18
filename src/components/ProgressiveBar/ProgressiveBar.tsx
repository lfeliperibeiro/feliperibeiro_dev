import * as React from 'react';

interface Props {
  width: number;
  widthLG: number;
  percent: number;
}

export const ProgressiveBar = ({ width, percent, widthLG }: Props) => {
  const value = percent * width;

  return (
    <div className={`bg-gray100 rounded ${width} lg:${widthLG}`}>
      <div
        className={`h-3 rounded bg-green transition delay-75 ease-in duration-300 w-${value}`}
      />
    </div>
  );
};