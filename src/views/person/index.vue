<template>
  <div class="container flex person-box">
    <div class="left-box">
      <div class="avatar-img" @click="editCropper()">
        <img v-bind:src="options.img" title="upload photo as avatar" alt="">
      </div>
      <el-dialog :title="title" :visible.sync="open" width="800px" append-to-body @opened="modalOpened"
        @close="closeDialog">
        <el-row>
          <el-col :xs="24" :md="12" :style="{ height: '350px' }">
            <vue-cropper ref="cropper" :img="options.img" :info="true" :autoCrop="options.autoCrop"
              :autoCropWidth="options.autoCropWidth" :autoCropHeight="options.autoCropHeight" :fixedBox="options.fixedBox"
              @realTime="realTime" v-if="visible" />
          </el-col>
          <el-col :xs="24" :md="12" :style="{ height: '350px' }">
            <div class="avatar-upload-preview">
              <img :src="previews.url" :style="previews.img" />
            </div>
          </el-col>
        </el-row>
        <br />
        <el-row>
          <el-col :lg="2" :md="2">
            <el-upload action="#" :http-request="requestUpload" :show-file-list="false" :before-upload="beforeUpload">
              <el-button size="small">
                选择1
                <i class="el-icon-upload el-icon--right"></i>
              </el-button>
            </el-upload>
          </el-col>
          <el-col :lg="{ span: 1, offset: 2 }" :md="2">
            <el-button icon="el-icon-plus" size="small" @click="changeScale(1)"></el-button>
          </el-col>
          <el-col :lg="{ span: 1, offset: 1 }" :md="2">
            <el-button icon="el-icon-minus" size="small" @click="changeScale(-1)"></el-button>
          </el-col>
          <el-col :lg="{ span: 1, offset: 1 }" :md="2">
            <el-button icon="el-icon-refresh-left" size="small" @click="rotateLeft()"></el-button>
          </el-col>
          <el-col :lg="{ span: 1, offset: 1 }" :md="2">
            <el-button icon="el-icon-refresh-right" size="small" @click="rotateRight()"></el-button>
          </el-col>
          <el-col :lg="{ span: 2, offset: 6 }" :md="2">
            <el-button type="primary" size="small" @click="uploadImg()">Submit</el-button>
          </el-col>
        </el-row>
      </el-dialog>
      <span class="left-user-name">Course Name </span>
      <span class="left-user-identity">User</span>
      <div class="left-follow-box">
        <span>Following：23</span>
        <div class="col-line"></div>
        <span>Follers：23</span>
      </div>
      <div class="left-ink">
        <div class="left-ink-item">
          <span class="yellow">1009999ink</span>
          <span>Wallet</span>
        </div>
        <div class="left-ink-item">
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
      <Title :title="MenuTitle" v-if="menuKey!=3&&menuKey!=4" />
     
      <div class="row-line" v-if="menuKey!=3&&menuKey!=4"></div>
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

export default {
  components: { VueCropper, Title, MyDashborad, Profile, Agency, MyCourses, MyCollections, CouponManagement, ChangePassword },
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
      menuKey: 3,
      currentComponent: MyCourses
    }
  },
  computed: {
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
          break;
        case 1:
          this.currentComponent = Profile
          break;
        case 2:
          this.currentComponent = Agency
          break;
        case 3:
          this.currentComponent = MyCourses
          break;
        case 4:
          this.currentComponent = MyCollections
          break;
        case 5:
          this.currentComponent = CouponManagement
          break;
        case 5:
          this.currentComponent = ChangePassword
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.person-box {
  flex: 1;
  margin-bottom: 40px;
  margin-top: 11px;
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
  min-width: 862px;
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
</style>