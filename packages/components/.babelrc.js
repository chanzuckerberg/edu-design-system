module.exports = {
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        targets: [
          "last 2 chrome versions",
          "last 2 firefox versions",
          "last 2 safari versions",
        ],
      },
    ],
  ],
};
