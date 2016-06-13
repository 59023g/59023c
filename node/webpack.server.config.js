var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, './server/main.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js'
  },
  target: 'node',
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .concat([
      'react-dom/server'
    ])
    .reduce(function (ext, mod) {
      ext[mod] = 'commonjs ' + mod
      return ext
    }, {}),
  node: {
    __filename: false,
    __dirname: false
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react'
    }]
  },
  plugins: [
    new webpack.BannerPlugin('require("source-map-support").install();',
                             { raw: true, entryOnly: false })
  ],
  devtool: 'sourcemap'

}
