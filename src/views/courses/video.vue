<template>
  <div class="container  mt20 mb20">
    <Title title="Course Title" />
    <div class="border-box mt20">
      <!-- 视频部分 -->
      <div class=" flex video-box">
        <div class="video-left">
          <video :src=videoingurl ref="myvideo" @canplay="getTotal" @timeupdate="timeupdate"></video>

          <div class="start-box flex align-center justify-center" v-if="!this.isPaused" @click="play">
            <img src="../../assets/course/start.png" alt="">
          </div>

          <div class="controls  flex align-center justify-between" :class="{ 'lucency': controlsFlag }"
            @mousemove="controlsMouse(1)" @mouseleave="controlsMouse(2)">
            <div>
              <img src="../../assets/course/run-icon.png" v-if="!isPaused" alt="" @click="play()">
              <img src="../../assets/course/pause-icon.png" v-else @click="play()" alt="">
            </div>

            <div class="progress flex align-center">
              <span class="time">{{ currentTime }}</span>
              <el-slider v-model="currentTimeVal" :max="durationProgress" :show-tooltip="false" @change="getNewTime">
              </el-slider>
              <span class="time">{{ totalTime }}</span>
            </div>
            <div class="voice-box">
              <img src="../../assets/course/voice-icon.png" v-if="hasVoive" alt="">
              <img src="../../assets/course/close-voice.png" v-else alt="">

              <div class="voice-slider flex flex-direction">

                <div class="voice-slider-box">
                  <el-slider height="120px" :vertical="true" v-model="volume" @change="getNewVoice"></el-slider>
                </div>
                <div class="place" @click="handleVoice()"></div>
              </div>
            </div>
            <div>
              <img src="../../assets/course/screen-icon.png" @click="toggleFullScreen()" alt="">
            </div>

          </div>


        </div>
        <div class="video-right">
          <span class="video-title">10 Videos </span>
          <el-scrollbar class="video-scroll mt20">
            <div class="video-item" v-for="(item, index) in videoList" :class="{ 'active-color': videoKey == index }"
              :key="index">
              <div class="video-mask" @click="preVideo(index)">
                <el-button type="primary">Preview</el-button>
              </div>
              <img src="https://cdn.uviewui.com/uview/album/1.jpg" alt="">
              <!-- <video :ref="`myvideo${index}`" poster="https://cdn.uviewui.com/uview/album/1.jpg" :src="item.src">
  
                </video> -->
            </div>
          </el-scrollbar>
        </div>
      </div>
      <!-- 作者信息 赞数量 -->
      <div class="user-love-box mt20 flex align-center justify-between">
        <AprUserFollow :userInfo="{ num: 3, name: 'Zhang User', color: 'none', dec: 'Platform Intelligenc' }">
        </AprUserFollow>

        <IconsUserNum></IconsUserNum>
      </div>
      <!-- collects 操作 -->
      <div class="user-love-box mt20 mb20  flex align-center justify-between">
        <div class="ink flex align-center">
          <span class="text-yellow font-weight font20">Free</span>
          <div class="col-line mlr"></div>
          <span class="text-grey">21 Learners</span>
        </div>
        <btn class="ml-class" btnText="Register Now" btnType="3"></btn>
        <IconBorderBtn num="2"></IconBorderBtn>
      </div>
    </div>
    <TabContentCourses></TabContentCourses>
    <!-- 弹窗组件 -->
    <PopUp title="Assignments" :width="479">
      <div class="mt20 font12">
        Assignment Title
      </div>
      <div class="mt20 font12 text-grey">
        cle descriptionArticle descriptionArticle descriptionArticle descriptionArtic
      </div>
      <div class="flex justify-center">
        <el-button type="primary" class="common-btn-submit mt20">
          Contact author
        </el-button>
      </div>
    </PopUp>
  </div>
</template>
      
<script>
import TabChange from "../components/TabChange.vue";
import PopUp from "@/components/PopUp"
import AprUserFollow from '../components/apr-user-follow.vue'
import IconsUserNum from '../components/icons-user-num.vue'
import IconBorderBtn from '../components/icon-border-btn.vue'
import TabContentCourses from './tab-content-courses.vue'
export default {
  components: {
    TabChange,
    PopUp,
    AprUserFollow,
    IconsUserNum,
    IconBorderBtn,
    TabContentCourses
  },
  data() {
    return {
      volume: 30,       // 音量
      videoingurl: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',           // 正在播放视频地址
      myvideo: '',
      isPaused: false,        //标记当前的播放状态
      currentTime: '00:00',   //当前播放时间
      totalTime: '00:00',     //总时长
      currentTimeVal: 0,      // 进度条当前播放时间，必须是number类型
      durationProgress: 0,       // 进度条的最大值，必须是number类型
      currentIndex: '',
      voiceFlag: false,
      controlsFlag: false,
      // 选中视频类型索引
      // 是否有声音
      hasVoive: true,
      videoList: [],
      videoKey: 0,
      iconList: [{ src: require('@/assets/course/icon1.png'), label: '2000' },
      { src: require('@/assets/course/icon2.png'), label: '2000' },
      { src: require('@/assets/course/icon3.png'), label: '1.68k' },
      { src: require('@/assets/course/icon4.png'), label: '2000' },
      { src: require('@/assets/course/icon5.png'), label: '2000' },

      ],
      navList: ["What you'll learn", "Course content", "Reviews"],
    };
  },
  mounted() {
    //获取播放器元素
    this.myvideo = this.$refs.myvideo
    console.log(this.myvideo, "this.myvideo ")
    this.getVideoList()
  },
  methods: {
    getVideoList() {
      this.videoList = [
        { src: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4' },
        { src: 'https://media.w3.org/2010/05/sintel/trailer.mp4' },
        { src: 'https://www.w3schools.com/html/movie.mp4' },
        { src: 'https://media.w3.org/2010/05/sintel/trailer.mp4' },
        { src: 'https://media.w3.org/2010/05/sintel/trailer.mp4' },
        { src: 'https://media.w3.org/2010/05/sintel/trailer.mp4' },
        { src: 'https://media.w3.org/2010/05/sintel/trailer.mp4' },
        { src: 'https://media.w3.org/2010/05/sintel/trailer.mp4' },

      ]
      this.videoingurl = this.videoList[0].src
      this.videoKey = 0
    },
    controlsMouse(num) {
      if (num == 1) {
        this.controlsFlag = true
      } else {
        this.controlsFlag = false
      }
    },
    voiceMouse(num) {
      if (num == 1) {
        this.voiceFlag = true
      } else {
        this.voiceFlag = false
      }

    },
    handleVoice() {
      this.hasVoive = !this.hasVoive
      if (this.hasVoive) {

        this.getNewVoice(30)
      } else {
        this.getNewVoice(0)
      }
    },
    play() {
      //修改当前的播放状态
      this.isPaused = !this.isPaused
      if (this.isPaused) {
        this.myvideo.play()
      } else {
        this.myvideo.pause()
      }
    },
    // 进度条拖动时间
    getNewTime(val) {
      console.log(val)
      this.myvideo.currentTime = val
    },
    // 音量控制
    getNewVoice(val) {
      this.volume = val
      let newVc = val / 100 //h5规定,volume的值必须再0-1之间,比如0.5就是50%的音量,但是进度条的值为100,因此这里做个除法
      this.myvideo.volume = newVc //赋值
    },
    //时间格式化处理
    timeFormat(time) {
      let minute = Math.floor((time % 3600) / 60)
      let second = Math.floor(time % 60)
      minute = minute < 10 ? "0" + minute : minute
      second = second < 10 ? "0" + second : second
      return `${minute}:${second}`
    },
    //获取总时长
    getTotal() {
      this.totalTime = this.timeFormat(this.myvideo.duration)
      this.durationProgress = this.myvideo.duration
    },
    //获取当前视频播放到的时间
    timeupdate() {
      if (this.myvideo.currentTime == this.myvideo.duration) {
        this.isPaused = !this.isPaused
        this.myvideo.pause()
      }
      this.currentTime = this.timeFormat(this.myvideo.currentTime)
      this.currentTimeVal = this.myvideo.currentTime
    },
    //全屏切换
    toggleFullScreen() {
      const myvideo = this.$refs.myvideo
      //如果当前是全屏状态，就退出全屏，否则进入全屏状态
      //获取当前的全屏状态
      let isFullscreen = document.webkitIsFullScreen || document.fullscreen
      if (!isFullscreen) {
        const inFun = myvideo.requestFullscreen || myvideo.webkitRequestFullScreen
        //让当前播放器进入全屏状态
        inFun.call(myvideo)
      } else {
        const exitFun = document.exitFullscreen || document.webkitExitFullScreen
        //退出全屏状态要使用document
        exitFun.call(document)
      }
    },
    preVideo(index) {
      this.videoingurl = this.videoList[index].src
      this.videoKey = index
    }

    // //全屏切换
    // toggleFullScreen(num,index) {
    //   let myvideo 
    //   if(num==1){
    //     myvideo= this.$refs.myvideo
    //   }else{
    //     myvideo = this.$refs[`myvideo${index}`][0]
    //   }

    //   //如果当前是全屏状态，就退出全屏，否则进入全屏状态
    //   //获取当前的全屏状态
    //   let isFullscreen = document.webkitIsFullScreen || document.fullscreen
    //   if (!isFullscreen) {
    //     const inFun = myvideo.requestFullscreen || myvideo.webkitRequestFullScreen
    //     //让当前播放器进入全屏状态
    //     inFun.call(myvideo)
    //   } else {
    //     const exitFun = document.exitFullscreen || document.webkitExitFullScreen
    //     //退出全屏状态要使用document
    //     exitFun.call(document)
    //   }
    // },


  }
};
</script>
<style>
.video-box {
  ::v-deep .el-scrollbar__wrap {
    overflow-x: hidden !important;
  }

}

.el-scrollbar__bar.is-vertical {
  /* opacity: 0 !important; */
}
</style>
<style lang="scss" scoped>
.border-box {
  border: 1px solid #e9e7e7;
  border-radius: 0px 16px 0px 0px;
}

.video-box {
  width: 100%;
  height: 848px;
  background: rgba(3, 3, 3, 0.44);
  border-radius: 0px 16px 0px 0px;

  .video-left {
    width: 890px;
    // border-top: 1px solid #e9e7e7;
    // border-left: 1px solid #e9e7e7;
    position: relative;


    video {
      width: 890px;
      height: 800px;

      background: #fff;
      // box-shadow: 0px 2px 4px 0px rgba(6, 4, 0, 0.2);
    }

    .start-box {
      width: 80px;
      height: 80px;
      border: 3px solid #FFFFFF;
      background-color: rgba(193, 193, 193, 0.45);
      position: absolute;
      top: calc(50% - 40px);
      left: calc(50% - 40px);
      cursor: pointer;
      border-radius: 50%;
    }

    .controls {
      position: absolute;
      bottom: 0;
      left: 0;
      right: -2px;
      height: 46px;
      padding: 0 20px;
      background: transparent;
      // background: rgba(3, 3, 3, 0.44);
      opacity: 1;

      img {
        vertical-align: middle;
        margin-top: -4px;
      }

      >div {
        cursor: pointer;
      }

      .progress {
        .el-slider {
          width: 608px;
          margin: 0 16px;

        }

        ::v-deep .el-slider__runway {
          height: 4px;

        }

        ::v-deep .el-slider__button {
          width: 10px;
          height: 10px;
        }

        ::v-deep .el-slider__button-wrapper {
          top: -16px;
        }

        .time {
          color: #FFFFFF;
        }
      }

      .voice-box {
        position: relative;

        .voice-slider {
          // height: 120px;
          position: absolute;
          bottom: -16px;
          left: -12px;
          z-index: 10;

          // padding: 10px 0;
          padding-bottom: 18px;


          .voice-slider-box {
            background-color: rgba(3, 3, 3, 0.44);
            padding-top: 16px;
            opacity: 0;
          }

          &:hover {
            .voice-slider-box {
              opacity: 1;
            }
          }

          .place {
            height: 30px;
            width: 100%;
          }


        }


        ::v-deep .el-slider {}
      }
    }

    .lucency {
      opacity: 1;
    }

  }

  .video-right {
    width: 310px;
    padding: 20px;


    .video-title {
      color: #FFFFFF;
      font-weight: 600;
      font-size: 24px;
    }
  }

  .video-scroll {
    height: 760px;
    // overflow-y: auto;

    .video-item {
      margin-bottom: 6px;
      width: 270px;
      height: 146px;
      border-radius: 6px;
      border: 2px solid #979797;
      overflow: hidden;
      position: relative;
      border: 3px solid transparent;

      .video-mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        padding-top: 101px;
        z-index: 10;

        color: #FFFFFF;


        .el-button {
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
    }

    .active-color {
      border: 3px solid;
      border-image: linear-gradient(90deg, rgba(248, 116, 7, 1), rgba(224, 14, 34, 1)) 5 5;
    }
  }


}

.user-love-box {
  padding: 0 20px;

  .ml-class {
    margin-left: 450px;
  }

  .user {


    img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 10px;

    }

    .mlr {
      margin: 0 13px;
    }
  }

  .icons {
    line-height: 24px;
    color: #999999;
    font-size: 12px;

    img {
      vertical-align: middle;
      margin-top: -3px;
      margin-right: 4px;
    }


  }

  .ink {
    line-height: 28px;

    .mlr {
      margin: 0 11px;
    }
  }

  .ml-big {
    margin-left: 449px;
  }


}

.tab-content-box {
  position: relative;
  border-radius: 6px 6px 0px 0px;
  border: 1px solid #e9e7e7;
  padding: 0 20px;
  padding-top: 60px;

  .tab-info-box {
    border: 1px solid #e9e7e7;
    padding-bottom: 20px;


    .tab-info-top {
      width: 100%;
      height: 48px;
      background-color: #F6F6F6;
      padding: 0 20px;

      span {
        color: #3E454E;
        font-size: 16px;
      }

      .check-btn {
        width: 148px;
        height: 20px;
        background: rgba(238, 77, 17, 0.2);
        border-radius: 3px;
        font-size: 14px;
        color: #61687C;
        line-height: 20px;
        text-align: center;
        margin-right: 41px;
      }
    }

    .item-box {
      padding: 0 20px;
    }

    .tab-info-item {
      padding: 20px 0;
      border-bottom: 1px solid #e9e7e7;
      color: #3E454E;

      .info-word {
        margin-top: 6px;
        text-indent: 14px;
        color: #999999;
      }
    }
  }
}
</style>
  
  
      