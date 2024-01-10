// aqui chama as funcionalidades dos gulp, gulp-sass, sass

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagimin = require('gulp-imagemin');

function styler(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}
function image(){
    return gulp.src('./src/images/**/*')
    .pipe(imagimin())
    .pipe(gulp.dest('./dist/imagens'));
}




exports.default = gulp.parallel(styler, image);
exports.watch = function (){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styler))
}