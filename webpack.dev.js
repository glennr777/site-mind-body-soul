const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common.js');

const mapsAPIKey = 'AIzaSyAD8DxGFKa-SaBTbw_xZX3aSrjZfoyL9B8&';

const config =
  merge(common, {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
          template: './src/index.template.ejs',
          inject: 'html',
          inlineSource: '.(js|css)$',
          templateParameters: {
            mapsAPIKey: '',
          }
        }),
      ],
  });

module.exports = config;