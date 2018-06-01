const gulp = require('gulp')
const markdown = require('gulp-markdown')
const rename = require('gulp-rename')

const config = {
  src: '../page/**/*.md',
  dist: '../public/page'
}

gulp.task('build', () => {
  gulp.src(config.src)
    .pipe(markdown({
      highlight: (code) => {
        return require('highlight.js').highlightAuto(code).value
      }
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest(config.dist))
})

gulp.task('watch', ['build'], () => {
  gulp.watch(config.src, ['build'])
})
