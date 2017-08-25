<template>
  <div id="Main">
    <div id="header">

      <a href="#">
        <img src="http://i2.bvimg.com/599620/b8e24aa5fc1960c5.png" >
      </a>

      <div id="header-tabs">
        <a href="/#/main" class='tab-single'>
          指南
        </a>
        <a href="/#/main" class='tab-single'>
          组件
        </a>
        <a href="/#/main" class='tab-single'>
          资源
        </a>
        <a href="/#/main" class='tab-single'>
          中文/英文
        </a>
      </div>
    </div>

    <div id="banner"></div>
    <div id="banner-stars">
      <img src="http://i2.bvimg.com/599620/7445d8aa2b2ae5e9.png" alt="">
    </div>
    
    <div >
      <img id="banner-pic" src="http://element.eleme.io/static/banner-bg.75437e1.svg" alt="">
    </div>
    <div class="container">
      <h2 class="title">
        网站快速成型工具
      </h2>
      <div class="caret" id="typing1">
        {{ str1 }}
      </div>
      <div class="">

      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "Main",
  data(){
    return{
      typingStr1:"只为守护世界和平",
      typingStr2:"只为让你少加班",
      typingStr3:'只为这样的你：',
      // chanpinshejishi:'产品设计师',
      // jiaohushejishi:'交互设计师',
      // shijueshejishi:'视觉设计师',
      // chanpinjingli:'产品经理',
      // qianduangongchengsh:'前端工程师',
      peopleType:['产品设计师','交互设计师','视觉设计师','产品经理','前端工程师'],
      str1:'',
    }
  },

  beforeMount() {
		(function (doc, win) {
					var docEl = doc.documentElement,
					resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
					recalc = function () {
					var clientWidth = docEl.clientWidth;
					if (!clientWidth) return;
					docEl.style.fontSize = 16 * (clientWidth / 1920) + 'px';
			};
			if (!doc.addEventListener) return;
			win.addEventListener(resizeEvt, recalc, false);
			doc.addEventListener('DOMContentLoaded', recalc, false);
			})(document, window);
	},

  mounted() {
    const t = this
    let temp = 1
    t.str1 = ' '

    $('#typing1').css('height','3rem')

    //执行8次
    // ''--->'只为守护世界和平'
    setTimeout(function () {
      $('#typing1').css('height','auto')
      var interval = setInterval(function () {
        t.str1 = t.typingStr1.substring(0,temp)
        temp ++;
        if(temp>t.typingStr1.length){
          clearInterval(interval);
        }
      },130)
    },2500)


    //执行6次
    //'只为守护世界和平'--->'只为'
    setTimeout(function () {
      var interval = setInterval(function () {
        t.str1 = t.typingStr1.substring(0,temp)
        temp --;
        if(temp<2){
          clearInterval(interval);
          temp++;
        }
      },120)
    },4800)

    //执行5次
    //'只为'--->'只为让你少加班'
    setTimeout(function () {
      var interval = setInterval(function () {
        t.str1 = t.typingStr2.substring(0,temp)
        temp ++;
        if(temp>t.typingStr2.length){
          clearInterval(interval);
        }
      },150)
    },7000)

    //执行7次
    //'只为让你少加班'--->''
    setTimeout(function () {
      var interval = setInterval(function () {
        t.str1 = t.typingStr2.substring(0,temp)
        temp --;
        if(temp<0){
          clearInterval(interval);
          temp+=2;
          $('#typing1').css('height','3rem')
        }
      },120)
    },9200)

    //执行8次
    //''--->'只为这样的你'
    setTimeout(function () {
      $('#typing1').css('height','auto')
      var interval = setInterval(function () {
        t.str1 = t.typingStr3.substring(0,temp)
        temp ++;
        if(temp>t.typingStr3.length){
          clearInterval(interval);
        }
      },120)
    },11000)

    setTimeout(function () {
      let type = 0;
      let addFlag = true;
      let pauseFlag = false;
      temp = 0;

      var interval = setInterval(function() {
      if (!pauseFlag) {
          t.str1 = t.typingStr3 + t.peopleType[type].substring(0, temp)
          if (addFlag) {
            temp++;
            if (temp == t.peopleType[type].length+1) {
              addFlag = false
              temp --;
              pauseFlag = !pauseFlag
              setTimeout(function () {
                pauseFlag = !pauseFlag
              },2000)
            }
          } else {
            temp--;
            if (temp == -1) {
              addFlag = true
              temp++;
              pauseFlag = !pauseFlag
              setTimeout(function () {
                pauseFlag = !pauseFlag
              },2000)
              type++;
              if (type == 5) {
                type = 0
                // clearInterval(interval);
              }
            }
          }
        }
      }, 120)
    }, 13000)

  }
}
</script>
<style lang="scss" scoped>
  @import "./Main.scss"



</style>
