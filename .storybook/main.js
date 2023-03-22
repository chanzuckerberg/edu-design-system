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
    'storybook-css-modules-preset',
    '@storybook/addon-interactions',
    '@geometricpanda/storybook-addon-badges',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        transcludeMarkdown: true,
      },
    },
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  core: {
    builder: 'webpack5',
  },
};
