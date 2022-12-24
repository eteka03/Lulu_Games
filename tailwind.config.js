/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "minmax(0,.3fr), minmax(0, 3fr), minmax(0,.4fr) ",
      },
    },
  },
  plugins: [],
};
