// NOTE: Can be used by webpack plugin to load
// sass so compoments using variables dont cause
// error during processing

const path = require("path")

const resources = [
  "_variables.sass",
  "_mediaQueries.sass",
  "_mixins.sass",
  "_base.sass"
]

module.exports = resources.map(file => path.resolve(
  __dirname, 'sass/common/' + file)
)
