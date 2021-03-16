module.exports = {
  presets: [
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        targets: [
          "last 2 chrome versions",
          "last 2 firefox versions",
          "last 2 safari versions",
          "last 2 edge versions",
        ],
      },
    ],
    "@babel/preset-react",
  ],
};
