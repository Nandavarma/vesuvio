/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionProperty: {
        all: "all",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
