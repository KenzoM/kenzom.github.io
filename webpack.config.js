var path = require('path');
var webpack = require('webpack');
module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },{
      test: /\.s?css$/,
      loaders: ['style','css','sass'],
      include: path.join(__dirname, 'src')
    },{
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ],
      include: path.join(__dirname, 'src/image')
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify("production")
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
    'jquery': path.join(__dirname, 'node_modules/jquery/dist/jquery'),
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
