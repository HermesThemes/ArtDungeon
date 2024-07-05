/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  
  darkMode: "class",
  plugins: [nextui({
    "themes": {
        "dark": {
          "colors": {
            "primary": "#14b8a6"
          }
        },
        "light": {
          "colors": {
            "primary": "#14b8a6"
          }
        }
      },
  })],
};
