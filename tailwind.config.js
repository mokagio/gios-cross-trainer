const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // TODO: enable
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor'
      ....
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
