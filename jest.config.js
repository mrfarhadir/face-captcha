module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  coverageReporters: ['text', 'lcov'],
};
