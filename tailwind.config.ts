import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./types/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#eef6ef",
          100: "#d8e9da",
          200: "#b7d1ba",
          300: "#8fb18f",
          400: "#6f956f",
          500: "#618764",
          600: "#4d6d50",
          700: "#3c5540",
          800: "#2d3f31",
          900: "#1A312C"
        }
      },
      boxShadow: {
        glow: "0 20px 80px rgba(26, 49, 44, 0.18)"
      },
      backgroundImage: {
        "fintech-grid":
          "radial-gradient(circle at 1px 1px, rgba(97, 135, 100, 0.16) 1px, transparent 0)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
