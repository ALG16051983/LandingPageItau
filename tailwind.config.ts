import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        img_bg_hero: "url('/assets/bg-hero.jpg')",
      },
      colors: {
        "primary-blue": "#106E80",
        "primary-orange": "#EC7000",
        "primary-gray": "#33303E",
        "second-gray": "#4E4859",
        "gray-phone": "#F4F4F4",
        "txt-gray": "#7A7789",
        "opacity-gray": "rgba(100, 80, 57, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
