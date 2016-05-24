var path = require('path');
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
        'babel-polyfill',
  './lib/index'],

  output: {
    path: 'public',
    filename: '59023c.min.js',
    publicPath: '/'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
}
