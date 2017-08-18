<template>
  <div>
    <div class="mine-home" :style="{backgroundImage: 'url(' + bg_url + ')'}">
      <div class="overlay" :style="{backgroundImage: 'url(' + overlay_url + ')'}">
        <div class="welcome move-lvzu">
          Hello, welcome !
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      picList: [],
      bg_url:'',
      overlay_url:'',
    }
  },

  mounted: function() {
    const t = this

    fetch('http://127.0.0.1:8000/api/get_pic_urls', {
        method: 'get',
      })
      .then(re => re.json())
      .then(re => {
        for(let i of re.list){
          t.picList.push({
            pic_name:i.fields.pic_name,
            pic_url:i.fields.pic_url
          })
          if(i.fields.pic_name == 'background'){
            t.bg_url = i.fields.pic_url
          }
          if(i.fields.pic_name == 'overlay'){
            t.overlay_url = i.fields.pic_url
          }
        }
        var img = new Image();
        img.src = t.bg_url;
        img.onload = function(){
          $('.mine-home').css("background-position",'center')
          $('.mine-home').css('height',$(window).height())
          $('.overlay').css('height',$(window).height())
        };
      })

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

.mine-home{
  position: absolute;
  width: 100%;
  display: block;
}
.overlay{
  position: 0 !important;
  display: block;
  position: absolute;
  width: 100%;
  background-size: 100%;
}
.welcome{
  margin-top: 20%;
  font-size: 80px;
  color:#ffffff;
}


@-webkit-keyframes move-lvzu {
    0% {
        opacity: 0;
        /*background-color: #EEECE8;*/
        -webkit-transform: translateY(30px);
    }
    to {
        opacity: 1;
    }
}

.move-lvzu {
    -webkit-animation: move-lvzu 1.5s cubic-bezier(.4, 0, .2, 1) 0s 1;
    animation: move-lvzu 1.5s cubic-bezier(.4, 0, .2, 1) 0s 1;
}
</style>
