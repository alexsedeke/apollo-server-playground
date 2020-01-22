module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: [
    'text',
    'lcov',
    'html',
    'json'
  ],
  moduleFileExtensions: [
    'js',
    'json'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ]
}
