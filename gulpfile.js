
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compileSass() {
  return gulp.src('main.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
}

function compressImages() {
  return gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
}

function compressJavaScript() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
}

const build = gulp.parallel(
  compileSass,
  compressImages,
  compressJavaScript
);

exports.compileSass = compileSass;
exports.compressImages = compressImages;
exports.compressJavaScript = compressJavaScript;
exports.default = build;
