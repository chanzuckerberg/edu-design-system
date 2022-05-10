const StyleDictionary = require("style-dictionary");
const EDSStyleDictionary = StyleDictionary.extend({
  source: ["src/design-tokens/**/*.json"],
  platforms: {
    scss: {
      transforms: [...StyleDictionary.transformGroup.scss, "name/cti/kebab"],
      buildPath: "lib/tokens/",
      files: [
        {
          format: "scss/map-deep",
          destination: "scss/_variables.scss",
          options: {
            showFileHeader: false,
          },
        },
      ],
    },
    css: {
      transforms: [...StyleDictionary.transformGroup.css, "name/cti/kebab"],
      buildPath: "lib/tokens/",
      files: [
        {
          format: "css/variables",
          destination: "css/variables.css",
          options: {
            showFileHeader: false,
          },
        },
        {
          format: "json/nested-css-variables",
          destination: "json/css-variables-nested.json",
          options: {
            showFileHeader: false,
          },
        },
      ],
    },
    js: {
      transformGroup: "js",
      buildPath: "lib/tokens/",
      files: [
        {
          format: "javascript/es6",
          destination: "ts/colors.ts",
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
      buildPath: "lib/tokens/",
      files: [
        {
          format: "json/flat",
          destination: "json/variables.json",
          options: {
            showFileHeader: false,
          },
        },
        {
          format: "json/nested",
          destination: "json/variables-nested.json",
          options: {
            showFileHeader: false,
          },
        },
      ],
    },
  },
});

// copied from https://github.com/amzn/style-dictionary/blob/v3.0.0-rc.1/lib/common/formats.js#L96
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
