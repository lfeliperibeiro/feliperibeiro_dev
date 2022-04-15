import { css } from 'styled-components';

export default {
  rem: (px: number) => {
    return px / 16 + 'rem';
  },
  colors: {
    white: '#f8f8f2',
    black: '#000',
    gray00: '#F5F5F5',
    gray100: '#DFDFDF',
    gray150: '#CDCDCD',
    gray200: '#B9B9B9',
    gray400: '#8F8F8F',
    gray500: '#7E7E7E',
    gray700: '#404040',
    green: '#50fa7b',
    pink500: '#ff79c6',
    purple100: '#bd93f9',
    background: '#282a36',
  },
  fonts: {
    headings: {
      large: (weight = 700) => css`
        font-weight: ${weight};
        font-size: ${18 / 16 + 'rem'};
        line-height: 21px;

        @media (min-width: 1024px) {
          font-size: ${30 / 16 + 'rem'};
          line-height: 35px;
        }
      `,
      medium: (weight = 700) => css`
        font-weight: ${weight};
        font-size: ${24 / 16 + 'rem'};
        line-height: 28px;
      `,
      small: (weight = 700) => css`
        font-weight: ${weight};
        font-size: ${18 / 16 + 'rem'};
        line-height: 20px;

        @media (min-width: 1024px) {
          font-size: ${20 / 16 + 'rem'};
          line-height: 21px;
        }
      `,
    },
  },
};
