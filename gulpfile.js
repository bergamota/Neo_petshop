'use strict';
 
var gulp = require( 'gulp' );
var sass = require('gulp-sass');



gulp.task('sass', function () {
return   gulp.src('./resources/sass/style.scss')
       .pipe(sass({ includePaths : [
       	'./resources/sass/', 
       	'./node_modules/sweetalert2/src/sweetalert2/',
       	'./node_modules/inputmask/css/inputmask/',
       	'./node_modules/slick-carousel/slick/',
       	'./resources/sass/default/theme/'
       	] }))
       .pipe(gulp.dest('./assets/css'));
});
 

gulp.task('default', ['sass']);
