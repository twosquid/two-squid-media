/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom red colors here to match the CSS variables
        'red-primary': '#e50914',
        'red-dark': '#8b0000', // A darker shade for contrast
        'red-light': '#ff4d4d', // A lighter shade for accents
      }
    },
  },
  plugins: [],
}
