/* eslint-env node */

const { createPlugin } = require('stylelint');
const rules = require('./rules');

const rulesPlugins = Object.keys(rules).map((ruleName) => {
  return createPlugin(ruleName, rules[ruleName]);
});

module.exports = rulesPlugins;
