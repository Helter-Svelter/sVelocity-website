const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: '/index.html',
});
module.exports = {
  mode: process.env.NODE_ENV,
  entry: '/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    static: {
      publicPath: './dist/',
    },
    port: 8080,
    //proxy server setup
    proxy: {
      '/api/': 'http://localhost:3000',
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        loader: 'svelte-loader',
        options: {
          preprocess: require('svelte-preprocess')({ postcss: true }),
        },
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.svelte'],
  },
};
