const path = require("path");

module.exports = {
  stories: ["../src/*.stories.mdx", "../src/**/*.stories.@(ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      include: path.resolve(__dirname, "../"),
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    config.watchOptions = {
      ...config.watchOptions,
      ignored: [/node_modules([\\]+|\/)+(?!@chanzuckerberg\/czedi-kit-styles)/],
    };

    return config;
  },
};
