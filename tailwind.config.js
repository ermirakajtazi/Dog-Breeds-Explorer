/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textPrimary:'#FFFFFF',
        textColor: "#ADB7BE",
        bgPrimary:"#111827",
        bgSecondary: "#121212",
        bgOverview: "#0d0d0d",
        border:"#33353F",
        placeholderBg:'#9CA2A9',
        inputBg:"#18191E",
        primary:"#3b82f6"
      },
    },
  },
  plugins: [],
};
