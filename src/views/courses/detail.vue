<template>
  <div class="container mt20 mb20 flex-sub">
    <div class="flex align-center  justify-between">
      <div class="video-mask">
        <img src="@/assets/course/img.png" alt="">
        <router-link :to="{name:'video',query:{id:1}}">
        <el-button type="primary">Preview</el-button>
      </router-link>
      </div>
      <div class="course-detail-box flex flex-direction justify-between">
        <span>Course Name</span>
        <span>Tags：Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break
        </span>
        <span>9999Ink</span>
        <span>6 Episodes / 3h9m / 21 Learners</span>
        <AprUserFollow :userInfo="{ num: 3, name: 'Zhang User', color: 'shadow' }"> </AprUserFollow>
        <IconsUserNum num="0"></IconsUserNum>
        <div class="flex align-end justify-between">
          <btn btnText="Buy Now" btnType="4"></btn>
         
          <IconBorderBtn num="2"></IconBorderBtn>
        </div>
      </div>
    </div>
   <TabContentCourses></TabContentCourses>
    <!-- 弹窗组件 -->
    <PopUp title="Lack of Ink" :width="420">
      <div class="flex">
        <div>
        <img src="@/assets/icon/info.png" alt="">
      </div>
       <div class="ml10">
        <div class="mt6 font12">
          Recharge the Ink
        </div>
        <div class="mt20 font12 text-grey">
          Current Ink balance 200
        </div>
       </div>
      </div>
        <div class="flex justify-end mt33">
          <el-button type="primary" class="common-btn-deep">
            Recharge Now
          </el-button>
          <el-button  class="common-btn-border">
            Cancel
          </el-button>
        </div>
      </PopUp>
  </div>
</template>
    
<script>
import AprUserFollow from '../components/apr-user-follow.vue'
import IconBorderBtn from '../components/icon-border-btn.vue'
import IconsUserNum from '../components/icons-user-num.vue'
import TabContentCourses from './tab-content-courses.vue'
import PopUp from "@/components/PopUp"
export default {
  components: {
    AprUserFollow,
    IconBorderBtn,
    IconsUserNum,
    TabContentCourses,
    PopUp
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
  overflow: hidden;

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

.course-detail-box {
  width: 56%;
  height: 284px;

  span:nth-of-type(1) {
    font-size: 36px;
    font-weight: 600;
    color: #1C1C1C;
    line-height: 46px;
  }

  span:nth-of-type(2) {
    font-size: 15px;
    color: #545454;
    line-height: 22px;
    width: 80%;
  }

  span:nth-of-type(3) {
    font-size: 24px;
    color: #FF8F00;
    line-height: 32px;
  }

  span:nth-of-type(4) {
    font-size: 13px;
    font-weight: 600;
    color: #FF8F00;
    line-height: 22px;
  }

}


</style>
    