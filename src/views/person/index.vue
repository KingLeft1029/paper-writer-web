<template>
  <div class="container flex person-box">
    <!-- 1进入个人中心默认展示我的主页页面。2、普通用户、可发布文章帖子3、完成身份认证，为“机构官方、机构编辑、作者”的用户，进入个人中心默认展示我的钱包 -->
    <div class="left-box" v-if="leftShow && roles == 2">
      <!-- @click="editCropper()" -->
      <div class="avatar-img">
        <img v-bind:src="options.img" title="upload photo as avatar" alt="">
      </div>

      <span class="left-user-name">Course Name </span>
      <span class="left-user-identity">User</span>
      <div class="left-follow-box">
        <span>Following：23</span>
        <div class="col-line"></div>
        <span>Follers：23</span>
      </div>
      <div class="left-ink">
        <div class="left-ink-item" @click="toWallet(1)">
          <span class="yellow">1009999ink</span>
          <span>Wallet</span>
        </div>
        <div class="left-ink-item" @click="toCoupons(1)">
          <span class="yellow">3</span>
          <span>Coupons</span>
        </div>
      </div>
      <div class="left-menu-box">
        <div class="left-menu-item" :class="{ 'menu-active': menuKey == index }" v-for="(item, index) in meunList"
          :key="index" @click="menuClick(index)">
          <div class="left-img-box">
            <img class="menu-icon" :src="item.iconSrc" alt="">
            <span>{{ item.label }}</span>
          </div>
          <img src="../../assets/person/right.png" alt="">
        </div>
      </div>
    </div>
    <div class="right-box">
      <Title :title="MenuTitle" v-if="titleFlag && roles == 2" />
      <div class="finnish-box flex justify-between" v-if="roles==1">
        <div class="flex align-center">
          <div class="img-circle mr20">
            <img src="@/assets/course/img.png" alt="">
          </div>
          <div>
            <div class="flex align-center">
              <span class="img-circle-name mr20">Course Name</span>
              <span class="font12 text-grey">Institutional Official</span>
            </div>
            <div class="flex align-center mt20">
              <span class="mr20 font12 text-grey">Follow：23</span>
              <span class="mr20 font12 text-grey">Follers：23</span>
              <span class="font12 text-grey">Following：23</span>
            </div>
          </div>
        </div>
        <div class="flex align-center">
          <div class="collect-btn mr20" :class="{ 'active-love': collectKey == 1 }" @click="collectClick">
            <img src="@/assets/icon/love-white.png" v-if="collectKey == 1"  alt="">
            <img src="@/assets/icon/love-red.png" v-else  alt="">
            
          
            collect
          </div>
          <div class="send-btn" :class="{ 'active-send': sendKey == 1 }" @click="sendClick">
            <img src="@/assets/icon/letter-white.png" v-if="sendKey == 1"   alt=""> 
            <img src="@/assets/icon/letter-red.png" v-else  alt="">


            Send Message
          </div>
        </div>
      </div>
      <div class="row-line" v-if="titleFlag"></div>
      <components :is="currentComponent"></components>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { VueCropper } from "vue-cropper";
import Title from "@/components/Title";

import MyDashborad from "./components/MyDashborad.vue";
import Profile from "./components/Profile.vue";
import Agency from "./components/Agency.vue";
import MyCourses from "./components/MyCourses.vue";
import MyCollections from "./components/MyCollections.vue";
import CouponManagement from "./components/CouponManagement.vue";
import ChangePassword from "./components/ChangePassword.vue";
import CheckCoupons from './components/CheckCoupons.vue';
import CheckWallet from './components/CheckWallet.vue';
import { mapGetters } from 'vuex'
export default {
  components: { VueCropper, Title, MyDashborad, Profile, Agency, MyCourses, MyCollections, CouponManagement, ChangePassword, CheckCoupons, CheckWallet },
  data() {
    return {
      // 是否显示弹出层
      open: false,
      // 是否显示cropper
      visible: false,
      // 弹出层标题
      title: "Modify profile picture",
      options: {
        img: store.getters.avatar, //裁剪图片的地址
        autoCrop: true, // 是否默认生成截图框
        autoCropWidth: 200, // 默认生成截图框宽度
        autoCropHeight: 200, // 默认生成截图框高度
        fixedBox: true // 固定截图框大小 不允许改变
      },
      previews: {},
      meunList: [
        { label: 'My Dashboard', iconSrc: require('../../assets/person/icon-1.png') },
        { label: 'Profile', iconSrc: require('../../assets/person/icon-2.png') },
        { label: 'Agency official certification', iconSrc: require('../../assets/person/icon-3.png') },
        { label: 'My courses', iconSrc: require('../../assets/person/icon-4.png') },
        { label: 'My collections', iconSrc: require('../../assets/person/icon-5.png') },
        { label: 'Coupon Management', iconSrc: require('../../assets/person/icon-6.png') },
        { label: 'Change Password', iconSrc: require('../../assets/person/icon-7.png') }
      ],
      menuKey: 0,
      currentComponent: MyDashborad,
      leftShow: true,
      titleFlag: true,
      collectKey: 1,
      sendKey:1
    }
  },
  watch: {
    menuKey: {
      handler: function menuKey(val) {

        // if(val==5){
        //   this.leftShow=false
        // }
      },
      immediate: true
    }
  },
  computed: {
    ...mapGetters(["roles"]),
    MenuTitle() {
      let val = ''
      switch (this.menuKey) {
        case 0:
          val = 'My Dashboard'
          break;
        case 1:
          val = 'Personal information'
          break;
        case 2:
          val = 'Agency official certification'
          break;
        case 3:
          val = 'My courses'
          break;
        case 4:
          val = 'My collections'
          break;
        case 5:
          val = 'Coupon Management'
          break;
        case 6:
          val = 'Change Password'
          break;
        case 7:
          val = 'Coupons'
          break;
        case 8:
          val = 'Wallet'
          break;
      }
      return val

    }
  },
  methods: {
    // 编辑头像
    editCropper() {
      this.open = true;
    },
    // 打开弹出层结束时的回调
    modalOpened() {
      this.visible = true;
    },
    // 覆盖默认的上传行为
    requestUpload() {
    },
    // 向左旋转
    rotateLeft() {
      this.$refs.cropper.rotateLeft();
    },
    // 向右旋转
    rotateRight() {
      this.$refs.cropper.rotateRight();
    },
    // 图片缩放
    changeScale(num) {
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },
    // 上传预处理
    beforeUpload(file) {
      if (file.type.indexOf("image/") == -1) {
        this.$modal.msgError("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。");
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.options.img = reader.result;
        };
      }
    },
    // 上传图片
    uploadImg() {
      this.$refs.cropper.getCropBlob(data => {
        let formData = new FormData();
        formData.append("avatarfile", data);
        // uploadAvatar(formData).then(response => {
        //   this.open = false;
        //   this.options.img = process.env.VUE_APP_BASE_API + response.imgUrl;
        //   store.commit('SET_AVATAR', this.options.img);
        //   this.$modal.msgSuccess("修改成功");
        //   this.visible = false;
        // });
      });
    },
    // 实时预览
    realTime(data) {
      this.previews = data;
    },
    // 关闭窗口
    closeDialog() {
      this.options.img = store.getters.avatar
      this.visible = false;
    },
    menuClick(index) {
      this.menuKey = index
      switch (index) {
        case 0:
          this.currentComponent = MyDashborad
          this.titleFlag = true
          this.leftShow = true
          break;
        case 1:
          this.currentComponent = Profile
          this.titleFlag = true
          this.leftShow = true
          break;
        case 2:
          this.currentComponent = Agency
          this.titleFlag = true
          this.leftShow = true
          break;
        case 3:
          this.currentComponent = MyCourses
          this.titleFlag = false
          this.leftShow = true
          break;
        case 4:
          this.currentComponent = MyCollections
          this.titleFlag = false
          this.leftShow = true
          break;
        case 5:
          this.currentComponent = CouponManagement
          this.titleFlag = true
          this.leftShow = true
          break;
        case 6:
          this.currentComponent = ChangePassword
          this.titleFlag = true
          this.leftShow = true
          break;
      }
    },
    // 查看优惠券
    toCoupons(num) {
      this.menuKey = 7
      this.currentComponent = CheckCoupons
      this.titleFlag = false
      this.leftShow = true
    },
    toWallet() {
      this.menuKey = 8
      this.currentComponent = CheckWallet
      this.titleFlag = true
      this.leftShow = true
    },
    collectClick(){
      this.collectKey==1? this.collectKey=2: this.collectKey=1
    },
    sendClick(){
      this.sendKey==1? this.sendKey=2: this.sendKey=1
    }
  }
};
</script>

<style lang="scss" scoped>
.person-box {
  flex: 1;
  margin-bottom: 40px;
  margin-top: 11px;
  position: relative;
}

.left-box {
  // width: 30%;
  min-width: 318px;
  height: 779px;
  background: #FFFFFF;
  box-shadow: 2px 0px 6px 0px rgba(0, 21, 41, 0.12);
  border-radius: 6px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .avatar-img {
    width: 60px;
    height: 60px;
    background: #D8D8D8;
    border: 1px solid rgba(151, 151, 151, 0.18);
    border-radius: 50%;
    overflow: hidden;
  }

  .left-user-name {
    font-size: 16px;
    font-weight: 600;
    color: #3E454E;
    line-height: 22px;
    margin-top: 12px;
  }

  .left-user-identity {
    font-size: 12px;
    font-weight: 500;
    color: #939393;
    line-height: 17px;
    margin-top: 8px;

  }

  .left-follow-box {
    display: flex;
    align-items: center;
    padding: 11px 0;
    font-size: 12px;
    color: #999999;
    line-height: 24px;

    .col-line {
      width: 1px;
      height: 20px;
      background: #DDDDDD;
      margin: 0 20px;
    }
  }

  .left-ink {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0 69px 42px 69px;


    .left-ink-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 17px;
      color: #61687C;
      font-size: 12px;
      cursor: pointer;

      .yellow {
        font-size: 16px;
        font-weight: 500;
        color: #FF8F00;
        line-height: 22px;
        margin-bottom: 5px;
      }
    }
  }

  .left-menu-box {
    width: 100%;
    border-top: 1px solid rgba(151, 151, 151, 0.18);

    .left-menu-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 9px 46px 8px 14px;
      border-bottom: 1px solid rgba(151, 151, 151, 0.18);
      line-height: 22px;
      cursor: pointer;

      .left-img-box {
        display: flex;
        align-items: center;

        img {
          margin-right: 13px;
        }
      }
    }

    .menu-active {
      background: linear-gradient(131deg, rgba(255, 143, 0, 0.1) 0%, rgba(220, 0, 37, 0.1) 100%);
    }
  }

}

.right-box {
  margin-left: 20px;
  width: 100%;
  // min-width: 862px;
  min-height: 779px;
  background: #FFFFFF;
  border-radius: 6px;
  border: 1px solid rgba(151, 151, 151, 0.18);
  padding: 28px 21px;
  position: relative;

  .row-line {
    width: 100%;
    height: 1px;
    background-color: rgba(151, 151, 151, 0.18);
    margin-top: 20px;
    margin-bottom: 14px;

  }


}

.finnish-box {
  width: 100%;
  height: 150px;
  background: #FFFCFC;
  border-radius: 6px 6px 0px 0px;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 79px;
  padding-right: 20px;

  .img-circle {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 58px;
      height: 58px;
    }
  }

  .img-circle-name {
    font-size: 16px;
    color: #3E454E;
  }

  .collect-btn {
    width: 78px;
    height: 26px;
    padding: 0 8px;
    display: flex;
   align-items: center;
    justify-content: space-between;
    background: rgba(255, 143, 0,0.08);
    border-radius: 4px;
    border: 1px solid rgba(224, 14, 34, 1);
    color: #FF8F00;
    cursor: pointer;
  border-radius: 4px;
    // img{
    //   width: 14px;
    //   height: 12px;
    // }
  }
  .active-love{
  background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
   color: #fff;
  }

  .send-btn {
    width: 140px;
    height: 26px;
    padding: 0 8px;
    display: flex;
   align-items: center;
    justify-content: space-between;
    background: rgba(255, 143, 0,0.08);
    border-radius: 4px;
    border: 1px solid rgba(224, 14, 34, 1);
    color: #FF8F00;
    cursor: pointer;
    // border-image: linear-gradient(90deg, rgba(248, 116, 7, 1), rgba(224, 14, 34, 1)) 1 1;
  }
  .active-send{
    background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
   color: #fff;
  }


}
</style>