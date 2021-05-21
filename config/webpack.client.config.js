const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

const MODE = 'development';

module.exports = {
  // @ts-ignore
  name: 'client',
  mode: MODE,
  devtool: 'inline-source-map',
  entry: {
    index: [path.join(__dirname, '..', 'src', 'client', 'index.tsx')],
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    publicPath: '/assets/',
    filename: MODE === 'development' ? '[name].js' : '[name].[hash:8].js',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[id].[hash:8].js',
  },
  plugins: [
    new LoadablePlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'src', 'public', 'index.html'),
      inject: true,
      scriptLoading: 'defer',
    }),
    new MiniCssExtractPlugin(
      {
        filename: MODE === 'development' ? '[name].css' : '[name].[hash].css',
      },
    ),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        use: ['babel-loader'],
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.pcss'],
        },
      },
      {
        test: /\.pcss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname),
              },
            },
          },
        ],
      },
    ],
  },
};
