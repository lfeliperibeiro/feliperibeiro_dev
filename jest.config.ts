import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  moduleNameMapper: {
    '^next-intl$': '<rootDir>/src/__mocks__/next-intl.ts',
    '^next-intl/server': '<rootDir>/src/__mocks__/next-intl-server.ts',
  },
};

export default createJestConfig(config);
