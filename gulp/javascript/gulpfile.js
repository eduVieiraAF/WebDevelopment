const { series } = require('gulp')
const gulp = require('gulp')
const contat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function convertJS() {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(contat('code.min.js'))
        .pipe(gulp.dest('build'))

}

function end(cb) {
    console.log("End of script")
    return cb()
}

exports.default = series(convertJS, end)