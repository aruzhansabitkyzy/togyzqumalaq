/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  important: true,
  darkMode:'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
      dark1:'#041C32',
      dark2:'#ECB365',
      dark3:'#064663',
      dark4: '#04293A',
      light1:'#F8E4B7',
      light2:'#AA3A3A',
      light3:'#A4B787',
      light4: '#F8E4B7',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
