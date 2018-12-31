const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: true,
  title: 'd3-phy',
});

module.exports = {
  mode: 'development',
  entry: {
    app: './src/main.js',
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.(js)$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: path.resolve(__dirname, './postcss.config.js'),
              },
            },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      }, {
        test: /\.(ttf|gif|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
  ],
  devServer: {
    compress: true,
    port: 5000,
  },
};
