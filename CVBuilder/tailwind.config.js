/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'selector',
  theme: {
    colors:{
      "default-primary": "rgb(55,56,61)",
      "default-secondary": "rgb(238,231,225)",
      slate: colors.slate,
      gray: colors.gray,
      white: colors.white,
      black: colors.black
    },
    extend: {
      aspectRatio:{
        "a4": "210 / 297"
      },
    },
    screens:{
      "mobile-s": "320px",
      "mobile-m": "375px",
      "mobile-l": "425px",
      "tablet": "768px",
      "laptop": "1024px"
    }
  },
  plugins: [],
}

