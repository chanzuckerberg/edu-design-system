import type { StorybookConfig } from '@storybook/react-vite' with {
  'resolution-mode': 'import',
};

const config: StorybookConfig = {
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
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-themes',
    // Re-enable once vitest storybook config is working properly
    // '@storybook/addon-vitest',
    'storybook-addon-test-codegen',
    '@github-ui/storybook-addon-performance-panel',
    '@storybook/addon-mcp',
  ],

  docs: {
    defaultName: 'Summary Docs',
  },

  // TODO: update config and package.json scripts to support staticDirs
  // This will allow creation of preview-head.html to preload font assets
  // See: https://storybook.js.org/docs/configure/integration/images-and-assets
  // See: https://www.chromatic.com/docs/font-loading/#solution-a-preload-fonts
  // staticDirs: [...],

  framework: '@storybook/react-vite',

  core: {
    disableTelemetry: true,
    builder: '@storybook/builder-vite',
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
};

export default config;
