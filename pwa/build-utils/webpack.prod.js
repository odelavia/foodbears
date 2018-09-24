const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // compress/minify js
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // create separate css file for production
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // minifies css files
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            'sass-loader'
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.[hash:4].css',
      disable: false,
      allChunks: true,
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    }),
    new UglifyJSPlugin({
      test: /\.js($|\?)/i,
      sourceMap: true,
    }),
  ],
  devtool: 'source-map',
});
