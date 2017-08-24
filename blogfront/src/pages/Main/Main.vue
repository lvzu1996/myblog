<template>
  <div id="Main">
    <div id="head-peixun">培训行业首选学习平台</div>
    <div  v-if="text1Flag" id="text1" v-model="h1Text">
      {{ h1Text }}
    </div>
    <div  v-if="text2Flag" id="text2" v-model="h1Text">
      {{ h1Text }}
    </div>
    <div  v-if="text3Flag" id="text3" v-model="h1Text">
      {{ h1Text }}
    </div>
    <div class="">

    </div>
  </div>
</template>



<script>
export default {
  name: "Main",
  data(){
    return {
      h1Text:"只为守护世界和平",
      text1Flag:true,
      text2Flag:false,
      text3Flag:false,
    }
  },

  mounted() {
    const  t = this;
    setTimeout(function () {
      t.text1Flag = false;
      t.text2Flag = true;
      t.h1Text = "只为招更多的学生"
    },5300)
    setTimeout(function () {
      t.text2Flag = false;
      t.text3Flag = true;
      t.h1Text = "只为这样的你： "
    },8800)
    setTimeout(function () {
      $("#text3").css("border-right","0")
    },11000)
  }
}
</script>


<style lang="scss" scoped>
@import "./Main.scss"


</style>
