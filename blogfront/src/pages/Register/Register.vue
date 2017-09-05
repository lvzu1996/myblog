<template lang="html">
  <div class="register-vue">
  <div class="main-part">
    <div class="ope">
      <a class="normal"
      v-bind:class="{'active':isLog}"
      v-on:click="setLog">登录</a>
      <b class="point">·</b>
      <a class="normal"
      v-bind:class="{'active':!isLog}"
        v-on:click="setReg">注册</a>
    </div>

  <div v-show="isLog" class = "if-class" :class="{'move-lvzu':isLog}">
    <div class="login-input">
      <div class="us-pw-input-pre">
        <svg class="icon bef-icon" aria-hidden="true">
          <use xlink:href="#icon-yonghuming1"></use>
        </svg>
        <input class = "us-pd-input" maxlength="11"  spellcheck="false" v-model="log_username" placeholder="手机号">
      </div>
      <div class="us-pw-input-pre">
        <svg class="icon bef-icon" aria-hidden="true">
          <use xlink:href="#icon-mima"></use>
        </svg>
        <input class = "us-pd-input" maxlength="16" type = 'password' v-model="log_password" placeholder="密码">
      </div>
    </div>
    <div class="clarify">
      <el-checkbox v-model="remember" ></el-checkbox>
      <span class="remember"> 记住我 </span>
      <span class= "login-problem">登录遇到问题?</span>
    </div>
    <div class="button">
      <el-button class="login-button" type="info" size='large' @click="_login">登 录</el-button>
    </div>
    <div class="others">
      <h6 class="social-text">社交账号登录</h6>
    </div>
    <div class="other-icons">
      <svg class="icon icons" aria-hidden="true" v-for="i in 4">
        <use v-bind:xlink:href="login_icon_hrefs[i]"></use>
      </svg>
    </div>
  </div>

  <div v-show="!isLog" class = "el-class" :class="{'move-lvzu':!isLog}">
    <div class="register-input">
      <div class="us-pw-input-pre">
        <svg class="icon bef-icon" aria-hidden="true">
          <use xlink:href="#icon-nicheng"></use>
        </svg>
          <input class = "us-pd-input" maxlength="16"  spellcheck="false" v-model="register_nickname" placeholder="你的昵称">
      </div>
      <div class="us-pw-input-pre">
        <svg class="icon bef-icon" aria-hidden="true">
          <use xlink:href="#icon-shouji"></use>
        </svg>
          <input class = "us-pd-input" maxlength="11" @blur="_verify" spellcheck="false" v-model="register_username" placeholder="手机号">
      </div>
      <div v-show="verify_code_show" class="us-pw-input-pre" :class="{'move-lvzu-2':verify_code_show}">
        <svg class="icon bef-icon" aria-hidden="true">
          <use xlink:href="#icon-yanzhengma"></use>
        </svg>
          <input class = "us-pd-input" style="width:100px;float:left;margin-left:8px;"maxlength="6" type = 'text' spellcheck="false" v-model="register_verifycode" placeholder="验证码">
            <el-button class="get-verifycode" type="info" @click="_getVerifyCode">获取验证码</el-button>
      </div>
      <div class="us-pw-input-pre">
        <svg class="icon bef-icon" aria-hidden="true">
          <use xlink:href="#icon-mima1"></use>
        </svg>
          <input class = "us-pd-input"  maxlength="22" type = 'password' spellcheck="false" v-model="register_password" placeholder="密码">
      </div>
    </div>

  <div id="after-move">
    <div class="button">
      <el-button id="reg_but" class="login-button" type="info" size='large' @click="_register">注 册</el-button>
    </div>
    <p class="sign-up-msg">点击 “注册” 即表示您同意并愿意遵守<br>
      <a style="color:#58B7FF;" href="#">用户协议</a>和
      <a style="color:#58B7FF;" href="#">隐私政策</a>。
    </p>
    <div class="others">
      <h6 class="social-text">社交账号注册</h6>
    </div>
    <div class="other-icons">
      <svg class="icon icons" aria-hidden="true" v-for="i in 4">
        <use v-bind:xlink:href="register_icon_hrefs[i]"></use>
      </svg>
    </div>
  </div>
</div>


 </div>
</div>
</template>

<script>
import mytools from '../../tools/myTools'
export default {

  name: 'Register',
  data() {
    return {
      picList: [],
      bg_url:'',
      //绑定登录界面的input值
      log_username: '',
      log_password: '',
      //绑定了注册界面的input值
      register_nickname: '',
      register_username: '',
      register_password: '',
      register_verifycode: '',
      //是否是登录页面 false 为注册页面
      isLog: false,
      //登录界面,是否记住用户名密码选项 false为未打钩
      remember: false,
      //登录界面下方社交账号登录icon
      login_icon_hrefs: ['#icon-ziyuan', '#icon-shejiao-instagram', '#icon-shejiao-github', '#icon-shejiao1', '#icon-shejiao-facebook'],
      //注册界面下方社交账号注册icon
      register_icon_hrefs: ['#icon-ziyuan', '#icon-weibo', '#icon-shejiao-twitter', '#icon-shejiao1', '#icon-shejiao-github'],
      //表示注册界面手机号格式错误message弹窗是否是激活状态 若是激活状态则不会产生二次弹窗
      user_msg_showing: false,
      //表示输入手机验证码的框显不显示
      verify_code_show: false,
      hostname:'47.94.129.112',
    }
  },

  mounted: function() {
    const t = this
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
        }
      })
  },

  methods: {
    //点击登录
    setLog: function() {
      if (!this.isLog) {
        this.setNull();
        this.isLog = true;
        this.verify_code_show = false;

        return;
      }
    },
    //点击注册
    setReg: function() {
      if (this.isLog) {
        this.setNull();
        this.isLog = false;
        return;
      }
    },
    //更换登录注册状态将所有input框值清空
    setNull: function() {
      this.log_username = '';
      this.log_password = '';
      this.register_nickname = '';
      this.register_username = '';
      this.register_password = '';
      this.register_verifycode = '';
    },

    _login: function() {
      const t = this
      if(t.log_username.length!=11){
        this.$message.error('您的手机号输入有误，请重新输入');
        t.log_username = ''
        return
      }
      fetch(`http://${t.hostname}/api/account_login`, {
          method: 'post',
          body: 'username=' + t.log_username + '&password=' + t.log_password,
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          },
        })
        .then(re => re.json())
        .then(re => {
          if(re.msg == 'success'){
            this.$message({
              message: '登录成功！',
              type: 'success'
            });

            setTimeout(function () {
                t.$router.push({ path:'/main' })
            },2500)

            return
          }else if (re.msg =='passwordError') {
            this.$message.error('账号密码有误，请重新输入');
            t.log_password = ''
            return
          }else if (re.msg == 'notRegisterd') {
            this.$message({
              message: '此用户名未注册，请先注册',
              type: 'warning'
            });
            t.setReg();
            return
          }
        })
    },
    _verify:function () {
      const  t = this
      if(t.register_username.length!=11){
        if(t.register_username.length == 0){
          return
        }
        this.$message.error('您的手机号输入有误，请重新输入');
        t.register_username = ''
        return
      }
      $(".main-part").css("height", "600px");
      $("#after-move").css("transform", "translateY(25px)");
      t.verify_code_show = true
    },
    _getVerifyCode: function() {
      const t = this
      if (t.register_username.length != 11) {
        this.$message.error('您的手机号输入有误，请重新输入');
        t.register_username = ''
        return
      }
      setTimeout(function() {
        t.register_verifycode = mytools._generateVCode()
      }, 3000)
    },
    _register: function() {
      const t = this
      if (t.register_nickname.length < 7) {
        this.$message.error('您输入的昵称过短，长度应大于6');
        return
      }
      if (t.register_username.length != 11) {
        this.$message.error('您的手机号输入有误，请重新输入');
        return
      }
      if (t.register_verifycode.length != 6) {
        this.$message.error('您的验证码有误,请重新获取');
        return
      }
      fetch(`http://${t.hostname}/api/account_register`, {
          method: 'post',
          body: 'username=' + t.register_username + '&password=' + t.register_password + '&nickname=' + t.register_nickname,
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          },
        })
        .then(re => re.json())
        .then(re => {
          if (re.msg == 'success') {
            this.$message({
              message: '恭喜您，注册成功！',
              type: 'success'
            });
            setTimeout(function () {
              // t.isLog = true
              localStorage.username = t.register_username
              t.$router.push({ path:'/register/detailInfo' })
            },1000)
          } else if (re.msg == 'registerd username') {
            this.$message({
              message: '该用户名已被注册',
              type: 'warning'
            });
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "./Register.scss"
</style>
