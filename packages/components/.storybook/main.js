const path = require("path");

module.exports = {
  stories: ["../src/*.stories.mdx", "../src/**/*.stories.(ts|tsx|mdx)"],
  addons: ["@storybook/preset-typescript", "@storybook/addon-docs"],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    // source: https://stackoverflow.com/questions/41522721/how-to-watch-certain-node-modules-changes-with-webpack-dev-server
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [/node_modules([\\]+|\/)+(?!@chanzuckerberg\/czedi-kit-styles)/],
    };

    return config;
  },
};
