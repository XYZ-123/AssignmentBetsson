var gulp = require("gulp");

gulp.task('watch', ['build'], function() {
  gulp.watch('./FlickrTest/Scripts/*.js', ['javascript']);
  gulp.watch('./FlickrTest/Content/*.css', ['css']);
  gulp.watch('./FlickrTest/Static/*.*', ['static']);
});
