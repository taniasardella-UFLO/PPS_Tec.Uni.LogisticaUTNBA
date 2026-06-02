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
        ink: "#17202a",
        muted: "#5f6b7a",
        line: "#d9e2ea",
        paper: "#f8faf9",
        institution: "#135d66",
        action: "#bf6f2e",
        ok: "#1f7a4f",
        warn: "#a96012",
        danger: "#b42318",
      },
      boxShadow: {
        soft: "0 16px 40px rgba(23, 32, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
