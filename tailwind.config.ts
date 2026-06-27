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
          DEFAULT: "#072638",
          deep: "#0A1628",
          mid: "#0d3a52",
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
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
