import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    colors:{
      "main-bg": "#0B1117",
      "primary-color": "#ff493b",
      "light-color" : "#fbfafa"
    },
    fontFamily: {
      sans: ['var(--font-manrope)']
    },
    },
  },
  plugins: [],
};
export default config;
