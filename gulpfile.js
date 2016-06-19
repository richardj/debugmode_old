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

gulp.task('generateDemo', function() {
  // copy the folder with the font fyles
  // create the needed styles
});

gulp.task('redactedFont', function() {
  return gulp.src('./bower_components/Redacted-Font/fonts/web/redacted-regular.*')
  .pipe(gulp.dest('./dist/font/'))
});

/* Redacted Font tasks */
gulp.task('redactedStyles', function() {
  gulp.src('./bower_components/Redacted-Font/fonts/web/stylesheet.css')
  .pipe(gulp.dest('./dist/style/'))
});


/* watch functions */
gulp.task('watch', function() {
  gulp.watch('debugmode.js', ['compress', 'generateDemo']);
});


gulp.task('default', ['watch']);
gulp.task('redacted', ['redactedFont', 'redactedStyles']);
