<template>
  <div class="login">
    <div class="login-form">
      <div class="title"><img src="@/assets/images/index/logo.png" /></div>
      <div class="login-box">
        <img src="@/assets/icon/twitter.png" width="20px" height="16px" />
        <div class="describe">Log in with Twitter</div>
      </div>
      <div class="login-box">
        <img src="@/assets/icon/facebook.png" width="20px" height="16px" />
        <div class="describe">Log in with Facebook</div>
      </div>
      <div class="login-box">
        <img src="@/assets/icon/google.png" width="20px" height="16px" />
        <div class="describe">Log in with Google</div>
      </div>
      <router-link :to="'/emailLogin'">
        <div class="login-box">
          <img src="@/assets/icon/email.png" width="20px" height="16px" />
          <div class="describe">Log in with email</div>
        </div>
      </router-link>
      <div class="font12 mt10" v-if="register">
        No account? <router-link class="link-type" :to="'/register'">Register</router-link>
      </div>
      <div class="font12 acknowledge" v-if="register">
        Click “Log In” to agree to Mespery’s <router-link class="link-type" :to="'/register'"> <span> Terms of Service
          </span></router-link>
        and acknowledge that Mespery’s<router-link class="link-type" :to="'/register'"> <span> Privacy Policy
          </span></router-link>applies to you.
      </div>
    </div>

    <!--  底部  -->
    <!-- <div class="el-login-footer">
        <span>Copyright © 2018-2023 ruoyi.vip All Rights Reserved.</span>
      </div> -->
  </div>
</template>
  
<script>
//   import { getCodeImg } from "@/api/login";
//   import Cookies from "js-cookie";
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
        code: "",
        uuid: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入您的账号" }
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" }
        ],
        code: [{ required: true, trigger: "change", message: "请输入验证码" }]
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
  
<style rel="stylesheet/scss" lang="scss" scoped>





.login-form {

  .login-box {

    width: 20vw;
     min-width: 338px;
    margin: 0 auto;
    height: 6vh;
    max-height: 48px;
    min-height: 38px;
    border-radius: 6vh;
    margin-bottom: 2vh;
    border: 2px solid #EDEDED;
    display: flex;
    // justify-content: center;
    align-items: center;
    cursor: pointer;
    padding-left: 4.6vw;


    .describe {
      font-size: 15px;
      font-weight: bold;
      color: #333333;
      line-height: 20px;
      margin-left: 22px;
    }
  }

  .code {
    input {
      padding-left: 1.8vw;
    }

  }

  .input-icon {
    width: 11px;
    height: 15px;
    margin-left: 1.8vw;
    margin-top: 16.5px;
  }

  .user {
    width: 17px;
  }

  .login-button {
    margin-top: 2.5vh;
    width: 396px;
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
    text-align: center;
    margin-top: 10px;
    color: #333333;


  }

  .acknowledge {
   text-align: left;
    width: 30vh;
    min-width: 328px;
    margin: 5.5vw auto;
line-height: 18px;
    color: rgba($color: #000000, $alpha: 0.19);
  }

  .link-type {

    margin-left: 5px;
    background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    span {
      cursor: pointer;
    }
  }



}

</style>
  