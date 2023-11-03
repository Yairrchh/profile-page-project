/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#02090c',
        'secondary': '#035d8a',
        'three':  '#3d0472c5',
        'accent': '#020b0f',
      },
        gradientColorStopPosition: {
          0: '0%',
          33: '33%',
          66: '66%',
          100: '100%'
        },
      gridTemplateColumns: {
        'div' : 'repeat(auto-fit, minmax(260px, 1fr))'
      },
      height: {
        '128': '28rem',
      }
    },
  },
  plugins: [],
}

