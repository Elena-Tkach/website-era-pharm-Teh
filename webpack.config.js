const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'script.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].js',
    assetModuleFilename: 'img/[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'contacts.html'),
      filename: 'contacts.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'aboutus.html'),
      filename: 'aboutus.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'avtoclav.html'),
      filename: 'avtoclav.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'control.html'),
      filename: 'control.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'disposable.html'),
      filename: 'disposable.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'small.html'),
      filename: 'small.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'steril.html'),
      filename: 'steril.html',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/img'),
          to: path.resolve(__dirname, 'dist/img'),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(jpg|png|svg|jpeg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      // {
      //   test: /\.(jpe?g|png|webp|gif|svg)$/i,
      //   use: [
      //     {
      //       loader: 'image-webpack-loader',
      //       // options: {
      //       //   mozjpeg: {
      //       //     progressive: true,
      //       //   },
      //       //   optipng: {
      //       //     enabled: false,
      //       //   },
      //       //   pngquant: {
      //       //     quality: [0.65, 0.90],
      //       //     speed: 4
      //       //   },
      //       //   gifsicle: {
      //       //     interlaced: false,
      //       //   },
      //       //   webp: {
      //       //     quality: 75
      //       //   },
      //       // }
      //     }
      //   ],
      //   type: 'asset/resource',
      // },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
