const StyleDictionary = require('style-dictionary');

const EDSStyleDictionary = StyleDictionary.extend({
  source: [
    'src/design-tokens/tier-1-definitions/*.json',
    'src/design-tokens/core-dark-tokens.json',
  ],
  platforms: {
    css: {
      transforms: [...StyleDictionary.transformGroup.css, 'name/cti/kebab'],
      files: [
        {
          format: 'css/variables',
          destination: 'src/tokens-dist/css/variables-dark.css',
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
        },
      ],
    },
  },
});

EDSStyleDictionary.buildAllPlatforms();
