/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
const logoColors = [
  "#549bdb",
  "#142444",
  "#c5c9d0",
  "#6d7688",
  "#4982ba",
  "#3c6897",
  "#3e4a62",
  "#2c4e77",
  "#254469",
];

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#4e72b8",
            secondary: "#534da0",
          },
        },
        dark: {
          colors: {
            primary: "#9353d3",
          },
        },
      },
    }),
  ],
};
