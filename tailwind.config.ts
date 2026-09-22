import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        paper: "var(--paper)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        blue: "var(--blue)",
        violet: "var(--violet)",
        coral: "var(--coral)",
        mint: "var(--mint)",
        cyan: "var(--cyan)",
        dark: "var(--dark)",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-dm-mono)", "DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
