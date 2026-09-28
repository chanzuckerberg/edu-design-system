// eslint-disable-next-line import/default, import/no-extraneous-dependencies
import getTestRule from 'jest-preset-stylelint/getTestRule';
// eslint-disable-next-line import/no-extraneous-dependencies
import stylelint from 'stylelint';
// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from 'vitest';
import plugins from '../scripts/stylelint/index.mjs';
import {
  ruleName,
  messages,
} from '../scripts/stylelint/rules/no-tier-1-color-variable.mjs';

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

// testRule loads the plugin through stylelint's own module loader, which coverage
// can't see. Lint with the imported plugin too, so the rule is exercised in-process.
describe(ruleName, () => {
  const lint = (code, ruleOption = true) =>
    stylelint
      .lint({ code, config: { plugins, rules: { [ruleName]: ruleOption } } })
      .then(({ results }) => results[0]);

  it('reports tier 1 color variables', async () => {
    const { warnings } = await lint(
      '.class {border-color: var(--eds-color-neutral-200);}',
    );

    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toEqual(messages.rejected);
  });

  it('allows tier 2 color variables and declarations without values', async () => {
    const { warnings } = await lint(
      '.class {border-color: var(--eds-theme-color-border-neutral-subtle); /* note */}',
    );

    expect(warnings).toHaveLength(0);
  });

  it('skips linting when given an invalid option', async () => {
    const { warnings, invalidOptionWarnings } = await lint(
      '.class {border-color: var(--eds-color-neutral-200);}',
      'invalid',
    );

    expect(warnings).toHaveLength(0);
    expect(invalidOptionWarnings).toHaveLength(1);
  });
});
