import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#16302B",
          dark: "#03110D",
          light: "#1E4A42",
        },
        secondary: {
          DEFAULT: "#A38560",
          dark: "#8A7050",
          light: "#C4A97D",
        },
        accent: {
          DEFAULT: "#390517",
          light: "#5C1A2E",
        },
        background: "#E0E0E0",
        surface: "#FFFFFF",
        text: {
          primary: "#03110D",
          secondary: "#5A5A5A",
        },
      },
      screens: {
        narrow: "600px",
        medium: "900px",
        wide: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
