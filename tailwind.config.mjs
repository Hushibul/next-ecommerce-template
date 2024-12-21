/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: {
          light: '#ffffff', // Clean white for light themes
          dark: '#19130d', // Deep coffee brown for dark themes
          primary: '#92614c', // Warm cocoa for primary accents
          secondary: '#d8a07e', // Soft peachy brown for secondary elements
          muted: '#f5eae3', // Light cream for subtle background sections
        },
        textColor: {
          primary: '#333333', // Dark gray for high contrast text
          secondary: '#6b5544', // Muted brown for secondary text
          accent: '#92614c', // Matching primary for accent text
          muted: '#a3978c', // Neutral gray-brown for muted text
        },
        accentColor: {
          primary: '#d8a07e', // Peachy brown for buttons and highlights
          secondary: '#92614c', // Cocoa for secondary accents
          danger: '#e74c3c', // Bright red for errors or warnings
          success: '#2ecc71', // Fresh green for success messages
          info: '#3498db', // Soft blue for informational messages
          warning: '#f1c40f', // Vibrant yellow for warnings
        },
        borderColor: {
          light: '#eaeaea', // Subtle border for light themes
          dark: '#3d2b26', // Stronger border for dark themes
          primary: '#92614c', // Matching primary accent
        },
        shadowColor: {
          light: 'rgba(0, 0, 0, 0.1)', // Soft shadow for light themes
          dark: 'rgba(0, 0, 0, 0.3)', // Deeper shadow for dark themes
          accent: 'rgba(146, 97, 76, 0.5)', // Highlight shadows in the accent color
        },
      },

      container: {
        center: true,
        padding: '16px',
      },
    },
  },
  plugins: [],
};
