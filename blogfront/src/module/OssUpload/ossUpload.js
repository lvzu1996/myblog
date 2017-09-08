
var client = new OSS.Wrapper({
  // region: 'oss-cn-beijing',
  endpoint: 'oss-cn-beijing.aliyuncs.com',
  //云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，部署在服务端使用RAM子账号或STS，部署在客户端使用STS。
  accessKeyId: 'LTAI5RoJ6lXHDDJv',
  accessKeySecret: 'UQ5xgbjtwysBDBVUknFRRBFUVGKYDT',
  bucket: 'myblog-oss'
});



var result = client.multipartUpload('headpics/testhead2323231111.jpg',imgFile,)
  .then(function (re) {
    //  console.log(re);
   },function (re) {
     console.log(re);
   })
