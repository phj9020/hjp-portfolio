module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      nanum: ["Nanum Pen Script"],
    },
    boxShadow: {
      "custom-light": "6px 8px 7px 3px rgba(0,0,0,0.41)",
      "custom-dark": "8px 8px 9px -1px rgba(0,0,0,0.32)",
    },
    maxHeight: {
      'container': '632px'
    },
    extend: {
      colors: {
        green: {
          DEFAULT: "#67B26F",
        },
        blue: {
          DEFAULT: "#4ca2cd",
        },
        black: {
          DEFAULT: "#000000",
        },
        grayish: {
          DEFAULT: "#414345",
        },
        lightgray: {
          DEFAULT: "#8D8684",
        },
        menuActive: {
          DEFAULT: "#65ae99",
        },
        menuActiveDark: {
          DEFAULT: "#EA9EA8",
        },
        midnightStart: {
          DEFAULT: "#232526",
        },
        midnightEnd: {
          DEFAULT: "#414345",
        },
        pinkyStart: {
          DEFAULT: "#556270",
        },
        pinkyEnd: {
          DEFAULT: "#FF6B6B",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
