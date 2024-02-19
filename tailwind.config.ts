import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "title": ['"DM Serif Display"', "serif"],
      "body": ["Source Sans Pro", "sans-serif"],
    },
    colors: {
      transparent: 'transparent',
      "black": "#010606",
      "lightBlack": "#333333",
      "brown-hover": "#e9be91",
      "brown-light": "#d7af84",
      "creme": "#ede6d9",
      "oliv": "#849f91",
      "hover": "#bcb8b8",
      "white": "#f7f4f2",
      "gray": "#808080",
    },
    extend: {
    },
  },
  plugins: [],
};
export default config;
