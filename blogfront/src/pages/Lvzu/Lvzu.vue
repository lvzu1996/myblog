<template>
  <div id="lvzu-self-intro">

    <div class="top">
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
        <div id="age">
          21
        </div>
        <div >
          <img id="headpic" src="http://ovfey247f.bkt.clouddn.com/webwxgetmsgimg.jpg" alt="">
        </div>
        <div>
          <svg class="icon" id="jiahao-icon" aria-hidden="true">
            <use xlink:href="#icon-jiahao"></use>
          </svg>
        </div>
        <div id="myname">
          I'm Lvzu
        </div>
      </div>

      <div class="choose-icons">
        <svg class="icon" id="gerenxinxi-icon" aria-hidden="true">
          <use xlink:href="#icon-gerenxinxi"></use>
        </svg>
        <svg class="icon" id="zhaopian-icon" aria-hidden="true">
          <use xlink:href="#icon-tupian"></use>
        </svg>
        <svg class="icon" id="dongtai-icon" aria-hidden="true">
          <use xlink:href="#icon-iconquan04"></use>
        </svg>
      </div>

    </div>

    <div class="bottom">

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

  </div>
</template>

<script>
export default {
  name: "lvzu-self-intro",

  data(){
    return {

    }
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
