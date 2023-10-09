import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,png,jpg}",
    "./src/**/*.{png,jpg}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2657a0",
        secondary: "#F57D8F",
        tertiary: "#8DA4C7",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   "hero-bg": "url('/public/herobg.png')",
      // },
    },
  },
  plugins: [],
};

export default config;
