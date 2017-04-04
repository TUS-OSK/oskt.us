const marked = require('gulp-marked')
const gulp = require('gulp')

const config = {
  src: '../page/**/*.md',
  dist: '../public/page'
}

gulp.task('build', () => {
  gulp.src(config.src)
    .pipe(marked({
      highlight: (code) => {
        return require('highlight.js').highlightAuto(code).value
      }
    }))
    .pipe(gulp.dest(config.dist))
})

gulp.task('watch', () => {
  gulp.watch(config.src, ['build'])
})
