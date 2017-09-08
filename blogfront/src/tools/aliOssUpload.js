var OSS = require('ali-oss');
var co = require('co');

// var config = require('../../config/index.js')

// var client = config.client
var client = new OSS({
  region: 'oss-cn-beijing',
  //云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，部署在服务端使用RAM子账号或STS，部署在客户端使用STS。
  accessKeyId: 'LTAI5RoJ6lXHDDJv',
  accessKeySecret: 'UQ5xgbjtwysBDBVUknFRRBFUVGKYDT',
  bucket: 'myblog-oss'
});


var route = 'headpics'
var name = 'testhead.jpg'
var img = '../static/avatar.jpg'

co(function* () {
  var result = yield client.put('headpics/testhead232311123.jpg', '../static/avatar.jpg');
  console.log(result);
}).catch(function (err) {
  console.log(err);
});

//
// co(function* () {
//   var result = yield client.listBuckets();
//   console.log(result);
//   var result = yield client.listBuckets({
//     prefix: 'prefix'
//   });
//   console.log(result);
// }).catch(function (err) {
//   console.log(err);
// });
