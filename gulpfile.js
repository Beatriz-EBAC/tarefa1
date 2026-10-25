

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// 1. Compilar SASS para CSS
function compileSass() {
  return gulp.src('main.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
}

// 2. Comprimir as imagens que estão na raiz
function compressImages() {
  return gulp.src(['*.jpg', '*.png'])
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
}

// 3. Comprimir JavaScript
function compressJavaScript() {
  return gulp.src('js/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
}

// Executar as três tarefas
const build = gulp.parallel(
  compileSass,
  compressImages,
  compressJavaScript
);

// Disponibilizar as tarefas
exports.compileSass = compileSass;
exports.compressImages = compressImages;
exports.compressJavaScript = compressJavaScript;
exports.default = build;
