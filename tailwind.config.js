/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/img/hero-pattern.svg')",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
