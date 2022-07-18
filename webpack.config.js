/**
 * This whole comes from BM theming
 */
const path = require('path');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = ({ config, mode }) => {
  const cssRule = config.module.rules.find((r) => r.test.test('example.css'));

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
          test: /\.scss$/,
          sideEffects: true,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
            },
          ],
          include: path.resolve(__dirname, '../'),
        },
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
