const path = require("path");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");

module.exports = {
  stories: ["../docs", "../src"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-css-modules-preset",
    "@storybook/addon-interactions",
    "@geometricpanda/storybook-addon-badges",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  webpackFinal: async (config) => {
    const SVGSpritesPlugin = new SVGSpritemapPlugin(
      path.resolve(__dirname, "../src/icons/**/*.svg"),
      {
        sprite: {
          prefix: false,
          generate: {
            symbol: true,
          },
        },
      },
    );
    config.plugins.push(SVGSpritesPlugin);
    return config;
  },
};
