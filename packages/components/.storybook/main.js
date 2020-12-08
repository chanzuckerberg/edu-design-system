const path = require("path");

module.exports = {
  stories: ["../src/*.stories.mdx", "../src/**/*.stories.(ts|tsx|mdx)"],
  addons: ["@storybook/preset-typescript", "@storybook/addon-docs"],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      include: path.resolve(__dirname, "../"),
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    config.module.rules.push({
      test: /\.tsx?$/,
      include: path.resolve(__dirname, "../src/"),
      use: [
        {
          loader: "babel-loader",
        },
        {
          loader: "@linaria/webpack-loader",
          options: {
            sourceMap: false,
          },
        },
      ],
    });

    // source: https://stackoverflow.com/questions/41522721/how-to-watch-certain-node-modules-changes-with-webpack-dev-server
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [/node_modules([\\]+|\/)+(?!@chanzuckerberg\/czedi-kit-styles)/],
    };

    return config;
  },
};
