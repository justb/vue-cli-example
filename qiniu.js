var qiniu = require("qiniu");
//需要填写你的 Access Key 和 Secret Key
accessKey = 'D0kBjb8UpWlNtfKDUwkPkG1m1oIHE6mpnYIa3Yvw';
secretKey = 'zs5E454laPxsVe3pVppClFXYgjcX1_k7Dkk82htq';
//要上传的空间
bucket = 'kim2';
//上传到七牛后保存的文件名
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey)

var options = {
  scope: bucket,
};
var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken=putPolicy.uploadToken(mac);

var config = new qiniu.conf.Config();
// 空间对应的机房
config.zone = qiniu.zone.Zone_z0;

var localFile = "./qiniu.bat";
var formUploader = new qiniu.form_up.FormUploader(config);
var putExtra = new qiniu.form_up.PutExtra();
var key='qiniu.bat';
// 文件上传
formUploader.putFile(uploadToken, key, localFile, putExtra, function(respErr,
  respBody, respInfo) {
  if (respErr) {
    throw respErr;
  }
  if (respInfo.statusCode == 200) {
    console.log(respBody);
  } else {
    console.log(respInfo.statusCode);
    console.log(respBody);
  }
})

