import type { StorybookConfig } from '@storybook/react-webpack5';

const config = {
  stories: [
    './components/**/*.mdx',
    './components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components',
    './**/*.mdx',
    './**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    'storybook-addon-tag-badges',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.css$/,
            // See: https://webpack.js.org/guides/tree-shaking/
            sideEffects: true, // This must be true so that the emitted changes load in storybook
            use: [
              'style-loader',
              {
                // Configuration for handling CSS Modules
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: {
                    auto: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]',
                  },
                },
              },
              {
                // Tailwind requires PostCSS to work
                loader: 'postcss-loader',
                options: {
                  implementation: require.resolve('postcss'),
                },
              },
            ],
          },
        ],
      },
    },
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-themes',
    'storybook-addon-test-codegen',
  ],

  // TODO: update config and package.json scripts to support staticDirs
  // This will allow creation of preview-head.html to preload font assets
  // See: https://storybook.js.org/docs/configure/integration/images-and-assets
  // See: https://www.chromatic.com/docs/font-loading/#solution-a-preload-fonts
  // staticDirs: [...],

  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
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

  /**
   * This config enables deep parsing of TypeScript types in the table UI, which can interpret
   * the values of unions, and TypeScript utils like `Extract`, `Pick`, etc.
   */
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
} satisfies StorybookConfig;

export default config;
