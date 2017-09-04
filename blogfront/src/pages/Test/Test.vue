<template>
  <div id="Test">
    <div class="lv-search-div">
      <lv-search v-bind:width="width" :height="height"></lv-search>
    </div>

    <div class="lv-pagination-div">
      <lv-pagination :selectedNum="selectedNum" :page_size="page_size" :totalAmount="totalAmount"></lv-pagination>
    </div>

    <div class="lv-sort-strip-div">
      <lv-sort-strip
        :priDir="priDir"
        :onChange="_onChange"
        :hrefs="hrefs"
        >
      </lv-sort-strip>
    </div>

  </div>
</template>
<script>
import Lvment from 'lvment'

var Search = Lvment.Search
var Pagination = Lvment.Pagination
var SortStrip = Lvment.SortStrip

export default {
  name: "Test",

  data(){
    return{
      //lv-search
      width:312,
      height:40,
      //lv-pagination
      selectedNum:1,
      page_size:15,
      totalAmount:100,
      //lv-sort-strip
      priDir:['首页','Lvment主页','注册登录','Lvment测试页面'],
      hrefs:['/#/','/#/main','/#/register','/#/test']

    }
  },

  components: {
    lvSearch:Search,
    lvPagination:Pagination,
    lvSortStrip:SortStrip,

  },

  methods: {
    _onChange(i) {
      console.log(i);
    }
  },


}
</script>


<style lang="scss" scoped>

#Test{
    margin: 0 auto;
    text-align: center;
}

.lv-search-div{
  margin: 20px 20%;
}

.lv-pagination-div{

  margin:50px 30%;
}

.lv-sort-strip-div{
  margin: 0 20%;
}

</style>
