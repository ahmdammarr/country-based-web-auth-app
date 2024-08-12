/** @type {import('tailwindcss').Config} */
import { COLORS, pxToRem } from "./src/utils/px-to-rem";
import { COLORS, } from "./src/enums/colors";
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
  
      spacing: {
       
        490: pxToRem(490),
        400: pxToRem(400),
        450: pxToRem(450),
        250: pxToRem(250),
        300: pxToRem(300),
      },
      borderRadius: {
      
        30: pxToRem(30),
      },
      fontSize: {
        xs: pxToRem(12),
        sm: pxToRem(14),
        md: pxToRem(16),
        lg: pxToRem(26),
        xl: pxToRem(36),
        '2xl': pxToRem(50),
        '3xl': pxToRem(74),
      },
      colors: COLORS,
      gridTemplateColumns:{
        'filters': `repeat(1, 1fr) ${pxToRem(175)}`,
      }
    },
  },
  plugins: [],
};
