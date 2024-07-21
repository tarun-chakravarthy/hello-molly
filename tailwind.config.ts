import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "textBlack-400/60": "0 1px 3px rgba(0, 0, 0, 1)",
      },
      fontFamily: {
        sans: [  "Poppins", "sans-serif"],
        serif: ["Rufina"],
        robotoSlab: ["Roboto Slab"],
      },
      colors: {
        primary: "#224F34",
        secondary: "#F2F2F2",
        whiteColor: "#FFFFFF",
        backgroundAccent: "#C2EFD4",
        textColor: "#267D49",
        textDark: "#373737",
        textBlack: "#454545",
        rectangleColor: "#A9D4BA",
        rectangleColor2: "#93B9A2",
        rectangleColor3: "#DDECE2",
        rectangleColor4: "#D9D9D9",
        cardText: "#454545",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
export default config;
