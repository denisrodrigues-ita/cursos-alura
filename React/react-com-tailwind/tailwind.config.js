/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#1a1a1a",
          200: "#333333",
        },
        alura: {
          100: "#167bf7",
          200: "#051933",
        },
      },
    },
  },
  plugins: [],
};
