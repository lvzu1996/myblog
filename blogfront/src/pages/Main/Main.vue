<template>
  <div id="Main">
    <div id="header-fa">
      <div id="header">

        <a href="#">
          <img src="http://ovfey247f.bkt.clouddn.com/main/tubiao.png" >
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
          <div class='tab-single'>
            <span id="lang-cn" @click="changeCn()">中文</span>
            <span>/</span>
            <span id="lang-en" @click="changeEn()">En</span>
          </div>
        </div>
      </div>
    </div>


    <div id="banner"></div>
    <div id="banner-stars">
      <img src="http://ovfey247f.bkt.clouddn.com/main/banner_star.png" alt="">
    </div>

    <div >
      <img id="banner-pic" src="http://ovfey247f.bkt.clouddn.com/main/banner_pic" alt="">
    </div>

    <div class="container">
      <h2 class="title">
        网站快速成型工具
      </h2>
      <div class="caret" id="typing1">
        {{ str1 }}
      </div>
    </div>

    <div id="intro_str">
      Lvment，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型
    </div>

    <div class="intro_info">
      <li class="intro_info_single">
        <img src="http://ovfey247f.bkt.clouddn.com/main/zhinan.png" >
        <h3>指南</h3>
        <p>了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。</p>
        <a href="/#/main">查看详情</a>
      </li>
      <li class="intro_info_single">
        <img src="http://ovfey247f.bkt.clouddn.com/main/zujian.png" >
        <h3>组件</h3>
        <p>使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。</p>
        <a href="/#/main">查看详情</a>
      </li>
      <li class="intro_info_single">
        <img src="http://ovfey247f.bkt.clouddn.com/main/ziyuan.png" >
        <h3>资源</h3>
        <p>下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。</p>
        <a href="/#/main">查看详情</a>
      </li>
    </div>

    <myfooter></myfooter>

  </div>
</template>
<script>
import Myfooter from '../../module/Myfooter/Myfooter.vue'

export default {
  name: "Main",
  components: {
    myfooter:Myfooter
  },
  data(){
    return{
      typingStr1:"只为守护世界和平",
      typingStr2:"只为让你少加班",
      typingStr3:'只为这样的你：',
      peopleType:['产品设计师','交互设计师','视觉设计师','产品经理','前端工程师'],
      str1:'',
    }
  },

  beforeMount() {

    //设置 fontsize
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

    //监听滚轮 设置header-fa的background-color
      window.onscroll = function () {
        // 页面指定了DTD，即指定了DOCTYPE时，使用document.documentElement。
        // 页面没有DTD，即没指定DOCTYPE时，使用document.body。
        // let opacity = document.body.scrollTop/212
        let opacity = document.documentElement.scrollTop/212
        $('#header-fa').css('background-color',`rgba(32, 160, 255,${opacity})`)
      }
	},

  mounted() {
    let temp = 1
    this.str1 = ' '

    $('#typing1').css('height','3rem')

    //执行8次
    // ''--->'只为守护世界和平'
    setTimeout(() => {
      $('#typing1').css('height','auto')
      var interval = setInterval(() => {
        this.str1 = this.typingStr1.substring(0,temp)
        temp ++;
        if(temp>this.typingStr1.length){
          clearInterval(interval);
        }
      },130)
    },2500)


    //执行6次
    //'只为守护世界和平'--->'只为'
    setTimeout(() => {
      var interval = setInterval(() =>  {
        this.str1 = this.typingStr1.substring(0,temp)
        temp --;
        if(temp<2){
          clearInterval(interval);
          temp++;
        }
      },120)
    },4800)

    //执行5次
    //'只为'--->'只为让你少加班'
    setTimeout(() =>  {
      var interval = setInterval(() =>  {
        this.str1 = this.typingStr2.substring(0,temp)
        temp ++;
        if(temp>this.typingStr2.length){
          clearInterval(interval);
        }
      },150)
    },7000)

    //执行7次
    //'只为让你少加班'--->''
    setTimeout(() =>  {
      var interval = setInterval(() =>  {
        this.str1 = this.typingStr2.substring(0,temp)
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
    setTimeout(() =>  {
      $('#typing1').css('height','auto')
      var interval = setInterval(() =>  {
        this.str1 = this.typingStr3.substring(0,temp)
        temp ++;
        if(temp>this.typingStr3.length){
          clearInterval(interval);
        }
      },120)
    },11000)

    setTimeout(() =>  {
      let type = 0;
      let addFlag = true;
      let pauseFlag = false;
      temp = 0;

      var interval = setInterval(() =>  {
      if (!pauseFlag) {
          this.str1 = this.typingStr3 + this.peopleType[type].substring(0, temp)
          if (addFlag) {
            temp++;
            if (temp == this.peopleType[type].length+1) {
              addFlag = false
              temp --;
              pauseFlag = !pauseFlag
              setTimeout(() =>  {
                pauseFlag = !pauseFlag
              },2000)
            }
          } else {
            temp--;
            if (temp == -1) {
              addFlag = true
              temp++;
              pauseFlag = !pauseFlag
              setTimeout(() =>  {
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

  },

  methods: {
    changeEn() {
      $('#lang-en').css({'font-weight':'bold','color':'#fff'})
      $('#lang-cn').css({'font-weight':'normal','color':'#e7e3e3'})
    },

    changeCn() {
      $('#lang-cn').css({'font-weight':'bold','color':'#fff'})
      $('#lang-en').css({'font-weight':'normal','color':'#e7e3e3'})
    },



  },


}
</script>
<style lang="scss" scoped>
  @import "./Main.scss"



</style>
