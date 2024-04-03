/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./styles/*.css", "./pages/*.html"],
  theme: {
    extend: {
      colors: {
        "secondary": "#4d4c6a"
      }
    },
  },
  plugins: [],
}

