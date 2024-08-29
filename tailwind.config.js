const Bebas_Neue = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        sans: ['var(--font-inter)'],
        Bebas_Neue: ['var(--font-bebas-neue)'],
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translate(10px, 0px)" },
          "50%": { transform: "translate(-10px, 0px)" }
        }
      },
      
      animation: {
        wiggle: "wiggle 400ms ease-in"
      }
    },
  },
  plugins: [],
};

