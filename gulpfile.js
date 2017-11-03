const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src('src/styles.scss')
               .pipe(sourcemaps.init())
               .pipe(sass().on('error', sass.logError))
               .pipe(rename('styles.css'))
               .pipe(sourcemaps.write('./'))
               .pipe(gulp.dest('dist/'))
});

gulp.task('watch', function() {
    gulp.watch('src/*.scss', ['sass']);
});