/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {},
    colors: {
      lightc: "#ffffff",
      darkc: "#000000",
      dark: "#cadeef",
      lightgray: "#f0f4f8",
      lightpink: "#65000b",
      darkpink: "#65000b",
      gray: "#727272",
      silver: "#C0C0C0",
      pBlue: "#96DED1",
      cBlue: "#4B61D1",
    },
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      faunaOne: ["Fauna One", "serif"],
      cinzel: ["Cinzel", "serif"],
    },
  },
  plugins: [],
};
