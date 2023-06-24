/** @type {import('tailwindcss').Config} */
 module.exports = {
    
     content: ["./tailwind/*.{html,js}","./tailwind-2/*.{html,js}","*.{html,js}"],
    //  content: ["*.html","*.js"],
    darkMode: 'class',
  theme: {
    container: {
      center:true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
    }, 
  },
    extend: {
      fontFamily: {
        open:['Open Sans', 'sans-serif'],
        gemunu:['Gemunu Libre', 'sans-serif'],
      },
      colors:{
        'gega-red': '#BC1A45',
        'gega-melon': '#FFD369',
        'gega-grey': '#DDDDDD',
        'gega-white': '#F7F7F7',
      },
      spacing:{
        128:'32rem',
      },
    },
  },
  plugins: [],
}

