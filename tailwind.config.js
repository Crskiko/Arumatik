/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        text: "#303030",
        blue: "#1A4F8E",
        beige: "#FDF7EB",
        black: "#303030",
        grey: "#CDCDCD",
      },
      boxShadow: {
        sm: "4px 4px 12px 0 rgba(0, 0, 0, 0.06)",
        md: "4px 4px 8px 0 rgba(0, 0, 0, 0.15)",
        lg: "4px 4px 8px 0 rgba(0, 0, 0, 0.20)",
        xl: "4px 4px 12px 0 rgba(0, 0, 0, 0.20)",
      },
      screens: {
        sm: "380px",
      },
      animation: {
        bounce1: "bounce 1.5s infinite 0s",
        bounce2: "bounce 1.5s infinite 0.3s",
        bounce3: "bounce 1.5s infinite 0.6s",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
