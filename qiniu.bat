@echo off
qshell qupload ./config/qiniu.json

function explorer(path, res) {
  var flag = 0;
  var files = fs.readdirSync(path)
  // console.log(path+'/'+files)
  for (let i = 0; i < files.length; i++) {
    console.log(files.length)
    var stat = fs.statSync(path + '/' + files[i]);
    // console.log(path + '/' + file)
    if (stat.isDirectory()) {
      // 如果是文件夹遍历
      // console.log(path + '/' + files[i])
       explorer(path + '/' + files[i], res);
    } else {
      // 读出所有的文件
      console.log(path + '/' + files[i])
      res.push(path + '/' + files[i]);
      if (files[i].includes('vendor') ) {
        console.log(res)
        return res
      }

    }
  }