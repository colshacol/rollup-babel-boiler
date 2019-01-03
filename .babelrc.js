const production = {
  presets: ['babel-preset-minify'],
}

module.exports = {
  env: {
    production,
  },

  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
  ],
}
