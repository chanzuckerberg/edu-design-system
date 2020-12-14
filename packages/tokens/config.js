const StyleDictionary = require("style-dictionary");
const EDSStyleDictionary = StyleDictionary.extend({
  source: ["properties/**/*.json"],
  platforms: {
    scss: {
      transforms: [...StyleDictionary.transformGroup.scss, "name/kebabCase"],
      buildPath: "dist/scss/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/map-deep",
        },
      ],
    },
    css: {
      transforms: [...StyleDictionary.transformGroup.css, "name/kebabCase"],
      buildPath: "dist/css/",
      files: [
        {
          format: "css/variables",
          destination: "variables.css",
        },
      ],
    },
    js: {
      transformGroup: "js",
      buildPath: "dist/js/",
      files: [
        {
          format: "javascript/es6",
          destination: "colors.js",
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
      buildPath: "dist/json/",
      files: [
        {
          format: "json/flat",
          destination: "variables.json",
        },
        {
          format: "json/nested",
          destination: "variables-nested.json",
        },
      ],
    },
  },
});

EDSStyleDictionary.registerTransform({
  name: "name/kebabCase",
  type: "name",
  transformer: function ({ path }) {
    return path.join("-").toLowerCase();
  },
});

EDSStyleDictionary.buildAllPlatforms();
