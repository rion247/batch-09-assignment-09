/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif', // Adds a new `font-poppins` class
        'playfair-display': 'Playfair Display, sans-serif', // Adds a new `font-playfair-display` class
        'open-sans': 'Open Sans, sans-serif', // Adds a new `font-open Sans` class
      }
    },
  },
  plugins: [require("daisyui")],
}