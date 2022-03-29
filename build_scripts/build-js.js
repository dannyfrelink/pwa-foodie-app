const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.src([
    './src/js/*.js'
])
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./static/'))