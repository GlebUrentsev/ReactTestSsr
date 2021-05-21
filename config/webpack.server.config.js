const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const mode = 'development';

module.exports = {
  // @ts-ignore
  name: 'server',
  mode,
  target: 'node',
  devtool: 'inline-source-map',
  entry: {
    server: [path.join(__dirname, '..', 'src', 'server', 'app.tsx')],
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    publicPath: '/assets/',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()],
  node: {
    __dirname: false,
    __filename: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader'],
        resolve: {
          extensions: ['.ts', '.tsx', '.js'],
        },
      },
    ],
  },
};
