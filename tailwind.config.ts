import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-bg":      "#0F0A23",
        "brand-card":    "#1A113D",
        "brand-card2":   "#14103a",
        "brand-primary": "#7B61FF",
        "brand-light":   "#CACAFB",
        "brand-text":    "#EAEAF0",
        "brand-muted":   "#9898B0",
        "brand-footer":  "#0a0820",
      },
      fontFamily: {
        crimson: ["var(--font-crimson)", "Georgia", "serif"],
        inter:   ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "h2":      ["40px",   { lineHeight: "1.2",  fontWeight: "600" }],
        "h3":      ["32px",   { lineHeight: "1.2",  fontWeight: "700" }],
        "h4":      ["18px",   { lineHeight: "1.4",  fontWeight: "600" }],
        "body-lg": ["18px",   { lineHeight: "1.7" }],
        "body":    ["15px",   { lineHeight: "1.75" }],
        "label":   ["12px",   { lineHeight: "1.4",  letterSpacing: "0.15em" }],
      },
      borderRadius: {
        card:   "16px",
        pill:   "100px",
      },
      boxShadow: {
        "glow":    "0 0 48px rgba(123,97,255,0.28)",
        "glow-sm": "0 0 24px rgba(123,97,255,0.18)",
        "card":    "0 4px 40px rgba(0,0,0,0.4)",
      },
      backgroundImage: {
        "glow-primary": "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(123,97,255,0.3), transparent)",
      },
    },
  },
  plugins: [],
};
export default config;
