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
        background: "#070A0F",
        surface: {
          DEFAULT: "#141B26",
          alt: "#1A1F26",
          muted: "#252D3A",
          elevated: "#1E2633",
        },
        foreground: "#F3F6FA",
        primary: {
          DEFAULT: "#7EC8E3",
          dark: "#5BA8C4",
          light: "#A8DCF0",
          muted: "#6BB3CC",
        },
        secondary: {
          DEFAULT: "#C7D0DC",
          light: "#E2E8F0",
          warm: "#F0C674",
        },
        accent: {
          DEFAULT: "#7EC8E3",
          glow: "#1E2A38",
          circuit: "#7A8796",
        },
        muted: "#93A0B0",
        border: {
          DEFAULT: "#2A3444",
          subtle: "rgba(147, 158, 171, 0.12)",
          strong: "rgba(126, 200, 227, 0.28)",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
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
          "linear-gradient(135deg, #A8DCF0 0%, #7EC8E3 50%, #5BA8C4 100%)",
        "brand-gradient-subtle":
          "linear-gradient(135deg, rgba(168,220,240,0.12) 0%, rgba(126,200,227,0.06) 100%)",
        "page-gradient":
          "radial-gradient(ellipse 100% 70% at 70% -10%, rgba(126,200,227,0.08) 0%, #070A0F 55%)",
        "surface-gradient":
          "linear-gradient(165deg, #1A1F26 0%, #141B26 55%, #0B0E14 100%)",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.28), 0 0 0 1px rgba(147,158,171,0.1)",
        "card-hover":
          "0 14px 36px rgba(0,0,0,0.38), 0 0 0 1px rgba(126,200,227,0.22)",
        profile:
          "0 8px 32px rgba(0,0,0,0.42), 0 0 0 1px rgba(126,200,227,0.2)",
        glow: "0 0 32px rgba(126,200,227,0.12)",
        nav: "0 4px 24px rgba(0,0,0,0.28), 0 0 0 1px rgba(147,158,171,0.08)",
        button: "0 4px 20px rgba(126,200,227,0.28)",
        "button-hover": "0 8px 28px rgba(126,200,227,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
