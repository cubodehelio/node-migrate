require('babel-register')({
  babelrc: false,
  presets: [
    [
      require.resolve('babel-preset-env'),
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
});
