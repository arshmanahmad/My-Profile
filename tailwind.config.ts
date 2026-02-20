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
          DEFAULT: "#10d9a0",
          dark: "#0bb885",
          light: "#4de9b7",
          50: "#f0fdf8",
          100: "#ccfbee",
          200: "#99f6de",
          300: "#5eeec7",
          400: "#2ce0ac",
          500: "#10d9a0",
          600: "#0bb885",
          700: "#0c9169",
          800: "#0f7256",
          900: "#0f5e48",
        },
        secondary: {
          DEFAULT: "#f59e0b",
          dark: "#d97706",
          light: "#fbbf24",
        },
        ocean: {
          950: "#010806",
          900: "#020d0b",
          800: "#041a14",
          700: "#061f18",
          600: "#0a2e22",
          500: "#0f3d2e",
          400: "#1c7a5c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "float-1": "float1 8s ease-in-out infinite",
        "float-2": "float2 10s ease-in-out infinite",
        "float-3": "float3 7s ease-in-out infinite",
        "ray-drift": "rayDrift 16s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "particle": "particleRise linear infinite",
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
        rayDrift: {
          "0%, 100%": { opacity: "0.05", transform: "scaleX(1)" },
          "50%": { opacity: "0.1", transform: "scaleX(1.2)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(16, 217, 160, 0.25)" },
          "50%": { boxShadow: "0 0 45px rgba(16, 217, 160, 0.55)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        particleRise: {
          "0%": { transform: "translateY(100vh) translateX(0)", opacity: "0" },
          "8%": { opacity: "0.8" },
          "92%": { opacity: "0.6" },
          "100%": { transform: "translateY(-10vh) translateX(50px)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
