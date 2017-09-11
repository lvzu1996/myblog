/*
 @Author:lvzu
 @Date:2017/9/11

 本文件是阿里云OSS上传功能组件,输出一个async function

  * @param username 作为请求stsToken的session_name 本例设置为用户名
  * @param t vue指针this
  * @param imgFile 上传至aliyunOSS的图片对象，必须为文件对象
  asyncUpload(username , t , imgFile)
 */

import _config_ from '../../../config'

var ossConfig = _config_._ossConfig_

var asyncUpload = async function (username,t,imgFile,){

  var client,credentials

  await fetch(`http://${ossConfig.hostname}/api/getSTStoken?session_name=${username}`, {
      method: 'get',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
    })
    .then(re => re.json())
    .then(re => {
      credentials = re.data.Credentials
        client = new OSS.Wrapper({
        region: ossConfig.region,
        bucket: ossConfig.bucket,
        accessKeyId:credentials.AccessKeyId,
        accessKeySecret:credentials.AccessKeySecret,
        stsToken :credentials.SecurityToken
      });
    })

  var routename = ossConfig.ossFolder + username + '.jpg'

  await client.multipartUpload(routename,imgFile,)
  //resolve
  .then(function (re) {
     if(re.res.status === 200){
       //存头像地址
       t.form.headpic_url = re.res.requestUrls[0]
       fetch(`http://${t.hostname}/api/set_detailInfo`, {
           method: 'post',
           body: 'username=' + localStorage.username + '&name=' + '' + '&address=' + '' + '&birthday=' + '' + '&gender=' + '' + '&school=' + '' + '&headpic_url=' + t.form.headpic_url,
           headers: {
             "Accept": "application/json",
             "Content-Type": "application/x-www-form-urlencoded"
           },
         }).then(re => re.json())
         .then(re => {
           if(re.msg == "success"){
             t.$message({
               message: '头像上传成功',
               type: 'success'
             });
            setTimeout(function () {
              t.step = 3
            },1500)
           }else{
             this.$message({
               message: '头像信息储存失败，请刷新重试',
               type: 'error'
             });
           }
         })
     }
   },
   //reject
   function (re) {
     console.log('reject');
     t.$alert('别直接用样例头像啊喂(/ﾟДﾟ)/ ', '自己上传头像', {
        confirmButtonText: '确定',
        callback: action => {
          t.$message({
            type: 'info',
            message: '自拍一张上传啊，肯定比她萌'
          });
        }
      });
    })

}

export default asyncUpload
