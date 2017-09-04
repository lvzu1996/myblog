<template>
  <div>
    <div class="mine-home" :style="{backgroundImage: 'url(' + bg_url + ')'}">
      <div class="overlay" :style="{backgroundImage: 'url(' + overlay_url + ')'}">

        <!-- <form action="http://www.baidu.com/baidu" target="_blank">
          <table bgcolor="#FFFFFF">
            <tr>
              <td>
                <input name=tn type=hidden value=baidu>
                <a><img src="https://gss0.bdstatic.com/70cFsjip0QIZ8tyhnq/img/logo-80px.gif" ></a>
                <input type=text name=word size=30>
                <input type="submit" value="百度搜索">
              </td>
            </tr>
          </table>
          </form> -->

        <transition name="fade">
          <div v-if="show_welcome" class="welcome1 move-lvzu">
            Hello, welcome !
          </div>
          </transition>
          <transition name="fade">
            <div v-if="show_name" class="welcome1">
              what is your name ?
              <div >
                <input type="text" @keydown.enter="_submitName"  v-model="user_name" class="comment-input"></input>
              </div>
            </div>
          </transition>
          <transition name="fade">
          <div v-if="show_time" class="my-time">
            {{now_time}}
          </div>
        </transition>

      <transition name="fade">
        <div v-if="show_question" class="welcome">
          <span>{{question_str}}</span>
        </div>
      </transition>
        <div v-if="show_choices" class="choices move-lvzu">
          <a href="#/register">Sign up & Login</a>
          <span>|</span>
          <span class="comment-button" @click='_chat'>&nbspChat&nbsp&nbsp</span>
          <span>|</span>
          <span class="comment-button" @click='_conmment'>&nbspComment&nbsp</span>
        </div>
        <transition name="fade">
        <div v-if="show_comments" class="">
          <input type="text" @keydown.enter="_submitComment"  v-model="comment_str" class="comment-input"></input>
        </div>
      </transition>
      <transition name="fade">
      <div v-if="show_chat" class="">
        <input type="text" @keydown.enter="_submitChat"  v-model="chat_str" class="comment-input"></input>
      </div>
    </transition>

      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'home',
  data () {
    return {
      question_str:'what do you want to do ?',
      user_name:'',
      now_time:moment().format('h:mm:ss a'),
      show_welcome:false,
      show_name:false,
      show_question:false,
      show_comments:false,
      show_chat:false,
      show_choices:false,
      show_time:false,
      comment_str:'',
      chat_str:'',
      comment_interval_flag:true,
      picList: [],
      bg_url:'',
      overlay_url:'',
      hostname:'47.94.129.112',
    }
  },

  mounted: function() {


    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
          this.$router.push({ path:'/about-me' })
          console.log('shouji');
    } else {
      console.log('pc');
    }



    // localStorage.isVisited = false;
    const t = this
    setInterval(function () {
      t.now_time = moment().format('h:mm:ss a')
    },1000)
    fetch(`http://${t.hostname}/api/get_pic_urls`, {
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

      if(localStorage.isVisited == "true" && localStorage.username){
        t.show_welcome = false;
        t.show_question = true;
        t.show_choices = true;
        t.show_time = true;
        return ;
      }

      localStorage.isVisited = true;
      t.show_welcome = true;
      setTimeout(function () {
        t.show_welcome = false;
      },3000)
      setTimeout(function () {
        t.show_name = true;
      },4600)

  },

  methods: {
    _conmment:function() {
      this.chat_str = ''
      this.question_str = 'what do you want to do ?'
      if(!this.show_chat){
        this.show_comments = true;
        return
      }
      const t = this;
      this.show_chat = false;
      setTimeout(function () {
        t.show_comments = true;
      },500)
    },
    _submitComment:function (e) {
      const  t = this
      if(e.target.value==''){
        this.$message({
         showClose: true,
         message: '评论请勿为空'
       });
       return
      }
      if(this.comment_interval_flag == false){
        this.$message({
         showClose: true,
         message: '请勿短时间提交多次评论！'
       });
       return;
      }
      this.show_comments = false;
      this.comment_str = ''
      this.comment_interval_flag = false;
      setTimeout(function () {
          t.comment_interval_flag = true;
      },5000)
      fetch(`http://${t.hostname}/api/comment?user=${localStorage.username}&comment=${e.target.value}`, {
          method: 'get',
        })
        .then(re => re.json())
        .then(re => {
          // console.log(re);
          // console.log(e.target.value);
          if(re.msg == 'success'){
            this.$message({
             showClose: true,
             message: '评论已成功送到lvzu那边了😂！',
           });
          }
        })
    },
    _submitName:function (e) {
      const t = this
      if(e.target.value==''){
        this.$message({
         showClose: true,
         message: '姓名请勿为空'
       });
       return
      }
      localStorage.username = e.target.value
      this.show_name = false;
      setTimeout(function () {
        t.show_choices = true;
        t.show_time = true;
        t.show_question = true;
      },1000)

    },

    _chat:function () {
      this.comment_str = ''
      if(!this.show_comments){
        this.show_chat = true;
        return
      }
      const t = this;
      this.show_comments = false;
      setTimeout(function () {
        t.show_chat = true;
      },1000)

    },
    _submitChat:function () {
      const t = this
      fetch(`http://www.tuling123.com/openapi/api?key=add0513d906d4febabfd0ce2a42102ef&info=${t.chat_str}&userid=${localStorage.username}`,{
      })
      .then(re => re.json())
      .then(re => {
        console.log(re.text.substr(0,20));
        if(re.text.length>20){
          let temp = re.text.substr(0,17)
          temp += '...'
          t.question_str = temp
        }else {
          t.question_str = re.text
        }
      })
      this.chat_str = ''

    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  @import "./Home.scss"

</style>
