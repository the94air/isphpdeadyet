const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      satoshi: ["Satoshi", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
