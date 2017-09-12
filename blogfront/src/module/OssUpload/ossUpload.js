/*
 @Author:lvzu
 @Date:2017/9/11

 本文件是阿里云OSS上传功能组件,输出一个async function

  * @param username 作为请求stsToken的session_name 本例设置为用户名
  * @param t vue指针this
  * @param imgFile 上传至aliyunOSS的图片对象，必须为文件对象
  asyncUpload(username , t , imgFile)
 */

//导入config文件中的OSS相关的设置
import _config_ from '../../../config'

var ossConfig = _config_._ossConfig_

//函数大体上分为两个部分
//第一个部分是从服务器请求临时accessKey，accessSecrete和stsToken
//第二个部分是通过第一步中请求到的临时秘钥访问阿里云oss，并进行头像的上传
var asyncUpload = async function (username,t,imgFile,){

  var client,credentials

  //从服务器请求临时accessKey，accessSecrete和stsToken
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

    //上传至oss时           文件夹      /  文件名    .文件后缀
  var routename = ossConfig.ossFolder + username + '.png'

  //上传头像，调用aliyunOSS的分片上传功能
  await client.multipartUpload(routename,imgFile,)
  .then(function (re) {
    // console.log(re);
    //如果上传成功
     if(re.res.status === 200){
       //从返回的数据中获取头像地址并储存至服务器数据库中
       t.form.headpic_url = re.res.requestUrls[0]
       fetch(`http://${t.hostname}/api/set_detailInfo`, {
           method: 'post',
           body: 'username=' + localStorage.username + '&name=' + '' + '&address=' + '' + '&birthday=' + '' + '&gender=' + '' + '&school=' + '' + '&headpic_url=' + t.form.headpic_url,
           headers: {
             "Accept": "application/json",
             "Content-Type": "application/x-www-form-urlencoded"
           },
         })
         .then(re => re.json())
         .then(re => {
           //如果头像地址储存成功
           if(re.msg == "success"){
             t.$message({
               message: '头像上传成功',
               type: 'success'
             });
            setTimeout(function () {
              t.step = 3
            },1500)
           }
           /** 储存失败
            * 这里会有一个问题，因为如果图片上传至aliyunOSS成功了但是
            * 保存到服务器失败了，aliyunOSS bucket中就会多一个无人认领的文件
           **/
           else{
             t.$message({
               message: '头像信息储存失败，请刷新重试',
               type: 'error'
             });
           }
         })
       }
     })
    //上传至oss失败
    .catch(function (err) {
      t.$notify.error({
           title: '头像上传错误',
           message: err.toString()
      });
    })

}

export default asyncUpload
