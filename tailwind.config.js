module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0984e3',
        secondary: '#1e272e',
        terciary: '#4C566A',
        'theme-light': '#182C61',
        teal: '#2dd4bf',
      },
      fontFamily: {
        uimono: ['Roboto Mono,ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
