import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF3B57",
        background: "#FAFAFC",
        card: "#FFFFFF",
        border: "#ECECEC",
      },
      borderRadius: {
        xl: "20px",
      },
      boxShadow: {
        card: "0 10px 35px rgba(0,0,0,.05)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;