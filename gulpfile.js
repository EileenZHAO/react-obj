var gulp = require('gulp');

var watch = require('gulp-watch');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var eslint = require('gulp-eslint');
//������õ�Ŀ¼���ļ�
var clean = require('gulp-clean');


//ת��
gulp.task('build', function () {
   return browserify('./source/app.jsx')
    // .transform(babelify)
    // .transform(babelify,{presets:["react"]})
    .transform(babelify,{presets:["es2015", "react"]})
    .bundle()
    .pipe(source('reactobj.js'))
    .pipe(gulp.dest('./public/'));
});

//�﷨���
gulp.task('lint',function () {
    return gulp.src(['./source/**/*.jsx','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

// Watch Our Files
gulp.task('watch', function() {
   gulp.watch(['source/*.jsx','source/**/*.jsx',
                'source/*.css','source/**/*.css' ], ['lint','build']);
});

//�������ļ�
gulp.task('clean', function() {
    return gulp.src(['./public/reactobj.js'], {read: false})
        .pipe(clean());
});

// 默认任务
gulp.task('default', ['watch','clean','build']);
