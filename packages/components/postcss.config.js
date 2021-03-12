module.exports = () => ({
  plugins: [
    require("postcss-import")({
      addModulesDirectories: ["node_modules"],
    }),
    require("tailwindcss"),
    require("postcss-preset-env")({
      stage: 3,
    }),
  ],
});
