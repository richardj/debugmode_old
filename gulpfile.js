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



/* Redacted Font tasks */
gulp.task('redactedFont', function() {
  return gulp.src('./bower_components/Redacted-Font/fonts/web/redacted-regular.*')
  .pipe(gulp.dest('./dist/font/'))
});

/* set up demo */
gulp.task('demoFonts', function() {
  return gulp.src('./bower_components/Redacted-Font/fonts/web/redacted-regular.*')
  .pipe(gulp.dest('./demo/font/'))
});

/* watch functions */
gulp.task('watch', function() {
  gulp.watch('debugmode.js', ['compress']);
});

gulp.task('default', ['watch']);
gulp.task('redacted', ['redactedFont', 'redactedStyles']);
gulp.task('demo', ['demoFonts']);
