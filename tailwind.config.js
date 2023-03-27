/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env commonjs */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,astro,html}"],
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
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
