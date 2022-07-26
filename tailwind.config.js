/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        '4xl':'1920px'
      },
      colors:{
        "fb-gray":"#F0F2F5",
        "fb-blue":"#1C74E4",
        "fb-dark-primary":"#050505",
        "fb-gray1":"#606770",
        "fb-gray2":"#EBEDF0"
      }
    },
  },
  plugins: [],
}

