/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./index.html"],
  theme: {
      extend: {
        screens: {
          'sm-526': '526px'
        },
      },
  },
  plugins: [],
}
