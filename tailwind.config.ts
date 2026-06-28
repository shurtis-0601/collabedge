import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#030F23",
          deep: "#020A18",
          mid: "#0A2340",
        },
        gold: "#C6973F",
        offwhite: "#F7F5F0",
        slate: {
          DEFAULT: "#64748B",
          light: "#94A3B8",
        },
        "text-dark": "#0F1923",
        "text-body": "#1F2937",
        border: "#E2E8F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
      maxWidth: {
        container: "1000px",
      },
      boxShadow: {
        "gold-soft": "0 12px 40px -20px rgba(198,151,63,0.5)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        drawLine: {
          "0%": { width: "0px" },
          "100%": { width: "36px" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.4s ease-out forwards",
        "fade-up-slow": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.3s ease-out forwards",
        "draw-line": "drawLine 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
