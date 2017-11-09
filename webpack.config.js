var HTMLWedpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWedpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: __dirname + '/index.jsx',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/builds'
  },
  plugins: [HTMLWebpackPluginConfig]
};
