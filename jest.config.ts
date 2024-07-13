import type { Config } from 'jest';

const config: Config = {
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/components/**/*.{ts,tsx}',
    '!**/*.stories.tsx',
    '!**/*mock.ts',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
    '!<rootDir>/src/utils/**',
    '!<rootDir>/.storybook/**',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};

export default config;
