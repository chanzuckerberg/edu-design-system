// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

// TODO(next-major): setting Jest to run esModules without parsing thru babel until EDS v19
const esModules = [
  /** react-markdown 9.0.1+ */
  'react-markdown',
  'devlop',
  'hast-util-to-jsx-runtime',
  'comma-separated-tokens',
  'estree-util-is-identifier-name',
  'hast-util-whitespace',
  'property-information',
  'space-separated-tokens',
  'unist-util-position',
  'vfile-message',
  'vfile',
  'unist-util-stringify-position',
  'unist-.*',
  'html-url-attributes',
  'remark-parse',
  'mdast-.*',
  'micromark',
  'decode-named-character-reference',
  'micromark-.*',
  'remark-rehype',
  'trim-lines',
  'unified',
  'bail',
  'is-plain-obj',
  'trough',
  'refractor',
  'hastscript',
  'hast-.*',
  'parse-entities',
  'character-entities-legacy',
  'character-reference-invalid',
  'is-decimal',
  'is-hexadecimal',
  'is-alphanumerical',
  'is-alphabetical',
  'react-syntax-highlighter',
].join('|');

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/mocks/fileMock.js',
  },
  preset: 'ts-jest/presets/js-with-ts',
  roots: ['<rootDir>/src', '<rootDir>/scripts', '<rootDir>/bin'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.ts'],
  transformIgnorePatterns: [`node_modules/(?!(${esModules})/)`],
};
