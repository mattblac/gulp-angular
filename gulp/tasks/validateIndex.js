var gulp = require('gulp');
var util = require('gulp-util');

gulp.task('validated-index', function() {
	return gulp.src(paths.index)
        .pipe(plugins.htmlhint())
        .on('end', function() { util.log('Testing')})
        .pipe(plugins.htmlhint.reporter());
});