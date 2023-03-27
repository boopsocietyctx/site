module.exports = {
  "*.{html,css,md}": ["prettier --write"],
  "*.{js,jsx,ts,tsx,astro}": ["eslint --fix", "prettier --write"],
};
