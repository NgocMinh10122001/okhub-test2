import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cus-neutrol": "#fff",
        "cus-perple": "#2F2E79",
        "cus-blue": "#165BB8",
        "cus-black": "#031938",
        "cus-bluer": "#011942",
        "cus-neutroler": "#333",
        "tim-than": "#2A2B6B",
        grey: "#646464",
        "grey-light": "rgba(35, 31, 32, 0.13)",
        f9: "#F9F9F9",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        "0.875": "0.875rem",
        "4.25": "4.25rem",
        "2.5": "2.5rem",
        "1.75": "1.75rem",
        "1.375": "1.375rem",
        "1.625": "1.625rem",
        "2.75": "2.75rem",
      },
      padding: {
        "6.2": "6.2rem",
        "1.125": "1.125rem",
        "2.125": "2.125rem",
        "0.875": "0.875rem",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      lineHeight: {
        "140": "140%",
        "150": "150%",
        "120": "120%",
        "130": "130%",
      },
      letterSpacing: {
        "0.00875": "-0.00875rem",
        "0.01": "-0.01rem",
        "0.0225": "0.0225rem",
        "0.065": "0.065rem",
        "0.0425": "0.0425rem",
      },
      width: {
        "2.5": "2.5rem",
        "6.125": "6.125rem",
        "5.5": "5.5rem",
        "2.125": "2.125rem",
      },
      height: {
        "2.5": "2.5rem",
        "3.125": "3.125rem",
        "53.125": "53.125rem",
        "2.125": "2.125rem",
      },
      borderColor: {
        "neutrol-b": "rgba(255, 255, 255, 0.30)",
      },
      borderRadius: {
        "1.5625": "1.5625rem",
        "2.875": "2.875rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
