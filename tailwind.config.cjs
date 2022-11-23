const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: colors.sky,
      secondary: colors.violet,
      neutral: colors.gray,
      success: colors.emerald,
      warning: colors.yellow,
      danger: colors.rose,
      info: colors.sky,
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
