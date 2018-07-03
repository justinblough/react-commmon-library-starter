
/* eslint-disable import/no-extraneous-dependencies */

const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

const basePath = path.resolve(__dirname + '../../../')



const webpackConfig = {
  target: 'web',
  mode: 'development',
  entry: {
    commonComponents: `${basePath}/src/js/components/index.js`
  },
  output: {
    path: `${basePath}/dist`,
    filename: `scripts/[name].bundle.js`
  },
  devtool: "source-map",
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react'],
                    plugins: [
                      'babel-plugin-transform-class-properties',
                      'babel-plugin-transform-object-rest-spread'
                    ]
                }
            }
        ]
      },
      // Extract css files
      {
        test: /\.(css|sass|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: require(
                path.resolve(__dirname + "/../../styles/sass/common/common.js")
              )
            }
          }
        ],
      },
      // Images
      // {
      //   test: /\.(jpe?g|gif|png|svg)$/,
      //   exclude: path.resolve(__dirname, 'node_modules'),
      //   use: 'file-loader?name=[path][name].[ext]'
      // },
      // html
      // {
      //   test: /\.html$/,
      //   exclude: path.resolve(__dirname, 'node_modules'),
      //   use: 'file-loader?name=[path][name].[ext]&context=./dist/pages'
      // },
      // // other stuff in the root
      // {
      //   test: /\.(php|json|htaccess)$/,
      //   exclude: path.resolve(__dirname, 'node_modules'),
      //   use: 'file-loader?name=[path][name].[ext]&context=./dist'
      // }
    ]
  }
}
module.exports = webpackConfig
