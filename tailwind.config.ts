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
        /* Palette 1 — Graphite Base (surfaces) */
        background: "#0D1117",
        surface: {
          DEFAULT: "#181F2A",
          alt: "#1F2836",
          muted: "#252D3A",
          elevated: "#283040",
        },
        /* Palette 2 — Steel Slate (accent) */
        foreground: "#E4E6EA",
        primary: {
          DEFAULT: "#6E8FAD",
          dark: "#4F6F8C",
          light: "#91AEC8",
          muted: "#5A7A96",
        },
        /* Palette 3 — Stone Pearl (neutrals) */
        secondary: {
          DEFAULT: "#939EAB",
          light: "#B5BFC9",
          warm: "#B5A896",
        },
        accent: {
          DEFAULT: "#7A96B0",
          glow: "#2A3444",
          circuit: "#7A8796",
        },
        muted: "#707B88",
        border: {
          DEFAULT: "#2E3848",
          subtle: "rgba(147, 158, 171, 0.1)",
          strong: "rgba(110, 143, 173, 0.22)",
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
          "linear-gradient(135deg, #91AEC8 0%, #6E8FAD 50%, #4F6F8C 100%)",
        "brand-gradient-subtle":
          "linear-gradient(135deg, rgba(145,174,200,0.12) 0%, rgba(110,143,173,0.06) 100%)",
        "page-gradient":
          "radial-gradient(ellipse 120% 80% at 50% -10%, rgba(42,52,68,0.5) 0%, #121820 40%, #0D1117 100%)",
        "surface-gradient":
          "linear-gradient(165deg, rgba(40,48,64,0.95) 0%, rgba(24,31,42,0.98) 50%, rgba(13,17,23,1) 100%)",
      },
      boxShadow: {
        card: "0 1px 0 rgba(228,230,234,0.03) inset, 0 4px 24px rgba(0,0,0,0.32), 0 0 0 1px rgba(147,158,171,0.08)",
        "card-hover":
          "0 1px 0 rgba(228,230,234,0.05) inset, 0 12px 40px rgba(0,0,0,0.38), 0 0 0 1px rgba(110,143,173,0.14), 0 0 40px rgba(110,143,173,0.05)",
        profile: "0 8px 32px rgba(0,0,0,0.42), 0 0 0 1px rgba(147,158,171,0.1)",
        glow: "0 0 32px rgba(110,143,173,0.1)",
        nav: "0 4px 24px rgba(0,0,0,0.28), 0 0 0 1px rgba(147,158,171,0.06)",
        button: "0 2px 12px rgba(110,143,173,0.18), 0 1px 0 rgba(255,255,255,0.06) inset",
        "button-hover":
          "0 8px 28px rgba(110,143,173,0.22), 0 1px 0 rgba(255,255,255,0.08) inset",
      },
    },
  },
  plugins: [],
};

export default config;
