/** @type {import('tailwindcss').Config} */
import {colors} from "tailwindcss/colors.js"

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: colors.red
      },
    },
  },
  plugins: [],
};
