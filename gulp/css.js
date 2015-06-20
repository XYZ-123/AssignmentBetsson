var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task('css', function() {
  return gulp.src('./FlickrTest/Content/*.css').pipe(concat("site.css"))
    .pipe(gulp.dest('./FlickrTest/build/css'));
});