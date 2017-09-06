export default{
  _generateVCode() {
    var Num = "";
    for (var i = 0; i < 6; i++) {
      Num += Math.floor(Math.random() * 10);
    }
    return Num
  },
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
