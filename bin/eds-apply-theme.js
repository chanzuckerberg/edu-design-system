#!/usr/bin/env node
(async function () {
  /**
   * Documentation:
   * - Token change log published when EDS changed, and errors link to changelog
   *
   * Possible Usages:
   * - Checks for reference to the token to link to change log entry(ies)
   * - Integrate with husky so that PRs always include updated theme values (pre-push)
   *
   * TODO:
   * - remove the config, and generated files from this PR before merging
   * - update the local app-theme.json with any new values from the base theme
   *
   * Questions:
   * - should this preserve the tier 1 tokens used by tier 2 and 3 files?
   * - (in wireframe kit, the only updates happen to colors/fonts)
   * - (in along, colors/fonts/border-* & drop shadows need overriding)
   * - should we use token references in the output instead of the hex codes?
   * - should we remove the listing of the tier-1 values in the theme base file?
   * - should we use the wireframe theme as the values used in the theme base?
   * - should all the grade-based tokens be filtered out (they might not apply to point solutions)?
   */
  const StyleDictionary = require('style-dictionary');
  const path = require('path');
  const fs = require('fs');
  const { getConfig } = require('./_util');

  // Compare local to base theme file for differences. flag and quit when theme has
  // undefined tokens being overridden
  let packageRootPath;
  try {
    packageRootPath =
      path.dirname(require.resolve('@chanzuckerberg/eds')) + '/tokens/';
  } catch (e) {
    console.error('EDS package not installed. Using local path...');
    packageRootPath =
      path.dirname(require.main.path) + '/src/tokens-dist/json/';
  }

  const config = await getConfig();

  // read and parse JSON files on disk
  const localTheme = JSON.parse(
    fs.readFileSync(`${config.json}app-theme.json`, 'utf8'),
  );
  const baseTheme = JSON.parse(
    fs.readFileSync(`${packageRootPath}theme-base.json`, 'utf8'),
  );

  // Keys in theme must be a strict subset of those in base
  try {
    isStrictSubset(baseTheme, localTheme);
  } catch (error) {
    // TODO: if theme has things not in base, error showing where the conflict
    console.error('Theme error:', error.message);
    return;
  }

  StyleDictionary.registerFileHeader({
    name: 'cssOverrideHeader',
    fileHeader: (defaultMessage) => [
      ...defaultMessage,
      'To update, edit app-theme.json, then run `npx eds-update-theme`',
    ],
  });

  const EDSStyleDictionary = StyleDictionary.extend({
    source: [config.json + 'app-theme.json'],
    platforms: {
      css: {
        transforms: [...StyleDictionary.transformGroup.css, 'name/cti/kebab'],
        buildPath: config.css,
        files: [
          {
            format: 'css/variables',
            destination: 'app-theme.css',
            options: {
              fileHeader: 'cssOverrideHeader',
            },
            filter: function (token) {
              // don't allow theming on legacy tokens
              return token.attributes.category !== 'legacy';
            },
          },
        ],
      },
    },
  });
  EDSStyleDictionary.buildAllPlatforms();

  function isStrictSubset(base, theme, path = []) {
    for (const name in theme) {
      if (typeof theme[name] === 'object') {
        if (base[name] === undefined) {
          throw new Error(
            `Local themeable value does not exist in base theme: ${path.join(
              '.',
            )}.${name}"`,
          );
        }
        isStrictSubset(base[name], theme[name], path.concat(name));
      }
    }
  }
})();
