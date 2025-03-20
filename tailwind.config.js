/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#FF4B33",
      secondary: "#FF980E",
      dark: "#333333",
      light: "#D1D5DB",
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif'],
    },
    animation: {
      fadeIn: "fadeIn 1.5s ease-in-out forwards",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    },
  },
};
export const plugins = [];
export const safelist = [
  {
    pattern: /bg-(dark|primary|secondary)\/[0-9]+/,
  }
];
