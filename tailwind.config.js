/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace"
    },
    // to add new colors, place them in the extend folder
    extend: {
      colors: {
        pizza: "#123456",
      },
      fontSize: {
        huge: ['80rem', {lineHeight: '1'}],
      },
      height: {
        screen : '100dvh',
      }
    },
  },
  plugins: [],
}

