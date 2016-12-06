
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync').create();

var bourbon = require("node-bourbon").includePaths;
var neat = require("node-neat").includePaths;
 




// sass task
gulp.task('sass', function () {
  return gulp.src('./sass/*.+(sass|scss)')


     .pipe(sass({
        includePaths: bourbon,
        includePaths: neat
      }))

    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});


// browser-sync
gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css","js/*.js","jsp/*.jsp","*.html", "img/"],{
        server: {
            baseDir: "./"
        }
    });
});



//watch Task
//watch 
gulp.task('watch',function(){
    gulp.watch('sass/*.scss', ['sass']);
})

gulp.task('default', ['sass', 'watch', 'browser-sync']);



