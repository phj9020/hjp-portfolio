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
          DEFAULT: '#00f260',
        },
        blue: {
          DEFAULT: "#55a4fa",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
