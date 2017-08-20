const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  app: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  assets: path.join(__dirname, 'src/assets'),
}

const env = process.env.NODE_ENV
const isProd = env === 'production'

const commonConfig = {
  entry: {
    app: isProd ? PATHS.app : ['react-hot-loader/patch', PATHS.app],
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // {
      //   test: /\.(jpg|png|svg)$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 10,
      //   },
      // },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@': PATHS.app,
      assets: PATHS.assets,
    },
    modules: [PATHS.assets, 'node_modules'],
  },
}

const developmentConfig = {
  devServer: {
    // open: true,
    historyApiFallback: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only',

    // 0.0.0.0 is available to all network devices
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080

    hotOnly: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
}

const productionConfig = {}

module.exports = merge(
  commonConfig,
  isProd ? productionConfig : developmentConfig
)
