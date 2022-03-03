const StyleDictionary = require("style-dictionary");
const EDSStyleDictionary = StyleDictionary.extend({
  source: ["src/design-tokens/**/*.json"],
  platforms: {
    scss: {
      transforms: [...StyleDictionary.transformGroup.scss, "name/cti/kebab"],
      buildPath: "src/",
      files: [
        {
          format: "scss/map-deep",
          destination: "/design-tokens/_tokens.scss",
          options: {
            showFileHeader: false,
          },
        },
      ],
    },
    css: {
      transforms: [...StyleDictionary.transformGroup.css, "name/cti/kebab"],
      buildPath: "src/",
      files: [
        {
          format: "css/variables",
          destination: "/design-tokens/tokens.css",
          options: {
            showFileHeader: false,
          },
        },
        {
          format: "json/nested-css-variables",
          destination: "/design-tokens/css-variables-nested.json",
          options: {
            showFileHeader: false,
          },
        },
      ],
    },
    js: {
      transformGroup: "js",
      buildPath: "src/",
      files: [
        {
          format: "javascript/es6",
          destination: "/design-tokens/colors.ts",
          options: {
            showFileHeader: false,
          },
          filter: {
            attributes: {
              type: "color",
            },
          },
        },
      ],
    },
    json: {
      transformGroup: "js",
      buildPath: "src/",
      files: [
        {
          format: "json/flat",
          destination: "/design-tokens/variables.json",
          options: {
            showFileHeader: false,
          },
        },
        {
          format: "json/nested",
          destination: "/design-tokens/variables-nested.json",
          options: {
            showFileHeader: false,
          },
        },
      ],
    },
    storybook: {
      transformGroup: "css",
      buildPath: "",
      files: [
        {
          format: "json/flat",
          destination: ".storybook/data/tokens.json",
        },
      ],
    },
  },
});

// copied from https://github.com/amzn/style-dictionary/blob/v3.0.0-rc.1/src/common/formats.js#L96
function minifyCSSVarDictionary(obj) {
  if (typeof obj !== "object" || Array.isArray(obj)) {
    return obj;
  }

  var toRet = {};

  if (obj.value) {
    return `var(--${obj.name})`;
  } else {
    for (var name in obj) {
      toRet[name] = minifyCSSVarDictionary(obj[name]);
    }
  }
  return toRet;
}

EDSStyleDictionary.registerFormat({
  name: "json/nested-css-variables",
  formatter: function (dictionary) {
    return JSON.stringify(
      minifyCSSVarDictionary(dictionary.properties),
      null,
      2,
    );
  },
});

EDSStyleDictionary.buildAllPlatforms();
