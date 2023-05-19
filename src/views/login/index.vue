<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
      <div class="title"><img src="@/assets/images/index/logo.png" /></div>
      <el-form-item prop="Twitter">
        <div class="login-box">
          <img src="@/assets/icon/twitter.png" width="20px" height="16px" />
          <div class="describe">Log in with Twitter</div>
        </div>
      </el-form-item>
      <el-form-item prop="Twitter">
        <div class="login-box">
          <img src="@/assets/icon/facebook.png" width="20px" height="16px" />
          <div class="describe">Log in with Facebook</div>
        </div>
      </el-form-item>
      <el-form-item prop="Twitter">
        <div class="login-box">
          <img src="@/assets/icon/google.png" width="20px" height="16px" />
          <div class="describe">Log in with Google</div>
        </div>
      </el-form-item>
      <el-form-item prop="Twitter">
        <router-link class="link-type" :to="'/emailLogin'">
          <div class="login-box">
            <img src="@/assets/icon/email.png" width="20px" height="16px" />
            <div class="describe">Log in with email</div>
          </div>
        </router-link>
        <div class="register" v-if="register">
          No account? <router-link class="link-type" :to="'/register'"> <span>Register</span></router-link>
        </div>
      </el-form-item>
      <div class="register acknowledge" v-if="register">
        Click “Log In” to agree to Mespery’s <router-link class="link-type" :to="'/register'"> <span> Terms of Service
          </span></router-link>
        and acknowledge that Mespery’s<router-link class="link-type" :to="'/register'"> <span> Privacy Policy
          </span></router-link>applies to you.
      </div>
    </el-form>
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
  
<style rel="stylesheet/scss" lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-size: cover;
}

a {
  text-decoration: none;
}

.login::before {
  width: 100%;
  height: 100%;
  content: "";
  /* 一定要加定位，这样z-index才起作用 */
  position: absolute;
  top: 0%;
  left: 0%;
  margin-left: 0;
  margin-top: 0;
  z-index: -1;
  background: linear-gradient(62deg, #FDAB6F 0%, #F85249 100%);
  opacity: 0.19;
}

.title {
  margin: 5vh auto 5vh;
  text-align: center;
  color: #707070;

  img {
    width: 164px;
    height: 50px;
  }
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 36.5vw;
  max-height: 800px;
  max-width: 700px;
  min-height: 74vh;
  padding: 25px 25px 5px 25px;
  background: #FFFFFF;
  box-shadow: 0px 2px 13px 4px rgba(0, 0, 0, 0.19);
  border-radius: 24px;
  text-align: center;

  .el-form-item {
    margin-bottom: 2.5vh;
  }

  .login-box {
    width: 20vh;
    min-width: 398px;
    margin: 0 auto;
    height: 48px;
    border-radius: 24px;
    border: 2px solid #EDEDED;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      margin-left: 6.5vw;

    }

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

  .acknowledge {
    text-align: justify;
    width: 20vh;
    min-width: 398px;
    margin: 2.5vw auto;
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

.login-code-img {
  height: 38px;
}</style>
  