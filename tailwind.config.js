module.exports = 
{
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: 
  {
    extend:
     {
        colors:
        {
          primary: "#0984e3",
          secondary:"#2E3440",
          terciary: "#4C566A", 
        }
     },
  },
  variants: 
  {
    extend: {},
  },
  plugins: [],
}
