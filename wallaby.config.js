module.exports = wallaby => ({
  files: [
    '**/*',
    'test/**/*',
    '!test/**/*.test.js'
  ],
  tests: [
    'test/**/*.test.js'
  ],

  env: {
    type: 'node',
    runner: 'node'
  }

  // setup: () => require('./test/helpers'),

  // compilers: {
  //   '**/*.js': wallaby.compilers.babel()
  // }
});