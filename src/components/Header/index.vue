<template>
  <div>
    <div class="header">
      <div class="container flex align-center justify-between">
        <img class="logo" src="@/assets/images/index/logo.png" />
        <div class="nav-block">
          <router-link to="/" class="nav-item" :class="{ active: path == '/' }">Home</router-link>
          <router-link :to="{ name: 'forums', params: { type: 1 } }" class="nav-item"
            :class="{ active: path == '/forums/index' }">Forums</router-link>
          <router-link :to="{ name: 'videos', params: { type: 2 } }" class="nav-item"
            :class="{ active: path == '/videos/index' }">Videos</router-link>
        </div>
        <div class="search-block">
          <!-- @keyup.enter.native="search" -->
          <router-link :to="searchPathTo">
            <img class="search-img" src="@/assets/icon/search.png" alt="">
            <!-- <i slot="suffix" class="el-input__icon el-icon-search" ></i> -->
          </router-link>
          <el-input placeholder="What do you want to ask?" v-model="keyWord">


            <el-select v-model="keySelect" slot="prepend" placeholder="请选择">
              <el-option label="Forums" value="1"></el-option>
              <el-option label="Videos" value="2"></el-option>
            </el-select>
          </el-input>
        </div>
        <router-link class="remind-block" v-if="token" to="/message">
          <img src="../../assets/icon/icon-tx.png" alt="" />
        </router-link>
        <div class="login-block align-center" v-if="token">
          <el-popover placement="bottom" trigger="hover" :offset="-24" :visible-arrow="false"
            popper-class="popover-class">
            <img slot="reference" class="avatar" src="@/assets/icon/user.png" />
            <div class="popover-box">
              <div :key="index" v-for="(item, index) in popoverList">

                <div class="popover-item" @mousemove="popoverMouse(index)" @click="popoverClick(item, index)" :class="{
                  'active-class': mouseNum == index,
                  'persion-class': index == 0,
                  'out-class': index == 1,
                }">
                  <img :src="item.imgSrc" alt="" />
                  <span>{{ item.label }}</span>
                </div>

              </div>
            </div>
          </el-popover>
        </div>

        <router-link class="login-block flex align-center" v-if="!token" to="/login">
          <img class="avatar-other" src="../../assets/icon/user.png" />
          <div>log on</div>
        </router-link>

      </div>
    </div>
    <!-- 弹窗组件 -->
    <PopUp title="hint" ref="hint" :width="420">
      <div class="mt20 font12 text-black">
        Are you sure you want to log out?
      </div>
      <div class="flex justify-end mt33">
        <el-button type="primary" class="common-btn-deep" @click="determine">
          Determine
        </el-button>
        <el-button class="common-btn-border" @click="cancel">
          Cancel
        </el-button>
      </div>
    </PopUp>
  </div>
</template>
  
<script>
import persionImg from "../../assets/icon/persion.png";
import persionActiveImg from "../../assets/icon/persion-active.png";
import outImg from "../../assets/icon/out.png";
import outActiveImg from "../../assets/icon/out-active.png";
import { mapGetters } from 'vuex'
export default {
  watch: {
    $route: {
      handler: function (route) {
        this.path = route.path
      },
      immediate: true
    }
  },

  data() {
    return {
      path: "/",
      activeMenu: "/",
      keyWord: "",
      keySelect: "1",
      isTop: true,
      popoverList: [
        {
          label: "My Profile",
          imgSrc: persionActiveImg,
          pathTo: '/person'
        },
        { label: "Log out", imgSrc: outActiveImg, pathTo: '/login' },
      ],
      mouseNum: -1,
    };
  },
  computed: {
    ...mapGetters(["token"]),
    searchPathTo() {
      let val = ''
      if (this.keySelect == 1) {
        val = { name: 'forums', params: { type: 1 } }
      } else {
        val = { name: 'courses', params: { type: 1 } }
      }
      return val
    }
  },
  created(){
   
  },
  mounted() {


    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 设置背景颜色的透明度
      if (scrollTop) {
        this.isTop = false; // scrollTop + 多少根据自己的需求设置
      } else if (scrollTop === 0) {
        this.isTop = true; // 设置回到顶部时，背景颜色为透明
      }
    },
    // 滚动之前重置
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    popoverMouse(num) {
      this.mouseNum = num;
      if (this.mouseNum == 0) {
        this.popoverList[0].imgSrc = persionImg;
        this.popoverList[1].imgSrc = outActiveImg;
      } else {
        this.popoverList[1].imgSrc = outImg;
        this.popoverList[0].imgSrc = persionActiveImg;
      }
    },
    popoverClick(item, index) {
      if (index == 0) {
        this.$router.push({ path: item.pathTo })
      } else {

        this.$refs.hint.open()
      }
    },
    determine() {

      this.$store.dispatch("LogOut").then(() => {
        this.$router.replace({ path: '/login' })
        this.$refs.hint.close()
      })
    },
    cancel() {
      this.$refs.hint.close()
    },
    search() {
      if (this.keySelect == 1) {
        // Forums
      } else {

      }
    }
  },
};
</script>
<style lang="scss">

 
.popover-class {
  padding: 0 !important;
  width: 120px;
  min-width: 120px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(6, 4, 0, 0.2);
  border-radius: 6px;
  border: none !important;
}

.popover-box {
  .popover-item {
    padding: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;

    img {
      margin-right: 9px;
    }
  }

  a {
    text-decoration: none;
    color: #3e454e;
  }

  .active-class {
    color: #fff;
    background: linear-gradient(131deg, #ff8f00 0%, #dc0025 100%);
  }

  .persion-class {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .out-class {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
}
</style>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 77px;
  background: #ffffff;


  .container {
    padding: 14px 0;
  }

  .logo {
    width: 164px;
    height: 50px;
    margin-right: 38px;
  }

  .nav-block {
    .nav-item {
      font-size: 16px;
      font-weight: bold;
      color: #191919;
      padding: 8px 16px;
      margin: 0 12px;
      border-radius: 30px;
      text-decoration: none;

      &.active {
        background: linear-gradient(131deg, #ff8f00 0%, #dc0025 100%);
        color: #ffffff;
      }

      &:hover {
        color: #dc0025;
      }
    }
  }

  .search-block {
    margin: 0 0 0 40px;
    width: 489px;
    background: #f9f7f7;
    border-radius: 12px;
    overflow: hidden;

    position: relative;

    .search-img {
      position: absolute;
      right: 13px;
      top: 7px;
      width: 18px;
      height: 18px;
      z-index: 10;
    }

    ::v-deep .el-input__inner {
      border: none;
      background-color: #f9f7f7;
    }

    ::v-deep .el-select .el-input .el-select__caret {
      color: #3e454e;
      font-weight: 600;
    }

    ::v-deep .el-input-group__prepend {
      border: none;
      width: 98px;
      background-color: #f9f7f7;
      border-right: 1px solid #c8c8c8;
      color: #3e454e;

    }
  }

  .remind-block {
    margin: 0 42px;
    cursor: pointer;
  }

  .login-block {
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    line-height: 22px;
    background: linear-gradient(131deg, #ff8f00 0%, #dc0025 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    ::v-deep.el-popover {
      padding: 0;
      border: none;
    }

    .avatar {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-top: 5px;
    }

    .avatar-other {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 12px;
    }
  }
}

.header-zhan {
  height: 77px;
}
</style>