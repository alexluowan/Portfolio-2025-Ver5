import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        neuehaasunica: ['var(--font-neuehaasunica)', 'sans-serif'],
        offbit: ['var(--font-offbit)', 'sans-serif'],
        favoritmono: ['var(--font-favoritmono)', 'monospace'],
      },
      fontSize: {
        h4mono: '0.875rem',
        h4monomobile: '0.625rem',
        h1: '2.25rem',
        quote: '1.5',
      },

    },
  },
  plugins: [],
} satisfies Config;
