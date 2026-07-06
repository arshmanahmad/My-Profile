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
        background: "#141E2E",
        surface: {
          DEFAULT: "#1E2D42",
          alt: "#243548",
          muted: "#2A3A50",
          elevated: "#2F4158",
        },
        foreground: "#F4F8FC",
        primary: {
          DEFAULT: "#8EB8E8",
          dark: "#6E96BE",
          light: "#B8D4F0",
          muted: "#5A8AB8",
        },
        secondary: {
          DEFAULT: "#96AABE",
          light: "#C8D8E8",
        },
        accent: {
          DEFAULT: "#7EB0DC",
          glow: "#3D5068",
          circuit: "#8C9AB0",
        },
        muted: "#8A9BB0",
        border: {
          DEFAULT: "#344860",
          subtle: "rgba(140, 154, 176, 0.12)",
          strong: "rgba(142, 184, 232, 0.28)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "10px",
        DEFAULT: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
      },
      spacing: {
        section: "7rem",
        "section-sm": "5rem",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
        "premium-out": "cubic-bezier(0.33, 1, 0.68, 1)",
      },
      animation: {
        "gradient-shift": "gradientShift 8s ease infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.65" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "brand-gradient":
          "linear-gradient(135deg, #B8D4F0 0%, #8EB8E8 45%, #6E96BE 100%)",
        "brand-gradient-subtle":
          "linear-gradient(135deg, rgba(184,212,240,0.15) 0%, rgba(142,184,232,0.08) 100%)",
        "page-gradient":
          "radial-gradient(ellipse 120% 80% at 50% -10%, rgba(73,85,106,0.45) 0%, #1E2D42 38%, #141E2E 100%)",
        "surface-gradient":
          "linear-gradient(165deg, rgba(47,65,88,0.95) 0%, rgba(30,45,66,0.98) 50%, rgba(26,38,56,1) 100%)",
      },
      boxShadow: {
        card: "0 1px 0 rgba(200,216,232,0.04) inset, 0 4px 24px rgba(0,0,0,0.28), 0 0 0 1px rgba(140,154,176,0.1)",
        "card-hover":
          "0 1px 0 rgba(200,216,232,0.06) inset, 0 12px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(142,184,232,0.18), 0 0 48px rgba(142,184,232,0.06)",
        profile:
          "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(140,154,176,0.12)",
        glow: "0 0 32px rgba(142,184,232,0.12)",
        nav: "0 4px 24px rgba(0,0,0,0.25), 0 0 0 1px rgba(140,154,176,0.08)",
        button: "0 2px 12px rgba(142,184,232,0.2), 0 1px 0 rgba(255,255,255,0.1) inset",
        "button-hover":
          "0 8px 28px rgba(142,184,232,0.3), 0 1px 0 rgba(255,255,255,0.15) inset",
      },
    },
  },
  plugins: [],
};

export default config;
