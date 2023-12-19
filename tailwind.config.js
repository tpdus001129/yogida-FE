import { HEADER_HEIGHT, MOBILE_MIN_WIDTH, NAVBAR_HEIGHT } from './src/constants';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#589BF7',
        secondary: '#FFDB5F',
        red: '#FB6363',
        black: '#111111',
        white: '#FFFFFF',
        input: '#F2F4F8',
        kakaoyellow: '#F2E42D',

        gray: {
          1: '#606060',
          2: '#AFAFAF',
          3: '#D9D9D9',
          4: '#E8E8E8',
        },
      },
      width: {
        mobile: `${MOBILE_MIN_WIDTH}px`,
      },
      height: {
        header: HEADER_HEIGHT,
        navbar: NAVBAR_HEIGHT,
      },
      margin: {
        header: HEADER_HEIGHT,
      },
    },
  },
  plugins: [],
};
