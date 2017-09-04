
const path = require('path')
const webpack = require('webpack')


module.exports = {
  entry: './src/letlive2.ts',
  target: 'node',
  output: {
    // path: path.resolve(__dirname, 'dist'),
    filename: './src/bundle.js'
  },
  resolve: {
    extensions: ['*', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /.ts$/, loader: 'awesome-typescript-loader' }
    ]
  }
};