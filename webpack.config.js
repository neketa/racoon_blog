var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.join(__dirname, "dist"),
  CLIENT_DIR = path.join(__dirname, "src");


module.exports = {
  context: CLIENT_DIR,

  entry: "./main",

  output: {
    filename: "bundle.js",
    publicPath: '/',
    path: DIST_DIR
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {

    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-react-loader',
        query: {
          classIdPrefix: '[name]-[hash:8]__',
          filters: [
            function (value) {
              // ...
              this.update(newvalue);
            }
          ],
          propsMap: {
            fillRule: 'fill-rule',
            foo: 'bar'
          },
          xmlnsTest: /^xmlns.*$/
        }
      }
    ]
  },
};
