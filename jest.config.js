module.exports = {
  roots: [
    '<rootDir>/app/src',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  modulePaths: [
    '<rootDir>',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/__mocks__/fileMock.ts',
    '^src(.*)$': '<rootDir>/app/src$1',
  },
  testEnvironment: 'node',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  // Setup Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/setupEnzyme.ts'],
  coverageThreshold: {
    global: {
      statements: 45,
      branches: 45,
      functions: 45,
      lines: 45,
    },
  },
};
