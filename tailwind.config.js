module.exports = 
{
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: 
  {
    extend:
     {
        colors:
        {
          primary: "#0984e3",
          secondary:"#2d3436"
        }
     },
  },
  variants: 
  {
    extend: {},
  },
  plugins: [],
}
