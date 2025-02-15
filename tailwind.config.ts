import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      keyframes: {
        breath: {
          "0%, 100%": { transform: "scale(0.95)" },
          "50%": { transform: "scale(1.1)" },
        },
        glow: {
          "0%": {
            textShadow: "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3)",
          },
          "50%": {
            textShadow: "0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 1)",
          },
          "100%": {
            textShadow: "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3)",
          },
        },
      },
      animation: {
        breath: "breath 7s ease-in-out infinite",
        glow: "glow 1.5s ease-in-out infinite", // Glowing effect animation
      },
    },
  },
  plugins: [],
};

export default config;
