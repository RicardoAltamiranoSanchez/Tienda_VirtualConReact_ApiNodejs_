const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode:'development',
  entry:  './public/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: [
new HtmlWebpackPlugin({
template:'./public/index.html',
filename:'index.html',
inject:'body',

}),
],
};