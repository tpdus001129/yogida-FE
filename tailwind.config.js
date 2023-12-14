import { HEADER_HEIGHT, NAVBAR_HEIGHT } from './src/constants';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#589BF7',
        secondary: '#FFDB5F',
        black: '#111111',
        darkgray: '#606060',
        gray: '#AFAFAF',
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
