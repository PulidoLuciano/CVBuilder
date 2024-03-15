/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'selector',
  theme: {
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

