/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          text: '#3e3e3f',
          primary: '#ffcd00',
          secondary: '#5a5a5b',
          muted: '#7b7b7c'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}