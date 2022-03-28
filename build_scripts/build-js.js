const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.src([
    'scripts/*.js'
])
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./static/'))