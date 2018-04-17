import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import merge from 'webpack-merge';
import commonConfig from './webpack.common';

export default merge(commonConfig, {
  mode: 'production',
  plugins: [new UglifyJSPlugin()]
});
