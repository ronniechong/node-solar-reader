const webpack = require('webpack');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});
module.exports = {
  devtool: 'eval-source-map',
  entry: ['./src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/app',
    publicPath: '/',
    filename: 'app.js'
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({}),
    new webpack.DefinePlugin(envKeys),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './app',
    hot: true,
    historyApiFallback: true,
  }
};
