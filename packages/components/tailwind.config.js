const variableTokens = require("@chanzuckerberg/eds-tokens/json/css-variables-nested.json");
const staticTokens = require("@chanzuckerberg/eds-tokens/json/variables-nested.json");
module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      ...variableTokens.eds.color,
    },
    fontFamily: {
      arimo: "Arimo, sans-serif",
    },
    fontSize: {
      // provide values for both font-size and line-height
      body: [
        staticTokens.legacy.size.font.body,
        staticTokens.legacy.size["line-height"].body,
      ],
      h1: [
        staticTokens.legacy.size.font.h1,
        staticTokens.legacy.size["line-height"].h1,
      ],
      h2: [
        staticTokens.legacy.size.font.h2,
        staticTokens.legacy.size["line-height"].body,
      ],
      h3: [
        staticTokens.legacy.size.font.body,
        staticTokens.legacy.size["line-height"].body,
      ],
      h4: [
        staticTokens.legacy.size.font.sm,
        staticTokens.legacy.size["line-height"].body,
      ],
      h5: [
        staticTokens.legacy.size.font.xs,
        staticTokens.legacy.size["line-height"].sm,
      ],
      sm: [
        staticTokens.legacy.size.font.sm,
        staticTokens.legacy.size["line-height"].sm,
      ],
      xs: [
        staticTokens.legacy.size.font.xs,
        staticTokens.legacy.size["line-height"].xs,
      ],
      caption: [
        staticTokens.legacy.size.font.xs,
        staticTokens.legacy.size["line-height"].sm,
      ],
    },
    extend: {
      lineHeight: staticTokens.legacy.size["line-height"],
    },
  },
  variants: {},
  plugins: [],
};
