/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          red: 'hsl(0, 78%, 62%)',
          cyan: 'hsl(180, 62%, 55%)',
          orange: 'hsl(34, 97%, 64%)',
          blue: 'hsl(212, 86%, 64%)'
        },

        neutral: {
           Very_Dark_Blue: 'hsl(234, 12%, 34%)',
           Grayish_Blue: 'hsl(229, 6%, 66%)',
           Very_Light_Gray: 'hsl(0, 0%, 98%)'
        },

      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },

      fontSize: {
        text: '15px'
      }
    },
  },
  plugins: [],
}