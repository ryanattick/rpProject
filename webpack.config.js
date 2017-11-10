var HTMLWedpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWedpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});
var path = require('path');

module.exports = {
  entry: __dirname + '/index.js',
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        loader : 'babel-loader',
        query: {
          presets: ['react']
        },
      }
    ]
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/builds'
  },
  plugins: [HTMLWebpackPluginConfig]
};
