/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {},
    keyframes: {
      cloud: {
        '50%': {transform: 'translateX(50px)'}
      },
      sun:{
        '100%':{transform: 'rotate(360deg)'}
      },
      star:{
        to: {zoom:'10%',opacity:0},
        from: {zoom:'100%',opacity:1}
      }
  },
  plugins: [],
  }
}

