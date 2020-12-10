const path = require("path");

module.exports = {
  stories: ["../src/*.stories.mdx", "../src/**/*.stories.@(ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  webpackFinal: async (config, { configType }) => {
    const isDevelop = configType === "DEVELOPMENT";
    config.module.rules.push({
      test: /\.scss$/,
      include: path.resolve(__dirname, "../"),
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    config.module.rules.push({
      test: /\.tsx?/,
      loader: "@linaria/webpack-loader",
      options: {
        sourceMap: isDevelop,
        displayName: isDevelop,
        cacheDirectory: "node_modules/.cache/linaria",
      },
    });

    return config;
  },
};
