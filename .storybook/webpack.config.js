const path = require('path');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = ({ config }) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'design-system-name': path.resolve(__dirname, `../src`),
        '.storybook': path.resolve(__dirname, `../.storybook`),
      },
    },
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\/Icon\.js$/,
          use: path.resolve(__dirname, './icon-component-loader.js'),
        },
      ],
    },
    plugins: [
      ...config.plugins,
      new SVGSpritemapPlugin(path.resolve(__dirname, '../src/icons/**/*.svg'), {
        sprite: {
          prefix: false,
          generate: {
            symbol: true,
          },
        },
      }),
    ],
  };
};
