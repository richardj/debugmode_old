'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('compress', function() {
  return gulp.src('debugmode.js')
  .pipe(uglify())
  .pipe(rename('debugmode.min.js'))
  .pipe(gulp.dest('dist'));
});


/* watch functions */
gulp.task('watch', function() {
  gulp.watch('debugmode.js', ['compress']);
});

gulp.task('default', ['watch']);
