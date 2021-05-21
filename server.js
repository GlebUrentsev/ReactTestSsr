const express = require('express');
const path = require('path');
const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const webpackHotClient = require('webpack-hot-client');
const clientConfig = require('./config/webpack.client.config');
const serverConfig = require('./config/webpack.server.config');
const multiCompiler = webpack([clientConfig, serverConfig]);
const outputPath = clientConfig.output.path;
const publicPath = clientConfig.output.publicPath;

const clientHot = webpackHotClient(multiCompiler.compilers[0]);
const { server } = clientHot;

server.on('listening', () => {
  app.use(webpackDevMiddleware(multiCompiler, {
    serverSideRender: true
  }));

  app.use(webpackHotServerMiddleware(multiCompiler, {
    chunkName: 'server',
    serverRendererOptions: { outputPath }
  }));
});

app.listen(3000, () => {
  console.log(`Server started on http://localhost:${3000}`);
});