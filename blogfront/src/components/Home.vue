<template>
  <div class="mine-home" :style="{backgroundImage: 'url(' + bg_url + ')',backgroundSize:'300px',backgroundRepeat:'no-repeat'}">

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      bookList: [],
      picList: [],
      bg_url:'',
    }
  },

  mounted: function() {
    const t = this
    fetch('http://127.0.0.1:8000/api/get_pic_urls', {
        method: 'get',
      })
      .then(re => re.json())
      .then(re => {
        console.log(re.list);
        for(let i of re.list){
          t.picList.push({
            pic_name:i.fields.pic_name,
            pic_url:i.fields.pic_url
          })
          if(i.fields.pic_name == 'background'){
            t.bg_url = i.fields.pic_url
          }
        }
      })
  },

  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

.mine-home{
  width: 200%;
  height: 2000px;
}

</style>
