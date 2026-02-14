/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d4af37", // Gold
        secondary: "#c41e3a", // Deep Red
        accent: "#f5f5f5", // Cream
        dark: "#1a1a1a", // Deep Black
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        cursive: ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}
