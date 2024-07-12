import type { Config } from 'tailwindcss';
const flowbite = require('flowbite-react/tailwind');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        site: {
          '0': '#797979',
          '1': '#FFEBEB',
          '2': '#FFB3B3',
          '3': '#E66C6C',
          '4': '#804747',
          '5': '#574343',
          f: '#FFFFFF',
        }
      },
      backgroundColor: {
        site:{
          '0': '#797979',
          '1': '#FFEBEB',
          '2': '#FFB3B3',
          '3': '#E66C6C',
          '4': '#804747',
          '5': '#574343',
          f: '#FFFFFF',
        }
      },
      width: {
        half: '50%',
        '420': '420px',
        '640': '640px',
        '1000': '1000px',
        '1200': '1200px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
