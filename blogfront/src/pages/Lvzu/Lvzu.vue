<template>
  <div id="lvzu-self-intro">

    <div class="top">
      <img src="http://ovfey247f.bkt.clouddn.com/home/overlay" class="lvzu-overlay">
      <svg class="icon" id="pro-icon" aria-hidden="true">
      <use xlink:href="#icon-xia"></use>
    </svg>

      <div class="profile">
        <div id="profile-text">
          Profile
        </div>
      </div>

      <svg class="icon" id="pro-dian" aria-hidden="true">
      <use xlink:href="#icon-dian1"></use>
    </svg>

      <div class="head">
        <div>
          <svg class="icon" id="gender-icon" aria-hidden="true">
            <use xlink:href="#icon-nanxing"></use>
          </svg>
        </div>

        <div >
          <img id="headpic" src="http://ovfey247f.bkt.clouddn.com/webwxgetmsgimg.jpg" alt="">
        </div>
        <div id="myname">
          Lvzu
        </div>
      </div>

      <div class="choose-icons">
        <svg class="icon" id="gerenxinxi-icon" aria-hidden="true" @click="_showInfo()">
          <use xlink:href="#icon-gerenxinxi"></use>
        </svg>
        <svg class="icon" id="zhaopian-icon" aria-hidden="true" @click="_showPic()">
          <use xlink:href="#icon-tupian"></use>
        </svg>
        <svg class="icon" id="dongtai-icon" aria-hidden="true" @click="_showTrends()">
          <use xlink:href="#icon-iconquan04"></use>
        </svg>
      </div>

    </div>

    <div class="bottom">

    <transition name="fade">
      <div id="info" v-if="showInfo">
        <div class="bottom-single">
          <div class="left-single">
            <svg class="botton-icon"  aria-hidden="true">
              <use xlink:href="#icon-weizhi1"></use>
            </svg>
            <span class="bot-left-text">city</span>
          </div>
          <div class="right-single">
            HangZhou
          </div>
        </div>
        <div class="bottom-single">
          <div class="left-single">
            <svg class="botton-icon"  aria-hidden="true">
              <use xlink:href="#icon-xuexiao"></use>
            </svg>
            <span class="bot-left-text">Degree</span>
          </div>
          <div class="right-single">
            Undergraduate
          </div>
        </div>
        <div class="bottom-single">
          <div class="left-single">
            <svg class="botton-icon"  aria-hidden="true">
              <use xlink:href="#icon-shouji1"></use>
            </svg>
            <span class="bot-left-text">Phone</span>
          </div>
          <div class="right-single">
            S7Edge
          </div>
        </div>
        <div class="bottom-single">
          <div class="left-single">
            <svg class="botton-icon"  aria-hidden="true">
              <use xlink:href="#icon-shejiao1"></use>
            </svg>
            <span class="bot-left-text">Wechat</span>
          </div>
          <div class="right-single">
            lvzu_lvzu
          </div>
        </div>
        <div class="bottom-single">
          <div class="left-single">
            <svg class="botton-icon"  aria-hidden="true">
              <use xlink:href="#icon-zhiye"></use>
            </svg>
            <span class="bot-left-text">Career</span>
          </div>
          <div class="right-single">
            Programer
          </div>
        </div>
        <div class="bottom-single">
          <div class="left-single">
            <svg class="botton-icon"  aria-hidden="true">
              <use xlink:href="#icon-gexingqianming"></use>
            </svg>
            <span class="bot-left-text">Sign</span>
          </div>
          <div class="right-single">
            A cat
          </div>
        </div>
      </div>
    </transition>


    <transition name="fade">
      <div id="picture" v-if="showPic">
        <div class="single-pic-div" v-for="elem,index in picUrls" :key="elem.key">
          <img :src="picUrls[index]" class="single-pic" >
        </div>
      </div>
    </transition>


    </div>

  </div>
</template>

<script>
export default {
  name: "lvzu-self-intro",

  data(){
    return {
      showInfo:true,
      showPic:false,
      showTrends:false,
      picUrls:['http://ovfey247f.bkt.clouddn.com/about-me/pic1.jpg','http://ovfey247f.bkt.clouddn.com/about-me/pic2.jpg','http://ovfey247f.bkt.clouddn.com/about-me/pic3.jpg','http://ovfey247f.bkt.clouddn.com/about-me/pic4.jpg','http://ovfey247f.bkt.clouddn.com/about-me/pic5.jpg','http://ovfey247f.bkt.clouddn.com/about-me/pic6.jpg'],
    }
  },

  methods: {
    _showInfo() {
      this.showInfo = true
      this.showPic = false
      this.showTrends = false
    },
    _showPic(){
      this.showInfo = false
      this.showPic = true
      this.showTrends = false
    },
    _showTrends(){
      this.showInfo = false
      this.showPic = false
      this.showTrends = true
    },
  },

  beforeMount() {
		(function (doc, win) {
					var docEl = doc.documentElement,
					resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
					recalc = function () {
					var clientWidth = docEl.clientWidth;
					if (!clientWidth) return;
					docEl.style.fontSize = 16 * (clientWidth / 375) + 'px';
			};
			if (!doc.addEventListener) return;
			win.addEventListener(resizeEvt, recalc, false);
			doc.addEventListener('DOMContentLoaded', recalc, false);
			})(document, window);
	},





}
</script>

<style lang="scss" scoped>
@import "./Lvzu.scss"

</style>
