import plugin from "tailwindcss/plugin";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      red: {
        0: "#C73B0F",
      },
      rose: {
        900: "#260F08",
        500: "#87635A",
        400: "#AD8A85",
        300: "#CAAFA7",
        100: "#F5EEEC",
        50: "#FCF8F6",
      },
      green: {
        100: "#1EA575",
      },
      black: "#000000",
      white: "#FFFFFF",
    },
    fontFamily: {
      "red-hat": ["Red Hat Text Variable", "sans-serif"],
    },
    spacing: {
      1100: "5.5rem",
      500: "2.5rem",
      400: "2rem",
      300: "1.5rem",
      200: "1rem",
      150: "0.75rem",
      100: "0.5rem",
      50: "0.25rem",
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config, theme }) {
      addUtilities({
        ".text-preset-1": {
          fontFamily: theme("fontFamily.red-hat"),
          fontSize: "2.5rem",
          lineHeight: "3rem",
          fontStyle: "normal",
          fontWeight: 700,
          color: theme("colors.rose-900"),
        },
        ".text-preset-2": {
          fontFamily: theme("fontFamily.red-hat"),
          fontSize: "1.5rem",
          lineHeight: "2rem",
          fontStyle: "normal",
          fontWeight: 700,
          color: theme("colors.rose-900"),
        },
        ".text-preset-3": {
          fontFamily: theme("fontFamily.red-hat"),
          fontSize: "1rem",
          lineHeight: "1.313rem",
          fontWeight: 600,
          fontStyle: "normal",
        },
        ".text-preset-4": {
          fontFamily: theme("fontFamily.red-hat"),
          fontSize: "0.875rem",
          lineHeight: "1.188rem",
          fontWeight: 400,
          fontStyle: "normal",
        },
        ".text-preset-4-bold": {
          fontFamily: theme("fontFamily.red-hat"),
          fontSize: "0.875rem",
          lineHeight: "1.188rem",
          fontWeight: 600,
          fontStyle: "normal",
        },
      });
    }),
  ],
};
