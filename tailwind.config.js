/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      minMd: { min: "767px" },
      // => @media (max-width: 767px) { ... }
    },
    extend: {
      colors: {
        blue: "#14b8a6",
        "blue-hover": "#0f766e",
      },
      spacing: {
        "height-header": "60px",
      },
    },
    fontSize: {
      sm: "0.7rem",
      sm1: "0.8rem",
      lg: "0.9rem",
      lg1: "0.95rem",
      base: "1rem",
      xl: "1.2rem",
      "2xl": "1.3rem",
      "3xl": "1.4rem",
      "4xl": "1.5rem",
    },
  },
};
