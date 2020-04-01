module.exports = ({ env }) => ({
  parser: "postcss-scss",

  plugins: [
    require("postcss-import")({
      addModulesDirectories: ["node_modules"],
    }),
    require("@csstools/postcss-sass")(),
    require("postcss-prefixer")({
      prefix: "czedi-",
    }),
    require("postcss-preset-env")({
      stage: 3,
    }),
    require("postcss-rtl"),
    ...(env === "production" ? [require("cssnano")] : []),
  ],
});
