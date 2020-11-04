// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  setupFilesAfterEnv: ["jest-axe/extend-expect"],
  coverageDirectory: "coverage",
};
