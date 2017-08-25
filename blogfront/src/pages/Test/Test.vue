<template>
  <div id="Test">
    {{ text }}
  </div>
</template>
<script>
export default {
  name: "Test",
  data(){
    return{
      text:"哈"
    }
  },
  mounted() {
    const t = this
    let length = 5;
    setInterval(function () {
      length+=5
        t.text+="哈"
        console.log($('#Test').width());
        $('#Test').css("width",`${length}rem`)
    },1000)
  }
}
</script>


<style lang="scss" scoped>


@keyframes caret {
  50% {
    border-color: transparent;
  }
}

#Test {
  width: 5rem;
  font-size:5rem;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.2em solid;
  animation:caret 0.5s steps(26) infinite;
  }

</style>
