const tokens = require("@chanzuckerberg/czedi-kit-tokens/json/variables-nested.json");

module.exports = {
  theme: {
    extend: {
      colors: tokens.eds.color,
      fontSize: tokens.eds.font.size,
      lineHeight: tokens.eds.font.size,
    },
    fontFamily: {
      sans: tokens.eds.font.family,
    },
  },
  variants: {},
  plugins: [],
};
