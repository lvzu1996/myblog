<template>
  <div id="Main">
    <div id="head-peixun">单身青年首选交友平台</div>
    <div  v-if="text1Flag" id="text1">
      {{ h1Text }}
    </div>
    <div  v-if="text2Flag" id="text2">
      {{ h1Text }}
    </div>
    <div class="zheyangdeni">
      <div  v-if="text3Flag" id="text3">
        {{ h1Text }}
      </div>
      <div v-if="text4Flag" id="text4">
        {{ h2Text }}
      </div>
      <div v-if="text5Flag" id="text5">
        {{ h2Text }}
      </div>
      <div v-if="text6Flag" id="text6">
        {{ h2Text }}
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Main",
  data(){
    return {
      h1Text:"只为守护世界和平",
      h2Text:"万年日漫宅",
      text1Flag:true,
      text2Flag:false,
      text3Flag:false,
      text4Flag:false,
    }
  },

  mounted() {
    const  t = this;
    setTimeout(function () {
      t.text1Flag = false;
      t.text2Flag = true;
      t.h1Text = "只为找更多的妹纸"
    },5300)
    setTimeout(function () {
      t.text2Flag = false;
      t.text3Flag = true;
      t.h1Text = "只为这样的你： "
    },8800)
    setTimeout(function () {
      $("#text3").css("border-right","0")
      t.text4Flag = true;
    },11000)
  }
}
</script>


<style lang="scss" scoped>
@import "./Main.scss"


</style>
