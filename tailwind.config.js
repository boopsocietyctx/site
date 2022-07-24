/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.html",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        serif: [`'Teko'`, ...fontFamily.serif],
      },
      colors: {
        background: "#171923",
        secondary: "#004aad",
      },
      maxWidth: {
        "long-prose": "90ch",
        container: "120ch",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
