<template>
  <div class="home">
    <el-table
     :data="bookList"
     style="width: 100%">
     <el-table-column
       prop="book_name"
       label="书名"
       width="180">
     </el-table-column>
     <el-table-column
       prop="add_time"
       label="添加时间"
       width="300">
     </el-table-column>
   </el-table>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      bookList: [],
    }
  },

  mounted: function() {
    const t = this
    fetch('http://127.0.0.1:8000/api/show_books', {
        method: 'get',
      })
      .then(re => re.json())
      .then(re => {
        for(let i of re.list){
          t.bookList.push({
            book_name:i.fields.book_name,
            add_time:i.fields.add_time
          })
        }
      })
  },

  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

</style>
