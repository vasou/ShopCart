/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      sm: [
        "0.875rem",
        {
          lineHeight: "1.375rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "1.625rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      "2xl": [
        "1.375rem",
        {
          lineHeight: "1.875rem",
        },
      ],
      "3xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "4xl": [
        "1.625rem",
        {
          lineHeight: "2.125rem",
        },
      ],
      "5xl": [
        "1.75rem",
        {
          lineHeight: "2.25rem",
        },
      ],
      "6xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "7xl": [
        "2.25rem",
        {
          lineHeight: "2.875rem",
        },
      ],
      "8xl": [
        "2.5rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "9xl": [
        "2.75rem",
        {
          lineHeight: "3.375rem",
        },
      ],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
    },
    maxWidth: {
      sm: "400px",
      md: "720px",
      base: "1100px",
      lg: "1400px",
    },
    screens: {
      max_3xl: { max: "1920px" },
      max_2xl: { max: "1200px" },
      max_xl: { max: "1100px" },
      max_lg: { max: "992px" },
      max_md: { max: "768px" },
      max_sm: { max: "639px" },
      max_s: { max: "530px" },
      max_xs: { max: "420px" },
    },
    borderRadius: {
      none: "0",
      sm: "10px",
      md: "15px",
      DEFAULT: "0",
      lg: "20px",
      full: "9999px",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
};
