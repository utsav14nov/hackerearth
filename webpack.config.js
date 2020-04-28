var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    filename:'index.html',
    template:__dirname + '/public/index.html'
  }),
  new CopyPlugin([
    {
        from: __dirname + '/public',
        to: __dirname + '/dist',
    }
  ])
   ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: __dirname + '/dist',
    host:'localhost',
    port:3000,
    historyApiFallback: true
  }
};