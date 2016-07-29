var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var distDir = 'public';
var srcDirs = ['app/**/**/*.js', 'app/**/*.js', 'app/*.js'];
var templateDir = ['app/templates/*.html', 'app/templates/**/*.html'];

// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src(srcDirs)
    .pipe(concat('all.js'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(distDir));
});

gulp.task('templates', function(){
  var distTemplateDir = distDir + '/templates';
  return gulp.src(templateDir)
    .pipe(gulp.dest(distTemplateDir));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch(srcDirs, ['scripts']);
  gulp.watch(templateDir, ['templates']);
});

// Default Task
gulp.task('default', ['scripts', 'templates', 'watch']);
