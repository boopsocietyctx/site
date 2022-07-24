const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{html,css,md}": ["prettier --write"],
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, "prettier --write"],
};
