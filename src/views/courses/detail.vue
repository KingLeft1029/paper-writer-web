<template>
    <div class="container  mt20">
        <Title title="Course Title" />
        <div class="mt20 flex video-box">

            <div class="video-left">
                <video-player class="video-player-box" ref="videoPlayer" :options="playerOptions" :playsinline="true"
                    customEventName="customstatechangedeventname" @play="onPlayerPlay($event)"
                    @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)" @waiting="onPlayerWaiting($event)"
                    @playing="onPlayerPlaying($event)" @loadeddata="onPlayerLoadeddata($event)"
                    @timeupdate="onPlayerTimeupdate($event)" @canplay="onPlayerCanplay($event)"
                    @canplaythrough="onPlayerCanplaythrough($event)" @statechanged="playerStateChanged($event)"
                    @ready="playerReadied">
                </video-player>
            </div>
            <div class="video-right">
                <span>10 Courses </span>
                <div class="video-scroll mt20">
                    <div class="video-item " v-for="(item, index) in videoList" :key="item">
                        <video-player :ref="`videoPlayer${index}`" :options="item.playerOptions" :playsinline="true">

                        </video-player>
                    </div>
                </div>
            </div>



        </div>
    </div>
</template>
      
<script>
// options代表的是对视频控件的设置
// pause代表的是暂停回调，当视频暂停的时候进行操作
// ended代表的是视频播放结束的回调，当视频播放完成的时候进行操作
// timeupdate 代表的是时候监听每一秒进行操作
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
export default {
    components: {
        videoPlayer,
    },

    data() {
        return {
            iconList: [{ src: require('@/assets/course/icon1.png'), label: '2000' },
            { src: require('@/assets/course/icon2.png'), label: '2000' },
            { src: require('@/assets/course/icon3.png'), label: '1.68k' },
            { src: require('@/assets/course/icon4.png'), label: '2000' },
            { src: require('@/assets/course/icon5.png'), label: '2000' },

            ],
            value: '21dsfsdfsdfd',
            videoList: [],
            playerOptions: {},
            cover_url:'https://cdn.uviewui.com/uview/album/1.jpg'


        };
    },
    created() {
        this.getVideoList()
    },
    methods: {
        getVideoList() {
            this.videoList = [{
                title: 'Course Title1',
                playerOptions: {
                    // videojs options
                    autoplay: false,
                    muted: false,
                    preload: 'auto',
                    language: 'zh-CN',
                    fluid: true,
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [
                        {
                            type: 'video/mp4',
                            // type: 'application/x-mpegURL',
                            // src: this.src, // 路径
                            src: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4'
                        }
                    ],
                    // poster: 'https://t7.baidu.com/it/u=602106375,407124525&fm=193&f=GIF',
                    poster: this.cover_url, // 你的封面地址
                    notSupportedMessage: '此视频暂无法播放，请稍后再试',
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true, // 全屏按钮
                        currentTimeDisplay: true, // 当前时间
                        volumeControl: false, // 声音控制键
                        playToggle: true, // 暂停和播放键
                        progressControl: true // 进度条
                    }
                }
            },
            {
                title: 'Course Title2',
                playerOptions: {
                    // videojs options
                    autoplay: false,
                    muted: false,
                    preload: 'auto',
                    language: 'zh-CN',
                    fluid: true,
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [
                        {
                            type: 'video/mp4',
                            // type: 'application/x-mpegURL',
                            // src: this.src, // 路径
                            src: 'https://v-cdn.zjol.com.cn/276985.mp4'
                        }
                    ],
                    // poster: 'https://t7.baidu.com/it/u=602106375,407124525&fm=193&f=GIF',
                    poster: this.cover_url, // 你的封面地址
                    notSupportedMessage: '此视频暂无法播放，请稍后再试',
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true, // 全屏按钮
                        currentTimeDisplay: true, // 当前时间
                        volumeControl: false, // 声音控制键
                        playToggle: true, // 暂停和播放键
                        progressControl: true // 进度条
                    }
                }
            },
            {
                title: 'Course Title3',
                playerOptions: {
                    // videojs options
                    autoplay: false,
                    muted: false,
                    preload: 'auto',
                    language: 'zh-CN',
                    fluid: true,
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [
                        {
                            type: 'video/mp4',
                            // type: 'application/x-mpegURL',
                            // src: this.src, // 路径
                            src: 'https://v-cdn.zjol.com.cn/276985.mp4'
                        }
                    ],
                    // poster: 'https://t7.baidu.com/it/u=602106375,407124525&fm=193&f=GIF',
                    poster: this.cover_url, // 你的封面地址
                    notSupportedMessage: '此视频暂无法播放，请稍后再试',
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true, // 全屏按钮
                        currentTimeDisplay: true, // 当前时间
                        volumeControl: false, // 声音控制键
                        playToggle: true, // 暂停和播放键
                        progressControl: true // 进度条
                    }
                }
            }]
            this.playerOptions = this.videoList[0].playerOptions
        },
        setSrc(src) {
            // 重新设置播放地址
            this.playerOptions['sources'][0]['src'] = src;
            setTimeout(() => {
                this.$refs.videoPlayer.player.play() // 播放
            }, 1000)
        },
        play() {
            // 手动触发播放
            this.$refs.videoPlayer.player.play() // 播放
        },
        // listen event
        onPlayerPlay(player) {
            console.log('player play!', player)
        },
        onPlayerPause(player) {
            console.log('player pause!', player)
        },
        onPlayerEnded(player) {
            console.log('player onPlayerEnded!', player)
        },
        onPlayerWaiting(player) {
            console.log('player onPlayerWaiting!', player)
        },
        onPlayerPlaying(player) {
            console.log('player onPlayerPlaying!', player)
        },
        onPlayerLoadeddata(player) {
            console.log('player onPlayerLoadeddata!', player)
        },
        onPlayerTimeupdate(player) {
            console.log('player onPlayerTimeupdate!', player)
        },
        onPlayerCanplay(player) {
            console.log('player onPlayerCanplay!', player)
        },
        onPlayerCanplaythrough(player) {
            console.log('player onPlayerCanplaythrough!', player)
        },
        // ...player event

        // or listen state event
        playerStateChanged(playerCurrentState) {
            console.log('player current update state', playerCurrentState)
        },

        // player is ready
        playerReadied(player) {
            console.log('the player is readied', player)
            // you can use it to do something...
            // player.[methods]
        }

    },


};
</script>
      
<style lang="scss" >

.video-box {
    width: 100%;
    height: 848px;
    background: rgba(3, 3, 3, 0.44);
    border-radius: 0px 16px 0px 0px;

    .video-left {
        width: 890px;

        .video-player-box {}

        .video-js {
            width: 890px;
            height: 848px;
        }

        .video-player .vjs-big-play-button {
            width: 70px;
        height: 70px;
        border: 3px solid #FFFFFF;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .video-js .vjs-big-play-button .vjs-icon-placeholder:before{
            top: 10px;
        }
    }

    .video-right {
        width: 310px;
        padding: 20px;
       

        span {
            color: #FFFFFF;
            font-weight: 600;
            font-size: 24px;
        }
    }
}

.video-scroll {
    overflow: auto;

    .video-item {
        margin-bottom: 6px;
        width: 270px;
        height: 146px;
        border-radius: 6px;
        border: 2px solid #979797;
        overflow: hidden;
    }

}

/*播放按钮设置成宽高一致，圆形，居中*/
.vjs-custom-skin > .video-js .vjs-big-play-button {
  outline: none;
  border: none;
  width: 66px;
  height: 66px !important;

  background-color: rgba(0,0,0,0) !important;
}

.video-js .vjs-big-play-button .vjs-icon-placeholder:before {

  content: '';
  width: 66px;
  height: 66px;
  background: url('@/assets/course/start.png') no-repeat;
  background-size:24px 27px;
}


/*control-bar布局时flex，通过order调整剩余时间的位置到进度条右边*/
.vjs-custom-skin > .video-js .vjs-control-bar .vjs-remaining-time{
  order:3 !important;
}

/* 进度条下面的播放按钮 */
.vjs-custom-skin > .video-js .vjs-control-bar .vjs-play-control {
  margin: 0;
  line-height: 20px;
  height: 94px;
  padding: 50px 0 24px 0;
}
.vjs-custom-skin > .video-js .vjs-control-bar .vjs-play-control .vjs-icon-placeholder:before {
  position: absolute;
  font-size: 20px;
  top: 44px;
  left: 24px;
  width: 20px;
  height: 20px;
}

/** 时间组件 */
.vjs-custom-skin > .video-js .vjs-control-bar .vjs-time-control {
  margin: 0;
  line-height: 20px;
  height: 94px;
  padding: 50px 0 24px 0;
  min-width: auto;
}
/* 时间-左 */
.video-js .vjs-current-time, .vjs-no-flex .vjs-current-time {
  min-width: 32px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 20px;
  margin: 0 0 0 24px !important;
}
/* 下面控件的时间分割线 */
.vjs-custom-skin > .video-js .vjs-control-bar .vjs-time-divider {
  min-width: 6px;
  margin: 0 8px !important;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255,255,255,0.2);
  line-height: 20px;
}
/* 时间-右 */
.video-js .vjs-duration, .vjs-no-flex .vjs-duration {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 20px;
}
.video-js .vjs-control-bar {
  height: 94px;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)
}
/*进度条单独放置一行*/
.vjs-custom-skin > .video-js .vjs-progress-control.vjs-control{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 68px;
  width: 100%;
  height: 2px;
  padding: 0 24px;
}
/* 进度条背景轨道 */
.video-js .vjs-slider{
  border-radius: 1em;
  background-color: rgba(255,255,255,0.2);
}
/* 加载进度条背景色 */
.video-js .vjs-load-progress {
  background: rgba(255,255,255,0.1);
}
/* 进度条进度 */
.vjs-custom-skin > .video-js .vjs-play-progress, .vjs-custom-skin > .video-js .vjs-volume-level{
  border-radius: 1px;
  background: #FFFFFF;
}
 
/*鼠标进入播放器后，播放按钮颜色会变*/
.video-js:hover .vjs-big-play-button, .vjs-custom-skin>.video-js .vjs-big-play-button:active, .vjs-custom-skin>.video-js .vjs-big-play-button:focus{
  background-color: rgba(0,0,0,0) !important;
}
 
/*control bar*/
.video-js .vjs-control-bar{
  background-color: rgba(0,0,0,0.2) !important;
}
 
/*点击按钮时不显示蓝色边框*/
.video-js .vjs-control-bar button{
  outline: none;
}
.vjs-volume-panel .vjs-control .vjs-volume-panel-horizontal {
  width: 0;
  display: none;
}
/** 隐藏倍速 */
.vjs-custom-skin > .video-js .vjs-control-bar .vjs-playback-rate {
  display: none;
}
/** 音量按钮 */
.video-js .vjs-volume-panel {
  /* display: none; */
  position: absolute;
  right: 48px;
  bottom: 24px;
  width: 20px;
  height: 20px;
}
.vjs-icon-volume-high:before, .video-js .vjs-mute-control .vjs-icon-placeholder:before {
  font-size: 20px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  color: rgba(255,255,255,0.9);
}
.video-js .vjs-volume-bar {
  margin: 8px 16px 8px 0;
}
.video-js .vjs-volume-level {
  left: -21px;
}
/* 全屏组件 */
.vjs-custom-skin > .video-js .vjs-control-bar .vjs-fullscreen-control {
  position: absolute;
  right: 24px;
  bottom: 24px;
  width: 20px;
  height: 20px;
}
.video-js .vjs-big-play-button .vjs-icon-placeholder:before, .vjs-button > .vjs-icon-placeholder:before {
  text-align: right;
}
/* 全屏按钮图标 */
.vjs-icon-fullscreen-enter:before, .video-js .vjs-fullscreen-control .vjs-icon-placeholder:before {
  content: '';
  width: 20px;
  height: 20px;
//   background: url('../assets/icon_full@2x.png') no-repeat;
  background-size: 100% 100%;
}
/* 全屏播放后隐藏自定义全屏图标 */
.vjs-icon-fullscreen-exit:before, .video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before {
  background: url('');
  line-height: 20px;
  margin-right: 10px;
}

</style>
      