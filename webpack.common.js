const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      { test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader' },
      {
        test: /\.(ico)$/,
        exclude: /node_modules\//,
        use: {
          loader: 'url-loader',
          options: {
            name: 'images/[hash]-[name].[ext]'
          }
        }
      },
      {
        test: /\.(jpg|png)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
};