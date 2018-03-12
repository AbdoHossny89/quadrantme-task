
var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');





 
gulp.task('minify-css', function() {
  return gulp.src('./css/**/*style.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});

