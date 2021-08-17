module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
          'nanum': ['Nanum Pen Script']
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#67B26F',
        },
        blue: {
          DEFAULT: "#4ca2cd",
        },
        black: {
          DEFAULT : "#ffffff",
        },
        grayish: {
          DEFAULT : "#414345",
        },
        menuActive: {
          DEFAULT : "#65ae99",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
