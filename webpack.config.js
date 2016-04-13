module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      {
          test: /\.js?$/,
          exclude: [/node_modules/],
          loader: 'babel',
          query: { presets: ['es2015'] }
      },
    ]
  }
};
