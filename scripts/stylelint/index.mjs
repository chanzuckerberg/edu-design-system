/* eslint-env node */

import stylelint from 'stylelint';
import * as rules from './rules/index.mjs';

const rulesPlugins = Object.keys(rules).map((ruleName) => {
  return stylelint.createPlugin(ruleName, rules[ruleName]);
});

export default rulesPlugins;
