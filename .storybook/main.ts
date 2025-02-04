import type { StorybookConfig } from '@storybook/react-webpack5';
import type { Configuration } from 'webpack';

/**
 * Although `--static-dir` is marked as deprecated. The The Chromatic CLI
 * currently pulls the staticDir from the build script, but does not support
 * the staticDirs configuration option.
 *
 * We should refrain from using the staticDirs option in this configuration until
 * https://github.com/chromaui/chromatic-cli/issues/462 is resolved.
 */
const config = {
  stories: [
    './components/**/*.mdx',
    './components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components',
    './**/*.mdx',
    './**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials', // See: https://storybook.js.org/docs/essentials
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@geometricpanda/storybook-addon-badges',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
        cssModules: true,
      },
    },
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  build: {
    test: {
      disabledAddons: ['@storybook/addon-a11y'],
    },
  },

  core: {
    disableTelemetry: true,
  },

  babel: () => {
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

  webpackFinal(config, { configType }) {
    if (configType === 'DEVELOPMENT') {
      updateCSSLoaderPlugin(config);
    }
    return config;
  },

  /**
   * This config enables deep parsing of TypeScript types in the table UI, which can interpret
   * the values of unions, and TypeScript utils like `Extract`, `Pick`, etc.
   */
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
} satisfies StorybookConfig;

/**
 * Updates the `css-loader` webpack plugin to make class names human readable.
 *
 * NOTE: This should only be used for local development.
 */
function updateCSSLoaderPlugin(config: Configuration): Configuration {
  config.module?.rules?.forEach((rule) => {
    if (rule && typeof rule === 'object' && Array.isArray(rule.use)) {
      const isRuleForCSS = rule.test?.toString() === '/\\.css$/';
      if (isRuleForCSS) {
        rule.use.forEach((ruleSetRule) => {
          if (
            typeof ruleSetRule === 'object' &&
            ruleSetRule?.loader?.includes('node_modules/css-loader')
          ) {
            ruleSetRule.options = {
              // @ts-expect-error css-loader doesn't accept "string" options
              // and will either be an object or undefined
              ...ruleSetRule.options,
              modules: {
                // @ts-expect-error css-loader doesn't accept "string" options
                // and will either be an object or undefined
                ...ruleSetRule.options?.modules,
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            };
          }
        });
      }
    }
  });

  return config;
}

export default config;
