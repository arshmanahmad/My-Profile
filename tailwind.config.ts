import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4f46e5",
          dark: "#4338ca",
          light: "#818cf8",
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        accent: {
          DEFAULT: "#06b6d4",
          dark: "#0891b2",
          light: "#67e8f9",
          50: "#ecfeff",
          100: "#cffafe",
        },
        surface: {
          DEFAULT: "#ffffff",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "float-1": "float1 8s ease-in-out infinite",
        "float-2": "float2 10s ease-in-out infinite",
        "float-3": "float3 7s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "status-pulse": "statusPulse 2s ease-in-out infinite",
      },
      keyframes: {
        float1: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "40%": { transform: "translateY(-14px) rotate(1.5deg)" },
          "70%": { transform: "translateY(-7px) rotate(-1deg)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "35%": { transform: "translateY(-18px) rotate(-1.5deg)" },
          "65%": { transform: "translateY(-9px) rotate(1deg)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-11px) rotate(2deg)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        statusPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(79,70,229,0.4)" },
          "50%": { boxShadow: "0 0 0 5px rgba(79,70,229,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
