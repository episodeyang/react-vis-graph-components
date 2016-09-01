/** copied by ge on 6/16/16 from https://github.com/episodeyang/gittor */
var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var md = require('markdown-it')();
var hljs = require('highlight.js');
// to get post-css loader to work with node 0.10.x
require('es6-promise').polyfill();

const build_entry = {
  server: './src/example/server.js'
};

module.exports = {
  entry: build_entry,
  target: 'node',
  output: {
    path: 'dist/example/', //path.join(__dirname, 'gittor'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    noParse: [
      /autoit\.js$/
    ],
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'source-map'
      }
    ],
    loaders: [
      {
        test: /\.html$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'file?[name].[ext]'
      },
      {
        test: /react-highlight\.js\/dist\/main\.js$/,
        loader: 'source-map'
      },
      // {
      //   // remove the source-map urls from the rxjs library.
      //   test: /rxjs\/(.*)\.js$/,
      //   loaders: ['source-map']
      // },
      // {
      //   // ES6 npm modules
      //   test: /luna\-saga\/(.*)\.js$/,
      //   loaders: ['babel-loader']
      // },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel-loader'] // 'regenerator', for generator syntax
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'postcss-loader', 'sass']
      },
      {
        test: /\.md$/,
        loaders: ['html', 'markdown-it']
      },
      // {
      //   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'file'
      // },
      // {
      //   test: /\.(woff|woff2)$/,
      //   loader: 'url?prefix=font/&limit=5000'
      // },
      // {
      //   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'url?limit=10000&mimetype=application/octet-stream'
      // },
      // {
      //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'url?limit=10000&mimetype=image/svg+xml'
      // },
      // {
      //   test: /\.gif/,
      //   loader: 'url-loader?limit=10000&mimetype=image/gif'
      // },
      // {
      //   test: /\.jpg/,
      //   loader: 'url-loader?limit=10000&mimetype=image/jpg'
      // },
      // {
      //   test: /\.png/,
      //   loader: 'url-loader?limit=10000&mimetype=image/png'
      // }
    ]
  },
  'markdown-it': {
    html: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class='
          hljs
          '><code>' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>';
        } catch (__) {
        }
      }

      return '<pre class='
      hljs
      '><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
  },
  postcss: function () {
    return [precss, autoprefixer];
  },
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
};
