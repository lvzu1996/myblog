<template>
  <div id="DetailInfo">

    <div class="detailInfo-main-part">

      <div class="detailInfo-steps-div">
        <el-steps :space="200" :active="step">
          <el-step title="步骤 1" icon="edit"></el-step>
          <el-step title="步骤 2" icon="information"></el-step>
          <el-step title="步骤 3" icon="picture"></el-step>
        </el-steps>
      </div>

    <transition name="fade">
      <div class="detaiInfo-form" v-if="step===2">
        <el-form ref="form" :model="form" label-width="250px">

          <el-form-item label="你是凹还是凸？">
            <el-radio-group v-model="form.gender">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="在哪读大学？给你介绍学妹">
              <el-autocomplete
             class="inline-input"
             v-model="form.school"
             :fetch-suggestions="querySearch"
             placeholder="请输入学校"
             :trigger-on-focus="false"
             @select="handleSelect"
           ></el-autocomplete>
          </el-form-item>

          <el-form-item label="告诉我你几岁,看看算不算犯罪">
            <el-date-picker
             v-model="form.birthday"
             type="date"
             placeholder="选择日期"
             :picker-options="pickerOptions0">
           </el-date-picker>
          </el-form-item>

           <el-form-item label="讲道理，每个人总有个称谓把">
               <el-input v-model="form.name"></el-input>
           </el-form-item>

           <el-form-item label="家庭住址你敢随便告诉我？">
              <el-input v-model="form.address"></el-input>
           </el-form-item>

           <el-form-item>
             <el-button type="primary" @click="_onSubmit">提交信息</el-button>
             <el-button type="warning">过两天再来填</el-button>
           </el-form-item>

        </el-form>
      </div>
      </transition>

    </div>





  </div>
</template>
<script>
import schools from './schools.js'

export default {

  name: "DetailInfo",

  data(){
    return{
      hostname:'47.94.129.112',
      step:2,
      form:{
        name: '',
        address: '',
        birthday:'',
        gender:'',
        school:'',
      },
       schools:'',

    }
  },

  methods: {
    onSubmit() {
      console.log('submit!');
    },
    pickerOptions0: {
      disabledDate(time) {
        return time.getTime() < Date.now() - 8.64e7;
      }
    },
    querySearch(queryString, cb) {
      var schools = this.schools;
      var results = queryString ? schools.filter(this.createFilter(queryString)) : schools;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (school) => {
        return (school.value.indexOf(queryString.toLowerCase()) === 0);
      };
    },
    _onSubmit(){
      const t = this
      //做判断处理

      //判断通过后
      fetch(`http://${t.hostname}/api/set_detailInfo`, {
          method: 'post',
          body: 'username=' + localStorage.username + '&name=' + t.form.name + '&address=' + t.form.address + '&birthday=' + t.form.birthday + '&gender=' + t.form.gender + '&school=' + t.form.school ,
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          },
        })
        .then(re => re.json())
        .then(re => {
          if(re.msg == "success"){
            //表单提交成功
            this.step = 3;
          }
        })

    },
  },


    mounted() {
      this.schools=schools
    },

}
</script>


<style lang="scss" scoped>
@import "./DetailInfo.scss"

</style>
