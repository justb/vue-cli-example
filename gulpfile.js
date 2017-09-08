var gulp = require('gulp')

gulp.task('default', function () {
  console.log('this is the default task')
})

var exec = require('gulp-exec');

gulp.task('npm-build', function () {
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
  return gulp.src('')
    .pipe(exec('npm run build', options))
    .pipe(exec.reporter(reportOptions));
});

gulp.task('upload-qiniu', ['npm-build'],function () {
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
  return gulp.src('')
    .pipe(exec('node qiniu.js', options))
    .pipe(exec.reporter(reportOptions));
});

gulp.task('upload-server', ['npm-build','upload-qiniu'],function () {
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
  return gulp.src('')
    .pipe(exec('scp -r dist/index.html root@s:/var/www/wechat/public/', options))
    .pipe(exec.reporter(reportOptions));
});

gulp.task('build', [ 'npm-build', 'upload-qiniu','upload-server' ]);