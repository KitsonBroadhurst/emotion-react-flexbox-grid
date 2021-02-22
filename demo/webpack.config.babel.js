const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: './index.jsx',
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js(x|)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [new webpack.NoEmitOnErrorsPlugin()],
  devServer: {
    contentBase: __dirname
  }
};
