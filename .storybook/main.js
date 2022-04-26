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
};
