/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: '#fff',
        dark: '#222529',
        primary: '#0078f2',
        secondary: '#ee8379',
      },
      container: {
        center: true,
        padding: '16px',
      },
    },
  },
  plugins: [],
};
