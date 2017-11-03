const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

// Default task
gulp.task('default', ['sass', 'copy']);

// Copy assets from ./src to ./dist
gulp.task('copy', function() {
    gulp.src('src/logo.svg')
        .pipe(gulp.dest('dist/'));
})

// Compile ./src Sass files to ./dist
gulp.task('sass', function() {
    return gulp.src('src/styles.scss')
               .pipe(sourcemaps.init())
               .pipe(sass().on('error', sass.logError))
               .pipe(rename('styles.css'))
               .pipe(sourcemaps.write('./'))
               .pipe(gulp.dest('dist/'))
});

// Watch for .scss changes and re-compile Sass
gulp.task('watch', function() {
    gulp.watch('src/*.scss', ['sass']);
});