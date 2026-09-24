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
        primary: {
          DEFAULT: '#ED2025',
          50: '#fdf3f3',
          100: '#fce4e5',
          200: '#f8cacc',
          300: '#f3a2a6',
          400: '#eb6e74',
          500: '#e14349',
          600: '#ED2025',
          700: '#a71216',
          800: '#8b1317',
          900: '#73161a',
          950: '#3e0608',
        },
        secondary: {
          DEFAULT: '#2B4499',
          50: '#f2f4fb',
          100: '#e1e7f6',
          200: '#c7d5ee',
          300: '#9eb8e1',
          400: '#6f95d1',
          500: '#4d75c0',
          600: '#3a5ba8',
          700: '#2B4499',
          800: '#2a3a7b',
          900: '#253361',
          950: '#161e3d',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
