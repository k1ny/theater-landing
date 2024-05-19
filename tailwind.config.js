/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./architecture.html",
    "./interior.html"

  ],
  theme: {
    extend: {
      fontFamily: {philosopher:["Philosopher"],ev2:["Ekaterina Velikaya Two"],cormorant:["Cormorant Garamond"],bergamasco:["Bergamasco Regular"]}
    },
  },
  plugins: [],
}