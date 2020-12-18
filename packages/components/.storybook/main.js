const path = require("path");

module.exports = {
  stories: ["../src/*.stories.mdx", "../src/**/*.stories.@(ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
};
