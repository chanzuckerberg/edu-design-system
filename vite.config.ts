/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'; // TODO: needed?

import webpackStats from 'rollup-plugin-webpack-stats';
import { defineConfig } from 'vite';

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
        // Storybook-only helpers, exercised through stories rather than tested directly
        'src/storyUtils/**',
      ],
    },
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          include: [
            'src/**/*.test.{ts,js,tsx}',
            'bin/**/*.test.{ts,js}',
            'scripts/**/*.test.{mjs}',
            '**/*.test.{ts,tsx,js,jsx,mjs}',
          ],
          exclude: ['node_modules/', '**/*.stories.{ts,tsx}'],
          globals: true,
          environment: 'happy-dom',
          environmentOptions: {
            happyDOM: {
              settings: {
                // Keep link clicks from fetching real pages over the network
                navigation: {
                  disableChildPageNavigation: true,
                  disableMainFrameNavigation: true,
                },
              },
            },
          },
          restoreMocks: true,
          setupFiles: 'test/test.setup.js',
        },
      },
    ],
  },
});
