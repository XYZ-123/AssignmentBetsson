var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('vendor', function() {
  return gulp.src(['./node_modules/angular/angular.js', 
  './node_modules/angular-sanitize/angular-sanitize.min.js', 
  './node_modules/ngstorage/ngstorage.min.js']).pipe(concat("vendor.js"))
    .pipe(gulp.dest('./FlickrTest/build/javascript'));
});