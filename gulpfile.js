var gulp = require('gulp')
// var exec = require('child_process').exec;
var exec = require('gulp-exec');

gulp.task('default', function () {
  console.log('this is the default task')
})

const shell = require('gulp-shell')

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
    .pipe(exec('node zzcdn/qiniu.js', options))
    .pipe(exec.reporter(reportOptions));
});

gulp.task('upload-server', ['npm-build','upload-qiniu'],function () {
  return gulp.src('')
    .pipe(exec('scp -r dist/index.html root@s:/var/www/wechat/public/', options))
    .pipe(exec.reporter(reportOptions));
});

gulp.task('refresh', function (cb) {
  // exec('echo "/v2/tune/refresh" |openssl dgst -binary -hmac "zs5E454laPxsVe3pVppClFXYgjcX1_k7Dkk82htq" -sha1 |base64 | tr + - | tr / _', function (err, stdout, stderr) {
  //   console.log(stdout);
  //   console.log(stderr);
  //   cb(err);
  // });
  var options = {
    continueOnError: false, // default = false, true means don't emit error event 
    pipeStdout: true, // default = false, true means stdout is written to file.contents 
    customTemplatingThing: "test" // content passed to gutil.template() 
  };
  var reportOptions = {
    err: true, // default = true, false means don't write err 
    stderr: true, // default = true, false means don't write stderr 
    stdout: true // default = true, false means don't write stdout 
  }
  return gulp.src('')
  // .pipe(exec('echo "/v2/tune/refresh" |openssl dgst -binary -hmac "zs5E454laPxsVe3pVppClFXYgjcX1_k7Dkk82htq" -sha1 |base64 | tr + - | tr / _', options,function(err,stdout,stderr){
  //   console.log(err,stdout,stderr)
    
  // }))
  .pipe(exec(`curl -X POST -H "Authorization: QBox D0kBjb8UpWlNtfKDUwkPkG1m1oIHE6mpnYIa3Yvw:$( echo "/v2/tune/refresh" |openssl dgst -binary -hmac "zs5E454laPxsVe3pVppClFXYgjcX1_k7Dkk82htq" -sha1 |base64 | tr + - | tr / _  &>/dev/null)=" http://fusion.qiniuapi.com/v2/tune/refresh -d '{"urls":["http://
  image.kim1.kim/index.html"]}' -H 'Content-Type: application/json'`, options).pipe(exec.reporter(reportOptions)))
  // .pipe(exec(`curl -X POST -H "Authorization: QBox D0kBjb8UpWlNtfKDUwkPkG1m1oIHE6mpnYIa3Yvw:KGF8GObqnwU_VjKpLBdx_f63hpY=" http://fusion.qiniuapi.com/v2/tune/refresh -d '{"urls":["http://
  // image.kim1.kim/index.html"]}' -H 'Content-Type: application/json'`, options))
  .pipe(exec.reporter(reportOptions));
})

gulp.task('task', function (cb) {
  exec('ping localhost', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})


gulp.task('refresh', function () {
  return gulp.src('')
    .pipe(exec(`echo "/v2/tune/refresh" |openssl dgst -binary -hmac $(node -pe "JSON.parse(process.argv[1]).sk" "$(cat config/qiniu.json)") -sha1 |base64 | tr + - | tr / _ > zzcdn/token`, options))
    // .pipe(exec(`curl -X POST -H "Authorization: QBox D0kBjb8UpWlNtfKDUwkPkG1m1oIHE6mpnYIa3Yvw:$(<zzcdn/token)" http://fusion.qiniuapi.com/v2/tune/refresh -d '{"urls":["http://www.kim1.kim/index.html"]}' -H 'Content-Type: application/json'`), options)
    .pipe(exec.reporter(reportOptions));
});

gulp.task('example', () => {
  return gulp.src('*.js', {read: false})
  .pipe(shell([
    'echo "/v2/tune/refresh" |openssl dgst -binary -hmac zs5E454laPxsVe3pVppClFXYgjcX1_k7Dkk82htq -sha1 |base64 | tr + - | tr / _ > zzcdn/token'
  ]))
})

gulp.task('build', [ 'npm-build', 'upload-qiniu','upload-server' ]);
