// const path = require('path');

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   rootDir: './',
//   testMatch: ['**/*.integration.spec.ts'],
//   moduleFileExtensions: ['ts', 'js', 'json'],
//   setupFilesAfterEnv: [path.resolve(__dirname, 'jest.integration.setup.mjs')],
//   moduleNameMapper: {
//     '^src/(.*)$': '<rootDir>/src/$1',
//   },
// };


const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: [path.resolve(__dirname, 'jest.integration.setup.js')],
  testMatch: ['**/*.integration.spec.ts'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
};