/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainCOlor: "#92bfe0",
        secColor: "#f6efdf",
      },
    },
  },
  plugins: [],
};
