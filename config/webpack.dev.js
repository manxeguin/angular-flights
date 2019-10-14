const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const path = require('path');

module.exports = webpackMerge(commonConfig, {
  mode: 'development',
  watch: true,
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    port: 9000
  },
});
