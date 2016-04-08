/*
config for webpack. Will be used in
the Gulpfile for building our app.
Does not need gulp in order to do so,
but we use gulp to orchestrate
 */
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
