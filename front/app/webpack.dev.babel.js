import { join } from 'path';
import { NamedModulesPlugin, HotModuleReplacementPlugin } from 'webpack';

import merge from 'webpack-merge';
import commonConfig from './webpack.common';

import { WDS_PORT } from './config';

export default merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    contentBase: join(__dirname, 'public'),
    historyApiFallback: true,
    compress: true,
    port: WDS_PORT,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  plugins: [new NamedModulesPlugin(), new HotModuleReplacementPlugin()]
});
