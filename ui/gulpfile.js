var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

gulp.task('sass', function(){
	return gulp.src('./scss/**/*.scss')
				.pipe(plumber({
					errorHandler: function(err){
						notify.onError({
							title: "Gulp Error in " + err.plugin,
							message: err.toString()
						})(err)
					}}))
				.pipe(sass())
				.pipe(gulp.dest('./css/'))
				.pipe(browserSync.stream());
});

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('default', ['browserSync','sass'] ,function(){
	gulp.watch('./scss/**/*.scss', ['sass']);
	gulp.watch('./**/*.html', browserSync.reload);
	gulp.watch('./js/**/*.js', browserSync.reload);
});