module.exports = {
  // Babel lets Jest understand the import/export syntax used by this Vite app.
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'node',
  collectCoverageFrom: ['src/utils/**/*.js'],
}