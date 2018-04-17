import { resolve } from 'path';

import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin';

export default {
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: 'app.[hash].bundle.js',
    path: resolve(__dirname, 'public')
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
      title: 'CFS4',
      template: 'index.ejs',
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin(),
    new CleanWebpackPlugin(['public'])
  ]
};
