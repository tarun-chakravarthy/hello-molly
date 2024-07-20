import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Rufina", "serif"],
        robotoSlab: ["Roboto Slab", "serif"],
      },
      colors: {
        primary: "#224F34",
        secondary: "#F2F2F2",
        whiteColor: "#FFFFFF",
        backgroundAccent: "#C2EFD4",
        textColor: "#267D49",
        textDark: "#373737"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
export default config;
