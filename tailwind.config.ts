import type { Config } from "tailwindcss";

// ACCESSIBILITY RULES — apply to all new pages
// Minimum font size: 14px (text-sm) for secondary
// Minimum font size: 16px (text-base) for body prose
// Eyebrow labels: minimum 13px, uppercase, tracked
// H2: 26px | H3: 18px | H1: 44px
// Gold on dark backgrounds: #E6B85C (brand.goldDark)
// Gold on light backgrounds: #B8821A (brand.goldLight)
// No opacity-based text on dark cards
// Use solid hex values: #F1F5F9 / #D1D5DB / #9CA3AF

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
        brand: {
          goldDark: "#E6B85C",
          goldLight: "#B8821A",
        },
        eucalyptus: {
          DEFAULT: "#3C6E5E",
          light: "#EAF3EE",
          dark: "#2A5044",
        },
        offwhite: "#F7F5F0",
        slate: {
          DEFAULT: "#33404E",
          light: "#94A3B8",
        },
        "text-dark": "#0F1923",
        "text-body": "#3D4451",
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
