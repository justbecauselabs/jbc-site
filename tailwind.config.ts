import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#ededed",
            a: {
              color: "#a855f7",
              "&:hover": {
                color: "#ec4899",
              },
            },
            h1: {
              color: "#ededed",
            },
            h2: {
              color: "#ededed",
            },
            h3: {
              color: "#ededed",
            },
            h4: {
              color: "#ededed",
            },
            strong: {
              color: "#ededed",
            },
            code: {
              color: "#ededed",
            },
            blockquote: {
              color: "#d1d5db",
              borderLeftColor: "#a855f7",
            },
            hr: {
              borderColor: "#374151",
            },
            "thead th": {
              color: "#ededed",
            },
            "tbody td": {
              color: "#ededed",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
export default config;