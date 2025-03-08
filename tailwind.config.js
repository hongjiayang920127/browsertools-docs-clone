/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(22, 163, 74)',
        'primary-light': 'rgb(7, 201, 131)',
        'primary-dark': 'rgb(21, 128, 61)',
        'background-light': 'rgb(255, 255, 255)',
        'background-dark': 'rgb(9, 13, 13)',
        gray: {
          50: 'rgb(243, 247, 245)',
          100: 'rgb(238, 242, 240)',
          200: 'rgb(223, 227, 224)',
          300: 'rgb(206, 211, 208)',
          400: 'rgb(159, 163, 160)',
          500: 'rgb(112, 116, 114)',
          600: 'rgb(80, 84, 82)',
          700: 'rgb(63, 67, 64)',
          800: 'rgb(38, 42, 39)',
          900: 'rgb(23, 27, 25)',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};