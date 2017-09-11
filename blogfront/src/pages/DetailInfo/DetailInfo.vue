<template>
  <div id="DetailInfo">

    <div id="detailInfo-main-part3" v-if="step===3">

      <div class="detailInfo-step3-div">
        <el-steps :space="200" :active="step">
          <el-step title="步骤 1" icon="edit"></el-step>
          <el-step title="步骤 2" icon="picture"></el-step>
          <el-step title="步骤 3" icon="information"></el-step>
        </el-steps>
      </div>

    <transition name="fade">
      <div class="detaiInfo-form">
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
             <el-button type="primary" @click="_onSubmitStep3">提交信息</el-button>
             <el-button type="warning">过两天再来填</el-button>
           </el-form-item>

        </el-form>
      </div>
      </transition>

    </div>


<div id="detailInfo-main-part2" v-if="step==2">
      <div class="detailInfo-step2-div">
        <el-steps :space="200" :active="2">
          <el-step title="步骤 1" icon="edit"></el-step>
          <el-step title="步骤 2" icon="picture"></el-step>
          <el-step title="步骤 3" icon="information"></el-step>
        </el-steps>
      </div>
      <transition name="fade">
        <div class="headpic-uploader">
          <div class="container">
            <div class="imageBox">
              <div class="thumbBox"></div>
              <div class="spinner" style="display: none">Loading...</div>
            </div>
            <div class="action">
              <!-- <input type="file" id="file" style=" width: 200px">-->
              <div class="new-contentarea tc"> <a href="javascript:void(0)" class="upload-img">
                <label for="upload-file">上传图像</label>
                </a>
                <input type="file"  class="" name="upload-file" id="upload-file" />
              </div>
              <input type="button" id="btnCrop"  class="Btnsty_peyton" value="裁切">
              <input type="button" id="btnZoomIn" class="Btnsty_peyton" value="+"  >
              <input type="button" id="btnZoomOut" class="Btnsty_peyton" value="-" >
              <input type="button" id="headpic-sub-button"  value="就决定是这个头像了" @click="_onSubmitStep2">
            </div>
            <div class="cropped"></div>
          </div>
        </div>
      </transition>
</div>

  </div>
</template>

<script>
import './cropbox.js'
import myTools from '../../tools/myTools.js'


var client = new OSS.Wrapper({
  // region: 'oss-cn-beijing',
  endpoint: 'oss-cn-beijing.aliyuncs.com',
  //云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，部署在服务端使用RAM子账号或STS，部署在客户端使用STS。
  accessKeyId: 'LTAI5RoJ6lXHDDJv',
  accessKeySecret: 'UQ5xgbjtwysBDBVUknFRRBFUVGKYDT',
  bucket: 'myblog-oss'
});

import schools from './schools.js'

// import AliyunOssUpload from '../../component/AliyunOssUpload.vue'


export default {

  name: "DetailInfo",

  data(){
    return {
    //请求主机地址
    hostname: '47.94.129.112',
    ossFolder:'headpics/',
    //进行到的步骤
    step: 2,

    //表单数据
    form: {
      name: '',
      address: '',
      birthday: '',
      gender: '',
      school: '',
      headpic_url:'',
    },
    schools: '',


  }
},

  methods: {
    headpicUpload(){
      const t = this
      let username = localStorage.username || myTools._generateVCode()
      var _routename = t.ossFolder+username+'.jpg'
      var _imgFile = $('#upload-file').get(0).files[0];
      client.multipartUpload(_routename,_imgFile,)
      .then(function (re) {
         if(re.res.status === 200){
           //存头像地址
           fetch(`http://${t.hostname}/api/set_detailInfo`, {
             .then(re => {
               if(re.msg == "success"){
                 t.$message({
                   message: '头像上传成功',
                   type: 'success'
                 });
                setTimeout(function () {
                  t.step = 3
                },1500)
               }else{
                 this.$message({
                   message: '头像信息储存失败，请刷新重试',
                   type: 'error'
                 });
               }
             })
         }
       },function (re) {

         t.$alert('我是不会给你做头像的～。～', '自己上传头像', {
                  confirmButtonText: '确定',
                  callback: action => {
                    t.$message({
                      type: 'info',
                      message: '自拍一张上传啊，肯定比她萌'
                    });
                  }
                });

       })
    },
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

    _onSubmitStep2(){
      this.headpicUpload()
      // this.step = 3
    },

    _onSubmitStep3(){
      const t = this
      //做判断处理
      //

      //判断通过后
      fetch(`http://${t.hostname}/api/set_detailInfo`, {
          method: 'post',
          body: 'username=' + localStorage.username + '&name=' + t.form.name + '&address=' + t.form.address + '&birthday=' + t.form.birthday + '&gender=' + t.form.gender + '&school=' + t.form.school + '&headpic_url=' + '',
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          },
        })
        .then(re => re.json())
        .then(re => {
          if(re.msg == "success"){
            //表单提交成功
            this.$message({
              message: '信息提交成功！',
              type: 'success'
            });
            setTimeout(function () {
              t.$router.push({ path:'/main' })
            },1500)
          }
        })

    },
  },


    mounted() {
      this.schools=schools
      console.log("DetailInfo mounted");
        var options =
        {
          thumbBox: '.thumbBox',
          spinner: '.spinner',
          imgSrc: '../../../static/imgs/avatar.jpg'
        }
        var cropper = $('.imageBox').cropbox(options);
        $('#upload-file').on('change', function(){
          var reader = new FileReader();
          reader.onload = function(e) {
            options.imgSrc = e.target.result;
            cropper = $('.imageBox').cropbox(options);
          }
          reader.readAsDataURL(this.files[0]);
          // this.files = [];
        })
        $('#btnCrop').on('click', function(){
          var img = cropper.getDataURL();
          $('.cropped').html('');
          $('.cropped').append('<img src="'+img+'" align="absmiddle" style="width:64px;margin-top:4px;border-radius:64px;box-shadow:0px 0px 12px #7E7E7E;" ><p>64px*64px</p>');
          $('.cropped').append('<img src="'+img+'" align="absmiddle" style="width:128px;margin-top:4px;border-radius:128px;box-shadow:0px 0px 12px #7E7E7E;"><p>128px*128px</p>');
          $('.cropped').append('<img src="'+img+'" align="absmiddle" style="width:180px;margin-top:4px;border-radius:180px;box-shadow:0px 0px 12px #7E7E7E;"><p>180px*180px</p>');
        })
        $('#btnZoomIn').on('click', function(){
          cropper.zoomIn();
        })
        $('#btnZoomOut').on('click', function(){
          cropper.zoomOut();
        })
    },


}
</script>


<style lang="scss" scoped>
@import "./DetailInfo.scss"

</style>
