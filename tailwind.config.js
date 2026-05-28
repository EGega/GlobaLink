/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#1f4e79",
        accent: "#f59e0b",
      },
    },
  },
  plugins: [],
};
