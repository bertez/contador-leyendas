import { resolve } from 'path';

import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin';

import { IS_PROD, SCRIPT_PATH } from './config';

export default {
  entry: {
    main: ['babel-polyfill', './src/app.js']
  },
  output: {
    filename: 'app.[hash].bundle.js',
    path: resolve(__dirname, 'public'),
    publicPath: IS_PROD ? '/' : SCRIPT_PATH
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [
              'env',
              {
                targets: {
                  browsers: ['last 2 versions']
                },
                modules: false,
                loose: true
              }
            ],
            'react'
          ]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'El contador de leyendas',
      template: 'index.ejs',
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin(),
    new CleanWebpackPlugin(['public'])
  ]
};
