const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: '/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
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
