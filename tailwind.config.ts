import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        blackPrimary: '#161513',
        blackSecondary: '#1C1C22',
        whitePrimary: '#F0F2F5',
        whiteSecondary: '#FFFFFF',
        customGradient:
          'linear-gradient(90deg, #B16CEA 14.06%, #FF5E69 44.79%, #FF8A56 71.87%, #FFA84B 100%)',
      },
      backgroundColor: {
        customGradient:
          'linear-gradient(90deg, #B16CEA 14.06%, #FF5E69 44.79%, #FF8A56 71.87%, #FFA84B 100%)',
      },
    },
  },
  plugins: [],
}
export default config
