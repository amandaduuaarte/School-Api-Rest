const config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-environment-node',
  transform: {
    '\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  coverageProvider: 'v8',
};

module.exports = config;
