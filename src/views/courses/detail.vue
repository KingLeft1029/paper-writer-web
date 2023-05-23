<template>
  <div class="container mt20 mb20">
    <div class="flex align-center justify-center">
      <div class="video-mask">
        <img src="@/assets/course/img.png" alt="">
        <el-button type="primary">Preview</el-button>
      </div>
      <div>
        <span>Course Name</span>
        <span>Tags：Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break </span>
        <span>9999Ink</span>
        <span>6 Episodes / 3h9m / 21 Learners</span>
        <AprUserFollow></AprUserFollow>
        <IconsUserNum></IconsUserNum>

      </div>
    </div>

  </div>
</template>
    
<script>
import AprUserFollow from '../components/apr-user-follow.vue'
import IconBorderBtn from '../components/icon-border-btn.vue'
import IconsUserNum from '../components/icons-user-num.vue'
export default {
  components: {
    AprUserFollow,
    IconBorderBtn,
    IconsUserNum
  },
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>
    
<style lang="scss" scoped>
.video-mask {
  position: relative;
  width: 422px;
  height: 284px;
  object-fit: cover;

  img {
    width: 422px;
    object-fit: cover;
  }

  .el-button {
    position: absolute;
    bottom: 32px;
    left: 179px;
    width: 80px;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    background: linear-gradient(131deg, rgba(255, 143, 0, 0.66) 0%, rgba(220, 0, 37, 0.66) 100%);
    border-radius: 17px;

    &:hover {
      background: linear-gradient(131deg, rgba(255, 143, 0, 0.86) 0%, rgba(220, 0, 37, 0.86) 100%);
    }

  }

}
</style>
    