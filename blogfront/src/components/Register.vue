<template lang="html">
  <div class="register-vue">
  <div class="main">
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
          <input class = "us-pd-input" maxlength="11" @blur="verify('username',register_username)" spellcheck="false" v-model="register_username" placeholder="手机号">
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
export default {

  name: 'Register',
  data() {
    return {
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
    }
  },

  methods: {
    //点击登录
    setLog: function() {
      if (!this.isLog) {
        this.setNull();
        this.isLog = true;
        this.verify_code_show = false;
        // $(".main").css("height","550px");
        // $("#after-move").css("transform","translateY(-15px)");
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
    // $(".main").css("height", "600px");
    // $("#after-move").css("transform", "translateY(25px)");
    _login: function() {
      const t = this
      if(t.log_username.length!=11){
        this.$message.error('您的手机号输入有误，请重新输入');
        t.log_username = ''
        return
      }
      fetch('http://127.0.0.1:8000/api/account_login', {
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
            //后续做跳转
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
    _getVerifyCode: function() {
      const t = this
      if (t.register_username.length != 11) {
        this.$message.error('您的手机号输入有误，请重新输入');
        t.register_username = ''
        return
      }
      setTimeout(function() {
        t.register_verifycode = 123456
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
      fetch('http://127.0.0.1:8000/api/account_register', {
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
a {
    padding: 10px;
    text-decoration: none;
}

//主登录框
.main {
    width: 400px;
    height: 550px;
    overflow: hidden;
    text-align: center;
    margin: 10% auto 0;
    vertical-align: middle;
    background-color: #ffffff;
    box-shadow: 0 0 15px 15px #d9d9d9;
    font-family: monaco, -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
}

//登录框上方操作栏
.ope {
    margin-top: 40px;

    //登录 注册中间 点的样式
    .point {
        padding-left: 10px;
        padding-right: 10px;
        color: #969696;
    }

    //登录 注册 非选中状态样式
    .normal {
        font-size: 18px;
        font-weight: bold;
        color: #969696;
    }
    //登录 注册 激活状态样式
    .active {
        font-size: 18px;
        font-weight: bold;
        color: #58B7FF;
        border-bottom: 2px solid #58B7FF;
    }

}

//登录状态 输入框集合
.login-input {
    margin: 60px auto 0;
    width: 300px;
    height: 100px;

    //包含icon的单一框样式
    .us-pw-input-pre {
        float: left;
        font-size: 18px;
        width: 300px;
        height: 50px;
        border: 1px solid #c8c8c8;
        border-radius: 8px;
        background-color: #f2f2f2;

        //输入框前的icon样式
        .bef-icon {
            display: block;
            float: left;
            width: 25px;
            height: 25px;
            margin-top: 10px;
            margin-left: 10px;
            padding-right: 10px;
            vertical-align: middle;
        }

        //输入框样式
        .us-pd-input {
            width: 240px;
            height: 48px;
            font-size: 16px;
            letter-spacing: 0.5px;
            line-height: 48px;
            vertical-align: middle;
            border: none;
            outline: none;
            background-color: #f2f2f2;
        }
    }
}

//登录框下方 问题样式
.clarify {
    text-align: left;
    margin-top: 35px;
    margin-left: 55px;
    width: 300px;
    height: 19px;

    //记住我选择框样式
    .remember {
        font-size: 14px;
        color: #969696;
    }
    //登录遇到问题样式
    .login-problem {
        margin-left: 115px;
        font-size: 14px;
        color: #969696;
    }
    .login-problem:hover {
        cursor: pointer;
    }
}

//登录按键外层div
.button {
    margin-top: 30px;
    //登录按键样式
    .login-button {
        font-size: bold;
        width: 270px;
        height: 50px;
        border-radius: 30px;
    }
}

//下方社交账号登录和icon
.others {
    position: relative;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 0;
    width: 300px;
    margin-left: 50px;
    //社交账号字体样式和前后横线
    .social-text {
        font-size: 15px;
        color: #969696;
        margin-bottom: 0;
    }
    .social-text:before {
        content: "";
        margin-left: 30px;
        border-top: 1px solid #b5b5b5;
        display: block;
        position: relative;
        width: 45px;
        top: 8px;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;

    }
    .social-text:after {
        content: "";
        border-top: 1px solid #b5b5b5;
        display: block;
        position: absolute;
        margin-left: 225px;
        width: 45px;
        top: 8px;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;

    }
}
//社交账号登录icon样式
.other-icons {
    width: 280px;
    height: 70px;
    margin: 25px auto 0;
    .icons {
        width: 35px;
        height: 35px;
        margin-right: 17px;
    }
    .icons:hover {
        cursor: pointer;
    }
}

//注册界面样式
.el-class {
    //注册输入三个框
    .register-input {
        margin: 50px auto 0;
        width: 300px;
        height: 151px;
        //单一包括了icon的输入框
        .us-pw-input-pre {
            float: left;
            font-size: 18px;
            width: 300px;
            height: 50px;
            border: 1px solid #c8c8c8;
            border-radius: 8px;
            background-color: #f2f2f2;
            //输入框前的icon样式
            .bef-icon {
                display: block;
                float: left;
                width: 25px;
                height: 25px;
                margin-top: 10px;
                margin-left: 10px;
                padding-right: 20px;
                vertical-align: middle;
            }
            //输入框样式
            .us-pd-input {
                width: 230px;
                height: 48px;
                font-size: 16px;
                letter-spacing: 0.5px;
                line-height: 48px;
                vertical-align: middle;
                border: none;
                outline: none;
                background-color: #f2f2f2;
            }
        }
    }
    .get-verifycode {
        width: 100px;
        margin-top: 5px;
        height: 40px;
    }
    //注册按键样式
    .button {
        margin-top: 30px;
        .login-button {
            font-size: bold;
            width: 270px;
            height: 50px;
            border-radius: 30px;
        }
    }
    //注册下方提示信息样式
    .sign-up-msg {
        font-size: 12px;
        line-height: 18px;
        color: #969696;
        a {
            padding: 3px;
        }
    }

    //注册界面下方社交账号icon样式
    .others {
        position: relative;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 0;
        width: 300px;
        margin-left: 50px;
        //社交账号注册 字体样式和前后横线
        .social-text {
            font-size: 15px;
            color: #969696;
            margin-bottom: 0;
        }
        .social-text:before {
            content: "";
            margin-left: 30px;
            border-top: 1px solid #b5b5b5;
            display: block;
            position: relative;
            width: 45px;
            top: 8px;
            font-family: inherit;
            font-weight: 500;
            line-height: 1.1;

        }
        .social-text:after {
            content: "";
            border-top: 1px solid #b5b5b5;
            display: block;
            position: absolute;
            margin-left: 225px;
            width: 45px;
            top: 8px;
            font-family: inherit;
            font-weight: 500;
            line-height: 1.1;

        }
    }
}

//导入的iconfont样式
.icon {
    width: 25px;
    height: 25px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
//切换界面时的animation
@-webkit-keyframes move-lvzu {
    0% {
        opacity: 0;
        -webkit-transform: translateY(20px);
    }
    to {
        opacity: 1;
    }
}
//animation的使用类  绑定后会有切换的效果
.move-lvzu {
    -webkit-animation: move-lvzu 1.5s cubic-bezier(.4, 0, .2, 1) 0s 1;
    animation: move-lvzu 1.5s cubic-bezier(.4, 0, .2, 1) 0s 1;
}
//切换界面时的animation
@-webkit-keyframes move-lvzu {
    0% {
        opacity: 0;
        -webkit-transform: translateY(20px);
    }
    to {
        opacity: 1;
    }
}
//验证码出现的动画
@-webkit-keyframes move-lvzu-2 {
    0% {
        opacity: 0;
        -webkit-transform: translateX(-15px);
    }
    to {
        opacity: 1;
    }
}
//animation的使用类  绑定后会有切换的效果 验证码
.move-lvzu-2 {
    -webkit-animation: move-lvzu-2 0.5s cubic-bezier(.4, 0, .2, 1) 0s 1;
    animation: move-lvzu-2 0.5s cubic-bezier(.4, 0, .2, 1) 0s 1;
}
a:hover {
    cursor: pointer;
}
</style>
