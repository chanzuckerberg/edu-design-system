module.exports = {
  addons: [
    "@storybook/addon-docs/react/preset",
    "@storybook/preset-typescript",
  ],
  webpackFinal: config => {
    return {
      ...config,
      // source: https://stackoverflow.com/questions/41522721/how-to-watch-certain-node-modules-changes-with-webpack-dev-server
      watchOptions: {
        ...config.watchOptions,
        ignored: [
          /node_modules([\\]+|\/)+(?!@chanzuckerberg\/czedi-kit-styles)/,
        ],
      },
    };
  },
};
