const tokens = require("@chanzuckerberg/eds-tokens/json/css-variables-nested.json");
module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      ...tokens.eds.color,
    },
    fontFamily: {
      arimo: "Arimo, sans-serif",
    },
    fontSize: tokens.legacy.size.font,
    extend: {
      lineHeight: tokens.legacy.size["line-height"],
    },
  },
  variants: {},
  plugins: [],
};
