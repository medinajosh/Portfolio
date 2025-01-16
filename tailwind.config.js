/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Custom blue for buttons or links
        secondary: "#6B7280", // Custom gray for text
        background: "#F9FAFB", // Light gray for backgrounds
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Use a clean font like Inter
      },
    },
  },
  plugins: [],
}