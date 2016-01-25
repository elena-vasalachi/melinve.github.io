var gulp = require('gulp');
var nano = require('gulp-cssnano');
var sass = require('gulp-sass');

gulp.task('mincss', function() {
	return gulp.src('./main.css')
		.pipe(nano())
		.pipe(gulp.dest('./src/css/min'));
});

gulp.task('sass', function() {
	return gulp.src('src/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./src/css'));
});