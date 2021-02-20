const tokens = require("@chanzuckerberg/eds-tokens/json/css-variables-nested.json");
module.exports = {
  theme: {
    colors: tokens.eds.color,
    fontFamily: {
      arimo: "Arimo, sans-serif",
    },
    fontSize: tokens.legacy.size.font,
    lineHeight: tokens.legacy.size["line-height"],
    extend: {},
  },
  variants: {},
  plugins: [],
};
