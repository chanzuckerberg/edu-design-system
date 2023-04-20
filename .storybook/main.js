/**
 * Although `--static-dir` is marked as deprecated. The The Chromatic CLI
 * currently pulls the staticDir from the build script, but does not support
 * the staticDirs configuration option.
 *
 * We should refrain from using the staticDirs option in this configuration until
 * https://github.com/chromaui/chromatic-cli/issues/462 is resolved.
 */
module.exports = {
  stories: [
    '../docs',
    './components/**/*.stories.@(js|jsx|ts|tsx)',
    './components/**/*.stories.mdx',
    '../src/components',
    './**/*.stories.@(js|jsx|ts|tsx)',
    './**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    'storybook-css-modules',
    '@storybook/addon-interactions',
    '@geometricpanda/storybook-addon-badges',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        transcludeMarkdown: true,
      },
    },
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: (config) => {
    config.module.rules.push(
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.md$/,
        type: 'asset/source',
      },
    );
    return config;
  },
  docs: {
    autodocs: true,
  },
};
