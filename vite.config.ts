/// <reference types="vitest/config" />
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import react from '@vitejs/plugin-react'; // TODO: needed?
// import { playwright } from '@vitest/browser-playwright';

import webpackStats from 'rollup-plugin-webpack-stats';
import { defineConfig } from 'vite';

// const dirname =
//   typeof __dirname !== 'undefined'
//     ? __dirname
//     : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [webpackStats(), react()],
  test: {
    coverage: {
      provider: 'v8',
      include: [
        'src/**/*.{ts,tsx}',
        'scripts/**/*.{mjs,ts,tsx}',
        'bin/_util.{ts,js}',
      ],
      exclude: [
        'src/bin/migrate/migrations',
        'src/bin/eds-migrate.ts',
        'src/**/*.stories.{ts,tsx}',
      ],
    },
    projects: [
      // { Re-enable once coverage reports aren't affected by this config : add --project=storybook to test:storybook in package.json
      //   extends: true,
      //   plugins: [
      //     // The plugin will run tests for the stories defined in your Storybook config
      //     // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      //     storybookTest({
      //       configDir: path.join(dirname, '.storybook'),
      //     }),
      //   ],
      //   test: {
      //     name: 'storybook',
      //     browser: {
      //       enabled: true,
      //       headless: true,
      //       provider: playwright({}),
      //       instances: [
      //         {
      //           browser: 'chromium',
      //         },
      //       ],
      //     },
      //   },
      // },
      {
        extends: true,
        test: {
          name: 'unit',
          include: [
            'src/**/*.test.{ts,tsx}',
            'bin/**/*.test.{ts,js}',
            'scripts/**/*.test.{mjs}',
            '**/*.test.{ts,tsx,js,jsx,mjs}',
          ],
          exclude: ['node_modules/', '**/*.stories.{ts,tsx}'],
          globals: true,
          environment: 'happy-dom',
          restoreMocks: true,
          setupFiles: 'test/test.setup.js',
        },
      },
    ],
  },
});
