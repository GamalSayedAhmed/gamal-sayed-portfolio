import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "var(--color-bg)",
        surface: "var(--color-surface)",
        elevated: "var(--color-elevated)",
        hairline: "var(--color-hairline)",
        ink: {
          DEFAULT: "var(--color-ink)",
          muted: "var(--color-ink-muted)",
          faint: "var(--color-ink-faint)",
        },
        blue: {
          signal: "var(--color-accent)",
          ice: "var(--color-accent-ice)",
          deep: "var(--color-accent-deep)",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(10,14,20,1) 90%)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(79,141,255,0.15), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(79,141,255,0.35)",
        card: "0 8px 30px -12px rgba(0,0,0,0.5)",
      },
      keyframes: {
        "flow-dash": {
          to: { strokeDashoffset: "-200" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "flow-dash": "flow-dash 3s linear infinite",
        "pulse-node": "pulse-node 2.4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
