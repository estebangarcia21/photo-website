const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  darkMode: false,
  theme: {
    extend: { colors }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
