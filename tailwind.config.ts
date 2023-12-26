import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "main-dark-blue": "#364F6B",
        "main-light-blue": "#3FC1C9",
        "main-dirty-white": "#F5F5F5",
        "main-light-red": "#FC5185",
        "main-accent-orange": "#FFA07A",
      },
    },
  },
  plugins: [require('daisyui')],
};

config.daisyui = {
  themes: [
    {
      mytheme: {
        primary: '#3FC1C9',
        secondary: '#FC5185',
        accent: '#FFA07A',
        neutral: '#364F6B',
        'base-100': '#F5F5F5',
      },
    },
  ],
};

export default config;
