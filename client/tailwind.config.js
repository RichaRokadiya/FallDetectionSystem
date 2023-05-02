/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: '#131313',
        grey: '#f2f2f2',
        purple: '#9ea4fe',
        green: '#a0e79f',
        yellow: '#f4f4d7',
        white:'#ffffff'
      },
      fontFamily: {
        main: ["IBM Plex Sans", "sans-serif"],
        ourfont: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
}

