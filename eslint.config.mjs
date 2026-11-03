import { fileURLToPath } from 'node:url';
import { fixupPluginRules, includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import eduReact from '@chanzuckerberg/eslint-plugin-edu-react';
import stories from '@chanzuckerberg/eslint-plugin-stories';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import importX from 'eslint-plugin-import-x';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import testingLibrary from 'eslint-plugin-testing-library';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const testFiles = [
  '**/*.spec.{js,jsx,ts,tsx}',
  '**/*.test.{js,jsx,ts,tsx}',
  '**/__tests__/**',
];

export default defineConfig(
  includeIgnoreFile(fileURLToPath(new URL('.gitignore', import.meta.url))),
  // Match the extensions linted before the flat config migration
  globalIgnores(['**/*.{mjs,cjs,mts,cts}']),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
  },

  // Ported from @chanzuckerberg/eslint-config-edu-js, which only supports .eslintrc
  js.configs.recommended,
  importX.flatConfigs.errors,
  {
    rules: {
      'array-bracket-spacing': ['error', 'never'],
      'arrow-parens': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      curly: 'error',
      eqeqeq: ['error', 'allow-null'],
      'import-x/extensions': [
        'error',
        'always',
        {
          pattern: { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
          // lodash has no exports map, so deep imports need the extension (see no-restricted-imports)
          pathGroupOverrides: [{ pattern: 'lodash/*', action: 'ignore' }],
        },
      ],
      'import-x/first': 'error',
      'import-x/no-anonymous-default-export': 'off',
      'import-x/no-extraneous-dependencies': 'error',
      'import-x/order': ['error', { alphabetize: { order: 'asc' } }],
      'no-alert': 'error',
      'no-bitwise': 'error',
      'no-prototype-builtins': 'off',
      'no-unused-vars': [
        'error',
        { args: 'none', caughtErrors: 'none', ignoreRestSiblings: true },
      ],
      'no-var': 'error',
      'object-curly-spacing': ['error', 'never'],
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      radix: 'error',
      'require-await': 'error',
    },
  },

  // Ported from @chanzuckerberg/eslint-config-edu-ts, which only supports .eslintrc
  tseslint.configs.recommended,
  importX.flatConfigs.typescript,
  {
    settings: {
      'import-x/resolver': {
        typescript: {},
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { args: 'none', caughtErrors: 'none', ignoreRestSiblings: true },
      ],
      // Keep the typescript-eslint v5 recommended set: these moved out of recommended in v8...
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      // ...and this one moved in
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  {
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: testFiles,
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },

  prettierRecommended,
  storybook.configs['flat/recommended'],
  testingLibrary.configs['flat/react'],

  // Ported from plugin:@chanzuckerberg/eslint-plugin-edu-react/recommended. These plugins
  // predate ESLint 10, so fixupPluginRules restores the context methods they still call.
  {
    plugins: {
      '@chanzuckerberg/edu-react': fixupPluginRules(eduReact),
      'jsx-a11y': fixupPluginRules(jsxA11y),
      react: fixupPluginRules(react),
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      '@chanzuckerberg/edu-react/no-useless-key': 'error',
      '@chanzuckerberg/edu-react/use-effect-deps-presence': 'error',
      'jsx-a11y/anchor-ambiguous-text': 'off',
      'jsx-a11y/no-autofocus': 'off',
      'react/jsx-filename-extension': [
        'error',
        { allow: 'as-needed', extensions: ['.jsx', '.tsx'] },
      ],
      'react/jsx-key': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/jsx-sort-props': ['error', { ignoreCase: true }],
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      'react/no-array-index-key': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-string-refs': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      '@chanzuckerberg/edu-react/no-create-ref-in-function-component': 'error',
    },
  },
  {
    files: testFiles,
    rules: {
      '@chanzuckerberg/edu-react/no-create-ref-in-function-component': 'off',
    },
  },

  {
    plugins: {
      '@chanzuckerberg/stories': fixupPluginRules(stories),
    },
    rules: stories.configs.strict.rules,
  },

  // Repo-specific rules
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'testing-library/no-node-access': 'off',
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            'src/**/*.test.{ts,tsx}',
            'src/**/*.stories.{ts,tsx}',
            '**/*.config.{js,ts,mjs}',
            '**/*.setup.{js,ts}',
            '.storybook/**',
            'scripts/stylelint/**',
            'plopfile.js',
            'eslint.config.mjs',
          ],
        },
      ],
      'import-x/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
          },
          groups: ['builtin', 'external', 'sibling', 'parent', 'index'],
          pathGroups: [
            {
              pattern: '*.module.css',
              group: 'index',
              patternOptions: { matchBase: true },
              position: 'after',
            },
          ],
        },
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-unused-vars': 'off',
      'react/jsx-boolean-value': 'warn',
    },
  },
  {
    files: [
      '**/config.js',
      '**/*.config.js',
      '**/main.ts',
      'plopfile.js',
      'src/**/*.js',
    ],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['src/storyUtils/**/*.{ts,tsx}'],
    rules: {
      '@chanzuckerberg/stories/no-components-without-story': 'off',
    },
  },
  {
    files: ['src/**/*.stories.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['.storybook'],
              message:
                'Do not import files from `.storybook/` into `src`. If needed, move files into `src/storyUtils` instead.',
            },
            {
              group: ['**/docs/*'],
              message:
                'Do not import files from `docs/` into `src`. If needed, move files into `src/storyUtils` instead.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['src/**/*.{stories,test,spec}.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'lodash',
              message:
                "For better tree shaking, prefer deep imports from lodash (e.g. import at from 'lodash/at.js') instead of named (e.g. import {at} from 'lodash)",
            },
          ],
          patterns: [
            {
              group: ['lodash/*', '!lodash/*.js'],
              message:
                "Include the file extension (e.g. import debounce from 'lodash/debounce.js'). lodash has no exports map, so Node cannot resolve an extensionless deep import in the ESM build.",
            },
            {
              group: ['**/tokens-dist/ts/colors*'],
              message:
                'Do not import JavaScript color variables into component files. Use CSS variables in styles instead.',
            },
          ],
        },
      ],
    },
  },
);
