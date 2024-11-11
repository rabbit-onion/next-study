/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        primary: 'red',
        secondary: 'blue',
        gray: {
          DEFAULT: '#333',
          5: '#999',
          10: '#eee',
          20: '#f5f5f5',
        },

        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontSize: {},
      fontFamily: {},
      // 원하는 변수 설정
    },
  },
  plugins: [],
};
