module.exports = ({ env }) => ({
  parser: "postcss-scss",

  plugins: [
    require("@csstools/postcss-sass")({
      includePaths: ["./node_modules"],
    }),
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
