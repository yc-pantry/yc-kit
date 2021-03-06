module.exports = {
  cache: false, // default: true
  collectCoverage: true, // default: false
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    // '<rootDir>/pages/**/*.vue',  // pages had better use end to end testing, like e2e framework cypress
    '!<rootDir>/components/ui/Icon/*.vue'
  ], // default: null
  coverageDirectory: '<rootDir>/tests/unit/coverage', // default: null
  coverageReporters: ['json', 'text', 'lcov', 'clover'], // default
  globalSetup: null, // default
  globals: {}, // default: {}
  moduleDirectories: ['node_modules'], // default
  moduleFileExtensions: [
    'js',
    'ts',
    'vue',
    'json'
  ], // default: ['js', 'json', 'jsx', 'ts', 'tsx', 'node']
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
    '^yc-layout/(.*)$': '<rootDir>/components/layout/$1',
    '^yc-ui/(.*)$': '<rootDir>/components/ui/$1'
  }, // default: {}
  modulePathIgnorePatterns: [], // default
  rootDir: null, // default
  setupFiles: [
    '<rootDir>/tests/unit/setup.js'
  ], // default: []
  snapshotSerializers: [], // default
  testMatch: [
    '<rootDir>/**/__tests__/**/*spec.[jt]s?(x)'
  ], // default: ['**/__tests__/**/*.[jt]s?(x)','**/?(*.)+(spec|test).[tj]s?(x)'], Note: can't specify both .spec and .test
  testPathIgnorePatterns: ['node_modules'], // default
  testRegex: [], // default
  testURL: 'http://localhost', // default
  timers: 'real', // default, can be set to 'fake'
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest'
  }, // default: null
  transformIgnorePatterns: [
    'node_modules',
    '/node_modules(?![\\\\/]vue-awesome[\\\\/])/'
  ] // default: 'node_modules'
}
