/** @type {import('tailwindcss').Config} */
const {
  fontFamily
} = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.html",
  ],
  theme: {
    darkMode: 'class',
    container: {
      center: true,
    },
    fontFamily: {
      serif: [`'Teko'`, ...fontFamily.serif]
    },
    extend: {
      colors: {
        background: '#171923',
        secondary: '#004aad'
      },
      maxWidth: {
        'long-prose': '90ch',
        container: '120ch'
      }
    },
  },
  plugins: [],
}
