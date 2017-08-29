<template>
    <div class="footer">
      <span>Lvment 1.4.3 Boron</span>
      <div class="suggest">
        <a href="/#/main">反馈建议</a>
        <a href="/#/main">贡献指南</a>
        <a href="/#/main">Lvment-React</a>
      </div>

      <div id="wechat-div">
        <svg class="icon" id="wechat" aria-hidden="true">
          <use xlink:href="#icon-weixin"></use>
        </svg>
      </div>
      <div id="github-div">
        <svg class="icon" id="github" aria-hidden="true">
          <use xlink:href="#icon-github"></use>
        </svg>
      </div>
    </div>
</template>
<script>
export default {
  name: "myfooter",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
  @import "./Myfooter.scss"
</style>
