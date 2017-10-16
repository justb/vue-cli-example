var gulp = require('gulp')
var wexec = require('child_process').exec;
var exec = require('gulp-exec');
var shell = require('gulp-shell')

gulp.task('default', function () {
  console.log('this is the default task')
})

var options = {
  continueOnError: false, // default = false, true means don't emit error event 
  pipeStdout: false, // default = false, true means stdout is written to file.contents 
  customTemplatingThing: "test" // content passed to gutil.template() 
};
var reportOptions = {
  err: true, // default = true, false means don't write err 
  stderr: true, // default = true, false means don't write stderr 
  stdout: true // default = true, false means don't write stdout 
}


gulp.task('npm-build', function () {
  return gulp.src('')
    .pipe(exec('npm run build', options))
    .pipe(exec.reporter(reportOptions));
});

gulp.task('upload-qiniu', ['npm-build'],function () {
  return gulp.src('')
    .pipe(exec('node zz/qiniu.js', options))
    .pipe(exec.reporter(reportOptions));
});

gulp.task('upload-server',['npm-build','upload-qiniu'],function () {
  var b = 'dist/index.html'
  var a= `scp -r ${b} root@s:/var/www/vue/public/`
  return gulp.src('')
    .pipe(exec(a, options))
    .pipe(exec.reporter(reportOptions));
});



gulp.task('refresh', function (cb) {
  wexec('node zz/refresh.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('prefetch', ['refresh'], function (cb) {
  wexec('node zz/prefetch.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})


gulp.task('build', [ 'npm-build', 'upload-qiniu','upload-server' ]);

gulp.task('cdn', [ 'refresh', 'prefetch' ]);
