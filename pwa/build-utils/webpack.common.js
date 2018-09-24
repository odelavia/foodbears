const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // create index.html file based off template in src
const CleanWebpackPlugin = require('clean-webpack-plugin'); // deletes old dist folder for clean build

module.exports = {
  entry: { main: './index.js' },
  output: {
    path: path.join(__dirname, '../'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name]-[hash:4].[ext]',
                    // publicPath: 'src/assets/images/'
                },
            },
        ]
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './index.html',
      filename: 'index.html',
    }),
  ],
};
