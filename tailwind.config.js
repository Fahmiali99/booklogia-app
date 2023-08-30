/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#0d6efd",
      secondary: "#6c757d",
      success: "#14c38e",
      info: "#0dcaf0",
      warning: "#feca57",
      danger: "#ff6363",
      light: "#f8f9fa",
      dark: "#212529",
      "primary-orange": "#ff6600",
    },
  },
  plugins: [require("flowbite/plugin")],
};
