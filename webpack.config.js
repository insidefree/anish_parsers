const path = require('path')
const webpack = require('webpack')


module.exports = {
  entry: './tests/test.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
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