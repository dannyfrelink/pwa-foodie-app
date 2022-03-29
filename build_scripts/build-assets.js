const gulp = require('gulp');

return gulp.src([
    './src/images/*.*',
    './src/manifest.json',
    './src/service-worker.js'
])
    .pipe(gulp.dest('./static/'));