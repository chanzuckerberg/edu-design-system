const tokens = require("@chanzuckerberg/czedi-kit-tokens/json/css-variables-nested.json");
module.exports = {
  theme: {
    colors: tokens.eds.color,
    fontFamily: {
      arimo: "Arimo, sans-serif",
    },
    fontSize: tokens.eds.size.font,
    lineHeight: tokens.eds.size["line-height"],
    extend: {},
  },
  variants: {},
  plugins: [],
};
