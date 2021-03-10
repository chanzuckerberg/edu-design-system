// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  snapshotSerializers: ["@emotion/jest/serializer"],
  coverageDirectory: "coverage",
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
};
