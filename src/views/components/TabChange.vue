<template>
  <div class="nav">
        <!-- 标题列表 -->
        <div class="nav-list" :style="{'width':width+'px'}" ref="channels">
            <div v-for="(item, index) in navList" :key="item"  @click="setUnderLine(index,$event)" :class="{ 'nav-list--active': index === active }" >
              <div class="channel-name" :ref="`channel${index}`">
            {{ item }}
          </div>
            </div>
        </div>
        <!-- 下划线 -->
        <div class="nav-line">
            <div ref="channel-underLine" ></div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      default: () => [],
    },
    width: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
   
    active: 0,
    translateX: 0,
    lineWidth:''
    };
  },
  computed:{
   
  },
  created(){
    
  },
    mounted() {
       this.setUnderLine(0);
   },
  methods:{
       /** 
    * 点击切换标题
    * @param {number} index 菜单序列(点击的第index个)
    */
   
 
    /**
* 设置下划线
*/
setUnderLine(index, $event) {
   this.active = index;
   this.$emit('changeTab',this.active)
   // 设置导航条底部滚动条的位置
   var position
      // if ($event) {
      //   console.log( $event," $event.path[0]")
      //   position = $event.offsetX // 获取被点击的li的offsetLeft
      // } else {
        position = this.$refs[`channel${index}`][0].offsetLeft
      // }
 
      var liWidth = this.$refs[`channel${index}`][0].offsetWidth
  

      const activeChannelLeft = this.$refs[`channel${index}`][0].offsetLeft
  console.log(activeChannelLeft,'activeChannelLeft',liWidth,'liWidth',this.$refs['channel-underLine'].offsetWidth)
      this.$refs['channel-underLine'].style.left =
        activeChannelLeft +
        (liWidth - this.$refs['channel-underLine'].offsetWidth) / 2 +
        'px'
 
     
}
  }
};
</script>

<style lang="scss">
.nav {
    width: 100%;
    background: linear-gradient(180deg, rgba(245, 103, 10,0.2) 0%, rgba(220, 0, 37,0.2) 100%);
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    // padding: 0 40px;
}

.nav .nav-list {
  //  width: 366px;
padding-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
}



.nav-line {
    // margin: 0 auto;
}

.nav-line>div {
  
    width: 120px;
    height: 2px;
  
background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
    border-radius: 2px;
    transition-duration: 0.3s;
    position: relative;
    top: -2px;
}
.nav .nav-list>div {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC, sans-serif;
    font-weight: 400;
    color: #666;
    line-height: 16px;
    cursor: pointer;
    text-align: center;


}
/* 新增激活状态样式 */

.nav .nav-list .nav-list--active {
    font-family: PingFangSC-Semibold, PingFang SC, sans-serif;
    font-weight: bold;
    color: #333333;
    transition: all 0.3s;
   background-color: #FFE53B;
   background-image: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
}
</style>