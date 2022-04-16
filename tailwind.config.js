module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
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
  },
  plugins: [require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['rounded'],
  },
};
