const gulp = require('gulp');

return gulp.src([
    'images/*.*'
])
    .pipe(gulp.dest('./static/'));