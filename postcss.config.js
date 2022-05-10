module.exports = () => ({
  plugins: [
    require("postcss-import")({
      addModulesDirectories: ["node_modules"],
    }),
    require("postcss-mixins"),
    require("postcss-nested"),
    require("tailwindcss"),
  ],
});
