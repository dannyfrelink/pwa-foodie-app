const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.src([
    './src/js/modules/variables.js',
    './src/js/modules/loader.js',
    './src/js/modules/showSection.js',
    './src/js/modules/stopScanner.js',
    './src/js/modules/startScanner.js',
    './src/js/app.js'
])
    .pipe(uglify())
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./static/'))