/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        cursive: ['Pacifico', 'cursive'],
      },
      colors: {
        primary: '#854D3D',
        secondary: '#4A1E1B',
        brandDark: '#270C03',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
        },
      }
    },

  },
  plugins: [],
}