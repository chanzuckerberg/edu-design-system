const tokens = require("@chanzuckerberg/czedi-kit-tokens/json/variables-nested.json");

module.exports = {
  theme: {
    extend: {
      colors: tokens.eds.color,
    },
    font: tokens.eds.font,
  },
  variants: {},
  plugins: [],
};
