/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        light: "#ffffff",
        primary: "#2779a7",
        secondary: "#ECD06F",
        highlight: "#FF9398",
      },
    },
  },
  plugins: [],
};
