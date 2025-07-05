/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'transform-shadow': 'transform, box-shadow',
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out',
      },
      boxShadow: {
        'lift': '0 10px 20px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}