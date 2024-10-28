/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#D24C4C',
        background: '#D24C4d'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

