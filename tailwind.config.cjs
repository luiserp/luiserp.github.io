const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sxs: '18rem',
      },
      colors: {
        primary_dark_color_theme: colors.slate[800],
        secondary_dark_color_theme: colors.slate[700],
        ping_dark_color: colors.slate[400],
      },
    },
  },
  plugins: [],
}