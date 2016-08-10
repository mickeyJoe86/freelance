var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');


gulp.task('less', function () {
  return gulp.src(['/src/less/freelancer.less'])
    .pipe(less())
    .pipe(gulp.dest('/src/css'));
});

gulp.task('default', ['less']);