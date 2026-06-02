import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        muted: "#6b7280",
        line: "#d6dce5",
        paper: "#f7f8fa",
        institution: "#b0073b",
        action: "#d11245",
        ok: "#008f76",
        warn: "#b45309",
        danger: "#b42318",
      },
      boxShadow: {
        soft: "0 16px 36px rgba(17, 24, 39, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
