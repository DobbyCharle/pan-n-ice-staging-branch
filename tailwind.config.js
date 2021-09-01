const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: true,
    content: ["./**/*.liquid"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      "custom-pink": {
        DEFAULT: "#EF60A3"
      },
      "custom-purple": {
        DEFAULT: "#743D90"
      },
      "custom-blue": {
        DEFAULT: "#41B6E6"
      },
      "custom-green": {
        DEFAULT: "#000000"
      },
      "custom-red": {
        DEFAULT: "#FAFAFA"
      }
    },
    extend: {
      borderRadius: {
        "100%": "100%"
      },
      height: {
        "400px": "400px",
        "500px": "500px",
        "550px": "550px",
        "600px": "600px",
        "650px": "650px",
        "700px": "700px",
        "800px": "800px",
        "900px": "900px",
        "1000px": "1010px",
        "custom-100vh": "calc(100vh - 96px)",
        "30vh": "30vh",
        "80vh": "80vh",
        "150%": "150%"
      },
      flex: {
        "33": "0 0 33%",
        "46": "0 0 46%",
        "50": "0 0 50%",
        "80": "0 0 80%",
        "100": "0 0 100%"
      },
      fontSize: {
        "27px": "27px"
      },
      screens: {
        "custom-small-mobile": "370px",
        "custom-mobile": "440px",
        "custom-tablet": "767px",
        "custom-tablet-large": "950px"
      },
      width: {
        "430px": "430px",
        "500px": "500px",
        "650px": "650px",
        "800px": "800px",
        "150%": "150%"
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
