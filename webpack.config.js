module.exports = {
  entry: './src/App.ts',
  target: 'node',
  output: {
    filename: './dist/bundle.js'
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