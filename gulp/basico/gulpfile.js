const gulp = require('gulp')
const { series, parallel } = require('gulp')


function copying(callback) {
    //console.log('Copying task')
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
        // .pipe(transform()) create a 'pipeline' to work the files
        // .pipe(renderBW())
        .pipe(gulp.dest('pastaB'))

    return callback()
}

const before1 = callback => {
    console.log("A task before #1")

    return callback()

}
const before2 = callback => {
    console.log("A task before #2")

    return callback()
}

const end = callback => {
    console.log("The end")

    return callback()
}

module.exports.default = series(
    parallel(before1, before2),
    copying,
    end
)