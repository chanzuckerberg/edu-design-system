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
    './components/**/*.stories.mdx',
    './components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components',
    './**/*.stories.mdx',
    './**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
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
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
        cssModules: true,
      },
    },
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {
    autodocs: true,
  },

  core: {
    disableTelemetry: true,
  },

  babel: (config) => {
    return {
      sourceType: 'unambiguous',
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              chrome: 100,
              safari: 15,
              firefox: 91,
            },
          },
        ],
        '@babel/preset-typescript',
        '@babel/preset-react',
      ],
      plugins: [],
    };
  },
};
