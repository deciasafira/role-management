const { icons } = require("react-icons");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        main: '#4893E6',
        white: '#FFFFFF'
      },
      fontfamily: {
        sans: ['Inter', 'Helvetica', 'Arial','sans-serif'],
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  variants: {
    extend: {},
  },
});
