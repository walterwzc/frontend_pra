require('babel-register')
const path = require('path')

var fs = require('fs')
var babelConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '../.babelrc')))
require('babel-register')(babelConfig)
require('./14.01.func.js')
