module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        'gray-999': '#999',
        'gray-333': '#333',
        'gray-a1': '#A1A1A1',
        'gray-76': '#767676',
      },
      backgroundColor: {
        'gray-fb': '#fbfbfb',
        'theme-green': '#008080',
        'theme-navy-blue': '#252C34',
        'black-27': '#272727',
      },
      borderColor: {
        'gray-e9': '#e9e9e9',
        'gray-999': '#999',
        'gray-333': '#333',
        'theme-green': '#008080',
        'theme-light-blue': '#414f5a',
      },
      fontFamily: {
        'open-sans': '"Open Sans", Helvetica, Arial, sans-serif',
        lato: '"Lato", sans-serif',
      },
      width: {
        xl: '1230px',
      },
    },
  },
  variants: {},
  plugins: [],
};
