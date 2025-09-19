const path = require('path');
const { rspack } = require('@rspack/core');

module.exports = {
    context: __dirname,
    entry: {
        main: './app/assets/js/main.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, './_site/static/')
    },
    plugins: [
        new rspack.CssExtractRspackPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        }),
        new rspack.CopyRspackPlugin({
            patterns: [{from: './app/assets/fonts', to: './fonts', noErrorOnMissing: true}, {from: './app/assets/images', to: './images', noErrorOnMissing: true}]
        })
    ],
    module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ["@babel/preset-env", {
                  useBuiltIns: "usage",
                  corejs: 3,
                }]
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          rspack.CssExtractRspackPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              url: false
            }
          },
          'postcss-loader'
        ],
        type: 'javascript/auto'
      },
    ]
  },
}