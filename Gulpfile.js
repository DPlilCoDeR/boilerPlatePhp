//Init dependencies
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

//Module tasks

// run phpunit tests
gulp.task('suite-boilerplate', function() {
    gulp.src('')
    var options = {debug: true};
    gulp.src('phpunit.xml')
        .pipe(plugins.phpunit('./vendor/bin/phpunit',options));
});
//clear screen everytime tasks is performed
gulp.task('clear', function () {
    gulp.src('').pipe(plugins.run('clear'));
});

// watch files to run tests on the fly once they are modified
gulp.task('watch-suite-boilerplate', function () {
    return gulp.watch([
        'tests/BoilerPlateTest/BoilerPlateTest.php',
        'src/BoilerPlate/BoilerPlate.php'
        ], {base: './'},
        ['suite-boilerplate']);
});

// default task: clear screen, run test, watch files for modifications
gulp.task('default', ['clear','suite-boilerplate', 'watch-suite-boilerplate']);