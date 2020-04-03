/* eslint-disable no-undef */

module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/', '/migrations/'],
  globalSetup: './src/__tests__/config/setup.ts',
  globalTeardown: './src/__tests__/config/teardown.ts',
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./src/__tests__/config/database.ts'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/*.test.ts'],
}
