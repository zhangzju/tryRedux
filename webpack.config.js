var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'app.jsx')
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['','.js','.jsx'],
    root: APP_PATH
  },
  devtool:'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: APP_PATH
      }
    ]
  },

  plugins: [
    new HtmlwebpackPlugin({
      title: 'My react start kit'
    })
  ]
}
