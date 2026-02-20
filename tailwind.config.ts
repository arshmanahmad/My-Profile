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
          DEFAULT: "#00c8ff",
          dark: "#009acc",
          light: "#66d9ff",
          50: "#f0fbff",
          100: "#ccf4ff",
          200: "#99e9ff",
          300: "#5dd9ff",
          400: "#26c8ff",
          500: "#00c8ff",
          600: "#009acc",
          700: "#007ba3",
          800: "#005e7a",
          900: "#004a61",
        },
        secondary: {
          DEFAULT: "#7c3aed",
          dark: "#6d28d9",
          light: "#a78bfa",
        },
        navy: {
          950: "#020712",
          900: "#050d1a",
          800: "#080e24",
          700: "#0a1228",
          600: "#0d1a38",
          500: "#112248",
          400: "#1e3a6e",
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
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 200, 255, 0.25)" },
          "50%": { boxShadow: "0 0 45px rgba(0, 200, 255, 0.55)" },
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
