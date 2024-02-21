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
        test: /\.(jpe?g|png)$/,
        type: 'asset',
        generator: {
          filename: 'images/[hash]-[name].[ext]'
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

// https://www.freepik.com/free-ai-image/vibrant-colorful-bouquet-showcases-nature-summer-beauty-generated-by-ai_41055733.htm#from_view=detail_alsolike