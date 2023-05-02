const gulp = require('gulp')
//const { series } = require('gulp')
const series = gulp.series

function copying(callback) {
    console.log('Copying task')

    return callback()
}

module.exports.default = series(copying)