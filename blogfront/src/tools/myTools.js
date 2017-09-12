
var _generateVCode = function() {
  var Num = "";
  for (var i = 0; i < 6; i++) {
    Num += Math.floor(Math.random() * 10);
  }
  return Num
}

// var testStartTime = new Date().getTime(); add at start
var _logRunTime = function () {
  let testEndTime = new Date().getTime();
  console.log("runtime: "+(testEndTime-testStartTime)+" ");
}
var _getRunTime = function () {
   let testEndTime = new Date().getTime();
   return testEndTime-testStartTime
}

/**
 * 把base64编码数据转换为Blob对象最后返回File对象
 * @param urlData
 * 用url方式表示的base64图片数据
 */
function _convertBase64UrlToFile(urlData){

    var bytes=window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte

    //处理异常,将ascii码小于0的转换为大于0
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    var imgBlob = new Blob( [ab] , {type : 'image/png'});
    var imgFile = new File( [imgBlob] , 'img.png')
    // return new Blob( [ab] , {type : 'image/png'});
    return imgFile
}


function _getImgName(type){
  if(type == 'image/png'){
    return 'img.png'
  }
  else if (type == 'image/jpeg') {
    return 'img.jpg'
  }
  else if (type == 'image/svg+xml') {
    return 'img.svg'
  }
}



var myTools = {
  _generateVCode:_generateVCode,
  _logRunTime:_logRunTime,
  _getRunTime:_getRunTime,
  _convertBase64UrlToFile:_convertBase64UrlToFile,
  _getImgName:_getImgName,
}




export default myTools
