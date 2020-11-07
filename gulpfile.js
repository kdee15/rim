const gulp = require('gulp');
const sass = require('gulp-sass');
const order = require("gulp-order");
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const purgecss = require('gulp-purgecss');
const htmlPartial = require('gulp-html-partial');

// Folders
const paths = {
    build_scss: 'build/scss/**',
    dist_css: 'dist/css',
    build_js: 'build/js/scripts/**',
    dist_js: 'dist/js',
    HtmlFolder: 'build/html/**/*',
    HtmlDest: 'static-html',
    libraries_css: 'build/scss/libraries/*.css',
    libraries_js: 'build/js/libraries/*.js'
};

// Compile SCSS
function compile_css(cb) {
    return gulp.src([paths.libraries_css, paths.build_scss])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error',sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest(paths.dist_css))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([ autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))    
    .pipe(gulp.dest(paths.dist_css));
}

// Compile JS
function compile_js(cb) {
    return gulp.src([paths.libraries_js, paths.build_js])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(gulp.dest(paths.dist_js))
    .pipe(terser())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist_js));
    cb();
}

// Compile HTML
function build_html(cb) {
    return gulp.src(paths.HtmlFolder)
      .pipe(htmlPartial({
          basePath: 'build/html/'
      }))
      .pipe(gulp.dest(paths.HtmlDest));
    cb();
}

// Watch for changes
function watch() {
    gulp.watch([paths.libraries_css, paths.build_scss], compile_css);
    gulp.watch([paths.libraries_js, paths.build_js], compile_js);
    gulp.watch([paths.HtmlFolder], build_html);
}

// Deploy Function
function deploy(cb) {
    compile_css();
    compile_js();
    cb();
}

// Export functions
exports.deploy = deploy;
exports.default = watch;
