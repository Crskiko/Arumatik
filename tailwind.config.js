/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Poppins"']
      },
      colors: {
        text: '#303030',
        blue: '#1A4F8E',
        beige: '#FDF7EB'
      }
    },
  },
  plugins: [],
}

