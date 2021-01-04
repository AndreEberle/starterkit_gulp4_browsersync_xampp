var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function(){
    browserSync.init({
        proxy: 'localhost/dev/dist', // Change the path to your xampp project here
        browser: 'chrome',
        files: [
            "css/*.css", "*.php", "*.html", "js/*.js"
        ]
    });
});

gulp.task('dev', gulp.series('browserSync', function(){
    //default task
}));