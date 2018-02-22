const path = require('path')

module.exports = {
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'static'),
    public: '0.0.0.0:4001',
    port: 9966,
    host: '0.0.0.0',
    hot: true
  }
}
