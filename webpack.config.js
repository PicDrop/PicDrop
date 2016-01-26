var webpack = require('webpack');

module.exports = {
  entry: {
    'client/bundle': [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './client/Entry.js',
    ],
    'extension/bundle': './extension/extension.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel',
        // query: {
        //   presets: ['es2015', 'react']
        // }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/public/',
    publicPath: '/client',
    filename: '[name].js'
  },
  devServer: {
    contentBase: './public/client',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};