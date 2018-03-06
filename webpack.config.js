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
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/builds'
  },
  plugins: [HTMLWebpackPluginConfig]
};
// var path = require('path');
//
// module.exports = {
//   entry: './client/components/App',
//   output: {
//     filename: 'bundle.js',
//     path: path.join(__dirname, 'public/dist')
//   },
//   module: {
//     rules: [
//       { test: /\.(js|jsx)$/,
//         include: path.join(__dirname, 'client'),
//         exclude: ['node_modules'],
//         use: [
//           { loader: 'babel-loader',
//             options: {
//               presets: ['react', 'es2015']
//             }
//           }
//         ]
//       },
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: 'style-loader'
//           },
//           {
//             loader: 'css-loader',
//             query: {
//               modules: true,
//               localIdentName: '[name]__[local]___[hash:base64:5]'
//             }
//           }
//         ]
//       }
//     ]
//   }
// };
