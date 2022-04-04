const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.src([
    './src/js/*.js'
])
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./static/'))

gulp.src([
    './src/js/modules/*.js'
])
    .pipe(gulp.dest('./static/modules'))