// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/mocks/fileMock.js',
  },
  preset: 'ts-jest',
  roots: ['<rootDir>/src', '<rootDir>/scripts'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.ts'],
};
