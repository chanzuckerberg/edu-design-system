import getTestRule from 'jest-preset-stylelint/getTestRule';
import { messages, ruleName } from './no-tier-1-color-variable.mjs';

const testRule = getTestRule({ plugins: ['./scripts/stylelint/index.mjs'] });

testRule({
  ruleName,
  config: true,

  accept: [
    {
      code: '.class {border-color: var(--eds-theme-color-border-neutral-subtle);}',
      description: 'tier 2 color variable is valid',
    },
  ],

  reject: [
    {
      code: '.class {border-color: var(--eds-color-neutral-200);}',
      description: 'tier 1 color variable is invalid',
      message: messages.rejected,
    },
  ],
});
