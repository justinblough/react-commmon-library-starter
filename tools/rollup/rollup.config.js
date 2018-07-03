import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import sass from 'rollup-plugin-sass'
import replace from 'rollup-plugin-replace'
import copy from 'rollup-plugin-copy-glob'

const input = './src/index.js'
const name = 'components'
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
  'classnames/bind': 'cn',
}
const babelOptions = {
  exclude: '/node_modules/**',
  // We are using @babel/plugin-transform-runtime
  //runtimeHelpers: true,
  babelrc: false,
  presets: [
    ['env', {
      modules: false
    }],
    'react'
  ],
  plugins: [
    "external-helpers",
    "babel-plugin-transform-class-properties",
    "babel-plugin-transform-object-rest-spread"
  ]
}
const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
}
const cssExportMap = {}

export default [
  {
    input: input,
    output: {
      file: `dist/components/index.js`,
      name: name,
      format: 'umd',
      globals: globals,
      sourcemap: false,
    },
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
      postcss(),
      commonjs(commonjsOptions),
      babel(babelOptions),
      copy([
  //    { files: 'src/*.{html,css}', dest: 'dist' },
      { files: 'src/styles/sass/**/*', dest: 'dist/styles/' },
    ], { verbose: true })
    ],
  }
]
