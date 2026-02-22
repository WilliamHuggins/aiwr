import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        "surface-1": "rgb(var(--surface-1) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accent2: "rgb(var(--accent2) / <alpha-value>)",
        success: "rgb(var(--success) / <alpha-value>)",
        ink: "rgb(var(--text) / <alpha-value>)",
        glow: "rgb(var(--accent) / <alpha-value>)",
        mint: "rgb(var(--success) / <alpha-value>)",
        canvas: "rgb(var(--bg) / <alpha-value>)",
        canvasDark: "rgb(var(--bg) / <alpha-value>)",
      },
      fontFamily: {
        ui: ["var(--font-ui)", "sans-serif"],
        body: ["var(--font-body)", "serif"],
        display: ["var(--font-display)", "serif"],
      },
      boxShadow: {
        editorial: "0 1px 2px rgb(17 24 39 / 0.05), 0 8px 30px rgb(17 24 39 / 0.06)",
      },
    },
  },
  plugins: [typography],
};

export default config;
