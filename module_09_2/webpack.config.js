const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log('__dirname !!!!!!!!!!!', __dirname);

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    filename: 'webpack.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [{ test: /\.css$/, use: 'css-loader' }],
  },

  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
};
