var gulp = require("gulp");

gulp.task('static', function() {
  return gulp.src('./FlickrTest/Static/*.*')
    .pipe(gulp.dest('./FlickrTest/build/static'));
});