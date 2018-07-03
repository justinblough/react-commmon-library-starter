
/* eslint-disable import/no-extraneous-dependencies */

const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

const basePath = path.resolve(__dirname + '../../')

module.exports = {
  module: {
    rules: [
      // Transform all ES6 files to plain old ES5.
      {
        test: /^(?!.*\.spec\.js$).*\.(js|jsx)$/,
        exclude: [/node_modules/, /dist/],
        use: ['babel-loader'],
        include: [`${basePath}/src`],
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../../src/components')
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader'
      }
    ]
  }
}
