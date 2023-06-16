<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
      <div class="title"><img src="@/assets/images/index/logo.png" /></div>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="email">
          <img src="@/assets/icon/email.png" slot="prefix" icon-class="user" class="el-input__icon input-icon user" />
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="Password"
          @keyup.enter.native="handleLogin">
          <img src="@/assets/icon/lock.png" slot="prefix" icon-class="password" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>
      <div class="remember-password">
        <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">Remember Password</el-checkbox>
        <router-link :to="'/forgotPassword'"><div>Forget Password？</div></router-link> 
      </div>

      <el-form-item>
        <el-button :loading="loading" size="medium" type="primary" @click.native.prevent="handleLogin"
          class="login-button">
          <span v-if="!loading">Log in</span>
          <span v-else>Log in...</span>
        </el-button>
        <div class="register" >
          <router-link to="/login" replace>Another sign in options</router-link>
        </div>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <!-- <div class="el-login-footer">
        <span>Copyright © 2018-2023 ruoyi.vip All Rights Reserved.</span>
      </div> -->
  </div>
</template>
  
<script>
//   import { getCodeImg } from "@/api/login";
import Cookies from "js-cookie";
//   import { encrypt, decrypt } from '@/utils/jsencrypt'

export default {
  name: "Login",
  data() {
    return {
      codeUrl: "",
      loginForm: {
        username: "admin",
        password: "admin123",
        rememberMe: false,

        uuid: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "Email" }
        ],
        password: [
          { required: true, trigger: "blur", message: "Password" }
        ],
      
      },
      loading: false,
      // 验证码开关
      captchaEnabled: true,
      // 注册开关
      register: true,
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  created() {
    //   this.getCode();
    //   this.getCookie();
  },
  methods: {
    getCode() {
      getCodeImg().then(res => {
        this.captchaEnabled = res.captchaEnabled === undefined ? true : res.captchaEnabled;
        if (this.captchaEnabled) {
          this.codeUrl = "data:image/gif;base64," + res.img;
          this.loginForm.uuid = res.uuid;
        }
      });
    },
    getCookie() {
      const username = Cookies.get("username");
      const password = Cookies.get("password");
      const rememberMe = Cookies.get('rememberMe')
      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        password: password === undefined ? this.loginForm.password : decrypt(password),
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
      };
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          if (this.loginForm.rememberMe) {
            Cookies.set("username", this.loginForm.username, { expires: 30 });
            Cookies.set("password", encrypt(this.loginForm.password), { expires: 30 });
            Cookies.set('rememberMe', this.loginForm.rememberMe, { expires: 30 });
          } else {
            Cookies.remove("username");
            Cookies.remove("password");
            Cookies.remove('rememberMe');
          }
          this.$store.dispatch("Login", this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || "/" }).catch(() => { });
          }).catch(() => {
            this.loading = false;
            if (this.captchaEnabled) {
              this.getCode();
            }
          });
        }
      });
    }
  }
};
</script>
  
<style rel="stylesheet/scss" lang="scss">






.login-form {


  .el-form-item {
   margin-bottom: 2.5vh;
  }

  .el-input__prefix {
    display: flex;
    align-items: center;
  }

  .el-input {
    width: 30vw;
    height: 48px;
    min-width: 326px;
    max-width: 398px;
    input {
      min-width: 326px;
      max-width: 398px;
      border-radius: 24px;
      height: 48px;
      border: 1px solid #EDEDED;
      padding-left: 73px;
    }


 
  }
  .el-checkbox{
    margin: 0 !important;
  }



  .input-icon {
    width: 11px;
    height: 15px;
    margin-left: 32px;
    //  margin-left: 1.8vw;

  }

  .user {
    width: 17px;
  }

  a{
    text-decoration: none;
    color: #606266;
  }

  .remember-password {
    display: flex;
    justify-content: space-between;
    width: 30vw;
    min-width: 326px;
    max-width: 398px;
    margin: 0 auto;
    margin-top: 3vh;
    color: #606266;

    div {
      cursor: pointer;
    }
  }

  .login-button {
    margin-top: 3vh;
    width: 30vw;
    min-width: 326px;
    max-width: 398px;
    height: 46px;
    background: linear-gradient(180deg, #F35E0C 0%, #E4201D 100%);
    border-radius: 24px;
    border: none;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 20px;
  }

  .register {
    height: 17px;
    font-size: 12px;
    text-align: justify;
    margin-top: 10px;
    color: #606266;
    width: 20vh;
    min-width: 398px;
    margin: 4vh auto 0;
  }

}



.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}

.login-code {
  width: 33%;
  height: 38px;
  float: right;

  img {
    cursor: pointer;
    vertical-align: middle;
  }
}

.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}


</style>
  