/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-hover': '20px 20px 50px 0 rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
}