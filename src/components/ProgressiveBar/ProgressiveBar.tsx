import * as React from 'react';
import { useEffect } from 'react';

interface Props {
  width: number;
  percent: number;
}

export const ProgressiveBar = ({ width, percent }: Props) => {
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    setValue(percent * width);
  }, [percent, width]);

  return (
    <div className={`bg-gray100 rounded ${width}`}>
      <div
        style={{ width: `${value}px` }}
        className={`h-3 rounded bg-green transition delay-75 ease-in duration-300`}
      />
    </div>
  );
};
