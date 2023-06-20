<template>
  <div >
    <!-- 轮播图 -->
    <el-carousel trigger="click"  :interval="10000"  loop>
      <el-carousel-item v-for="item in 3" :key="item.id" >
        <div class="carousel-item" :style="{ backgroundImage: 'url(' + url + ')' }" >
          <!-- <img
            class="item-img"
            src="https://img1.baidu.com/it/u=1571832728,1330971037&fm=253&fmt=auto&app=138&f=JPEG?w=790&h=490"
          /> -->
          <div class="container flex align-center">
            <div class="flex-sub text-black">
              <div class="title-header flex align-center">
                <span class="title-name">Popular posts</span>
                <span class="title-text">course</span>
              </div>
              <div class="author flex align-center justify-between">
                <span>Author: Zhang User</span>
                <span>Release time:2023.3.20</span>
              </div>
              <div class="info" title="ticle...">
                Article descriptionArticle descriptionArticle descriptionArticle
                description Article descriptionArticle descriptionArticle
                descriptionArticle description Article descriptionArticle
                descriptionArticle description…
              </div>
            </div>
            <div class="flex-sub"></div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <!-- 课程 -->
    <div class="course-block container">
      <Title class="pointer" title="Videos" @click.native="$router.push({path:'/videos'})">  </Title>
        <div class="course-list">
          <router-link tag="div" :to="{path:'/videos/detail',query:{id:1}}" class="course-item pointer" v-for="(item, index) in 6" :key="item.id">
            <div class="course-item-main flex">
              <div class="item-img">
                <span class="left-tag" :class="{ active: index == 0 }">{{
                  index == 0 ? "Paid" : "Free"
                }}</span>
              </div>
              <div
                class="
                  item-content
                  flex-sub flex flex-direction
                  justify-between
                "
              >
                <div class="item-title" title="e Name Course nam">
                  Course Name Course name course name…
                </div>
                <div class="flex align-center">
                  <span class="item-price">Free</span>
                  <span class="item-line"></span>
                  <span class="item-people">21 Learners</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
    
    </div>

    <div class="flex container">
      <!-- 文章 -->
      <div class="article-block">
        <Title class="pointer"  title="Forums" @click.native="$router.push({path:'/forums'})"> </Title>
         <div class="mt25">
          <threads-list></threads-list>
          
         </div>
        
         
       
        <router-link :to="{name:'forums',params:{type:1}}" class="more-box" >
            More
            <!-- <img src="../assets/person/right.png" alt="" /> -->
            <i class="el-icon-arrow-right right-icon"></i>
          </router-link>
      </div>
      <!-- 右侧推荐 -->
      <div class="right-block">
        <div class="right-title">
          <img src="@/assets/icon/hot.png" width="18px" height="22px" />
          <div>Hot</div>
          <div class="paging">
            <img src="@/assets/icon/pageNum.png" width="120px" height="32px" />
          </div>
        </div>
        <div class="right-list ">
          <div class="item-first pointer">
            <div
              class="item-first-main "
              v-for="(item, index) in 1"
              :key="index"
              @click="toDetail(item)"
            >
              <div class="item-img">
                <span class="left-tag" :class="{ active: index == 0 }">{{
                  index == 0 ? "Paid" : "Free"
                }}</span>
              </div>
              <div
                class="
                  item-content
                  flex-sub flex flex-direction
                  justify-between
                "
              >
                <div class="item-title">
                  Course Name Course name course name…
                </div>
                <div class="flex align-center">
                  <span class="item-price">Free</span>
                  <span class="item-line"></span>
                  <span class="item-people">21 Learners</span>
                </div>
              </div>
            </div>
          </div>
          <div class="item-left pointer" v-for="(item, index) in 2" :key="index">
            <div class="item-title">
              Post Name Post Name Post Name Post Name Post Name
            </div>
            <div class="item-content">
              Article descriptionArticle descriptionArticle descriptionArticle …
            </div>
            <div class="item-user-box">
              <div class="user-img"></div>
              <div class="user-name">Zhang User</div>
            </div>
          </div>
          <div class="right-item"></div>
        </div>
        <chat></chat>
        <!-- <div class="msg-inter">
          <img
            src="@/assets/course/msg.png"
            width="358px"
            height="78px"
            @click="imClick"
          />
        </div> -->
      </div>

    </div>
    <el-backtop :bottom="100">
   <img class="top-img" src="@/assets/top.png" alt="">
  </el-backtop>
  <ReportDialog ref="report"></ReportDialog>

  </div>
</template>

<script>
import Title from "@/components/Title";
import ThreadsList from './components/ThreadsList.vue'
//im举报
import ReportDialog from './im/report-dialog.vue'
//im
import chat from './im/chat.vue'
export default {
  components: {
    Title,
    ThreadsList,
    ReportDialog,
    chat
  },
  data() {
    return {
      url:'https://img1.baidu.com/it/u=1571832728,1330971037&fm=253&fmt=auto&app=138&f=JPEG?w=790&h=490',
      bannerData: {},
    };
  },
  methods:{
    toDetail(item){
      this.$router.push({path:'/forums/detail',query:1})
    },
    imClick(){
      this.$refs.report.open()
    }
  }
};
</script>
<style>
.el-carousel__container{
  height: 360px;
}
</style>
<style lang="scss" scoped>
.top-img{
  width: 72px;
height: 72px;

}


//轮播图
.carousel-item {
  width: 100%;
   height: 360px;
  min-width: 1200px;
background-repeat: no-repeat;
background-size: 100% 100%;
background-position: center;



  .item-img {
    width: 100%;
    height: 100%;
  }

  .container {
    // width: 100%;
  //   height: 100%;
  //   padding-top: 69px;
  // padding-left: 360px;
  // padding-bottom:43px ;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 16px;

    .title-header {

      color: #000000;

      .title-name {
        font-size: 32px;
        margin-right: 26px;
        font-weight: bold;
      }

      .title-text {
        font-size: 24px;
      }
    }

    .author {
      margin-top: 36px;
    }

    .info {
      margin-top: 33px;
      line-height: 22px;
      word-wrap: none;
    }
  }
}

//课程
.course-block {
  padding: 30px 0 0;

  .course-list {
    margin-top: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0 1.7%;
    grid-auto-flow: row;
    grid-template-areas:
      ". . ."
      ". . .";
    justify-content: space-around;

    .course-item {
      margin-bottom: 20px;
      height: 118px;
      background: #ffffff;
      border-radius: 6px;
      border: 1px solid rgba(151, 151, 151, 0.18);

      &-main {
        padding: 15px 20px 15px 20px;
        position: relative;

        &::before {
          content: " ";
          position: absolute;
          width: 2px;
          height: 14px;
          background: linear-gradient(131deg, #ff8f00 0%, #dc0025 100%);
          border-radius: 0px 2px 2px 0px;
          left: -1px;
          top: 13px;
        }

        .item-img {
          width: 130px;
          height: 88px;
          background: #d8d8d8;
          border-radius: 6px;
          margin-right: 15px;
          position: relative;

          .left-tag {
            width: 36px;
            height: 17px;
            background: rgba(21, 203, 133, 0.57);
            border-radius: 6px 0px 10px 0px;
            color: #ffffff;
            font-size: 10px;
            line-height: 17px;
            text-align: center;
            position: absolute;
            left: 0;
            top: 0;

            &.active {
              background: rgba(220, 0, 37, 0.57);
            }
          }
        }

        .item-content {
          height: 82px;
          padding: 3px 0;

          .item-title {
            font-weight: bold;
            color: #3e454e;
            line-height: 22px;
          }

          .item-price {
            font-size: 20px;
            font-weight: bold;
            color: #ff8f00;
          }

          .item-line {
            margin: 0 12px;
            width: 1px;
            height: 20px;
            background: #dddddd;
          }

          .item-people {
            color: #61687c;
          }
        }
      }

      &:hover {
        border-color: #dc0025;
      }
    }
  }
}

//文章
.article-block {
  padding: 5px 0 0;
  width: 68.5%;

  .article-block-list {
    margin-top: 24px;
  }

  .article-block-item {
    border-radius: 6px;
    border: 1px solid rgba(151, 151, 151, 0.18);
    margin-bottom: 20px;
    height: 184px;
    display: flex;
    &:hover {
      border-color: #dc0025;
    }

    .item-left {
      padding: 15px 15px 15px 20px;

      .item-title {
        font-weight: bold;
        color: #262b3a;
        line-height: 24px;
        font-size: 18px;
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }

      .item-content {
        margin-top: 4px;
        font-weight: 400;
        color: #999999;
        line-height: 24px;
        font-size: 14px;
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }

      .item-user-box {
        display: flex;
        font-size: 14px;
        line-height: 24px;
        margin-top: 5px;
        align-items: center;

        .user-apr {
          font-weight: 400;
          color: #333333;

          .user-count {
            margin-right: 5px;
          }
        }

        .user-line {
          margin: 0 12px 0;
          width: 1px;
          height: 20px;
          background: #dddddd;
        }

        .user-img {
          width: 20px;
          height: 20px;
          background: #d8d8d8;
          border-radius: 10px;
        }

        .user-name {
          font-weight: 400;
          color: #333333;
          margin-left: 10px;
        }
      }

      .button-group {
        display: flex;
        margin-top: 5px;

        .group {
          display: flex;
          align-items: center;
          margin-right: 12px;

          .icon {
            width: 15px;
            height: 15px;
          }

          .num {
            margin-left: 5px;
            color: #999999;
            line-height: 24px;
            font-size: 12px;
          }
        }
      }
    }

    .item-right {
      padding: 21px 20px 21px 0;
    }
  }

  .more-box{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
color: #3E454E;
margin-bottom: 60px;
    
.right-icon{
      // width: 17px;
       margin-top: 1px;
      margin-left: 3px;
    }
    &:hover{
      color: #dc0025 ;
      .right-icon{
        color: #dc0025 ;
      }
    }
  }
}

.right-block {
  width: 358px;
  height: 430px;
  margin-left: 20px;

  .right-title {
    font-size: 36px;
    font-weight: bold;
    color: #3f464f;
    display: flex;
    margin-top: 13px;
    // margin-top: 42px;
    align-items: center;

    img {
      margin-right: 10px;
    }

    .paging {
      margin-left: auto;

      img {
        margin-right: 0;
      }
    }
  }

  .right-list {
    height: 430px;
    border-radius: 6px;
    border: 1px solid rgba(151, 151, 151, 0.18);
    padding: 20px 12px;
margin-top: 25px;
    .item-first {
      display: flex;

      &-main {
        padding: 11px 20px 11px 20px;
        position: relative;
        display: flex;
        background: #fbfbfb;
        border-radius: 4px;

        .item-img {
          width: 130px;
          height: 88px;
          background: #d8d8d8;
          border-radius: 6px;
          margin-right: 15px;
          position: relative;

          .left-tag {
            width: 36px;
            height: 17px;
            background: rgba(21, 203, 133, 0.57);
            border-radius: 6px 0px 10px 0px;
            color: #ffffff;
            font-size: 10px;
            line-height: 17px;
            text-align: center;
            position: absolute;
            left: 0;
            top: 0;

            &.active {
              background: rgba(220, 0, 37, 0.57);
            }
          }
        }

        .item-content {
          height: 82px;
          padding: 3px 0;

          .item-title {
            font-weight: bold;
            color: #3e454e;
            line-height: 22px;
          }

          .item-price {
            font-size: 20px;
            font-weight: bold;
            color: #ff8f00;
          }

          .item-line {
            margin: 0 12px;
            width: 1px;
            height: 20px;
            background: #dddddd;
          }

          .item-people {
            color: #61687c;
          }
        }
      }
    }

    .item-left {
      padding: 8px 20px 8px 20px;
      background: #fbfbfb;
      border-radius: 4px;
      margin-top: 15px;
      height: 126px;

      .item-title {
        font-weight: bold;
        color: #262b3a;
        line-height: 22px;
        font-size: 16px;
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }

      .item-content {
        margin-top: 4px;
        font-weight: 400;
        color: #999999;
        line-height: 17px;
        font-size: 14px;
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }

      .item-user-box {
        display: flex;
        font-size: 14px;
        line-height: 24px;
        margin-top: 5px;
        align-items: center;

        .user-img {
          width: 20px;
          height: 20px;
          background: #d8d8d8;
          border-radius: 10px;
        }

        .user-name {
          font-weight: 400;
          color: #333333;
          margin-left: 10px;
        }
      }
    }
  }

  .msg-inter {
    margin-top: 20px;
    // position: sticky;
    // top: 0;
    // z-index: 999;
  }
}

// }

// 覆盖轮播图组件样式
::v-deep .el-carousel__indicators--horizontal {
  bottom: 30px;
  width: 1200px;

  .el-carousel__button {
    width: 34px;
    height: 4px;
    background-color: #000000;
    border-radius: 2px;
    opacity: 0.14;
  }

  .el-carousel__indicator.is-active button {
    opacity: 1;
    background: linear-gradient(131deg, #ff8f00 0%, #dc0025 100%);
  }
}
</style>
