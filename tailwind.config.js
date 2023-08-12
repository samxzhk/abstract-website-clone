/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'monarchist':'#4C5FD5',
        'quartz':"#dadbf1",
      },
      fontFamily:
      {
        'work-sans': ["'Work Sans'", "sans-serif"]
      },
      maxWidth: {
        'container-max-width': '1344px'
      }
    },
  },
  plugins: [],
}
