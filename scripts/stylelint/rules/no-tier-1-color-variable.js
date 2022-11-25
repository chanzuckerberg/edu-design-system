/* eslint-env node */

const dedent = require('dedent');
const stylelint = require('stylelint');

const ruleName = 'eds/no-tier-1-color-variable';

const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: dedent`
    Don't use tier 1 color CSS variables directly. Choose a tier 2 or tier 3 variable that has the same color value with a name relevant to the style you're adding. (Example: a neutral border might use --eds-theme-color-border-neutral-default.) If such a variable does not exist, talk to design about adding a token for this use case.
  `,
});

/**
 * Warn against using tier 1 color token CSS variables because they interfere with theming.
 */
function rule(actual) {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual,
    });

    if (!validOptions) {
      return;
    }

    root.walkRules((node) => {
      node.walk((declaration) => {
        if (declaration.value?.includes('--eds-color-')) {
          stylelint.utils.report({
            message: messages.rejected,
            node,
            result,
            ruleName,
          });
        }
      });
    });
  };
}

rule.ruleName = ruleName;
rule.messages = messages;
module.exports = rule;
