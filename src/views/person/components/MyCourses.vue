<template>
    <div class="mycourse-box">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="My courses" name="first"></el-tab-pane>
            <el-tab-pane label="Waiting for Payment" name="second"></el-tab-pane>
        </el-tabs>
        <div class="row-line"></div>
        <div class="screen-box flex align-center">
            <el-select v-model="value" size="mini" value-key="" placeholder="All Videos">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <SortInput label="Newest" type="1" @sort="sort"></SortInput>
            <!-- <div class="sort-box flex align-center justify-between">
                <span>Newest</span>
                <div class="triangle-box flex flex-direction">
                    <img src="../../../assets/person/up.png" v-if="sortkey == 2" alt="" @click="sort(1)">
                    <img src="../../../assets/person/up-active.png" v-else alt="">
                    <img src="../../../assets/person/down.png" alt="" v-if="sortkey == 1" @click="sort(2)">
                    <img src="../../../assets/person/down-active.png" v-else alt="">
                </div>
            </div> -->
        </div>

        <div class="mycourse-content">
            <tab-courses-list :collectionFlag="false" btnText="Keep learning"></tab-courses-list>
        </div>

            <!-- 弹窗组件 -->
    <!-- <PopUp title="Rating this course" width="420">
     <div class="flex align-center">
        <span>Rating this course：</span>
       <div class="mt5">
        <el-rate v-model="ratevalue"></el-rate>
       </div>
       <span class="text-grey ml15">{{ ratevalue }} star</span>
     </div>
        <div class="flex justify-end mt33">
          <el-button type="primary" class="common-btn-deep">
            Submit
          </el-button>
          <el-button  class="common-btn-border">
            Redo
          </el-button>
        </div>
      </PopUp> -->
      <PopUp title="Buy course" width="420">
      <div class="flex">
        <div>
        <img src="@/assets/icon/info.png" alt="">
      </div>
       <div class="ml10">
        <div class="mt6 font12">
          Are you sure to purchase the course？
        </div>
        <div class="mt20 font12 text-grey">
          999 ink required
        </div>
       </div>
      </div>
        <div class="flex justify-end mt33">
            <btn btnText="Determine" btnType="1" @click="determine"></btn>
        <btn btnText="Cancel" btnType="2" @click="cancel"></btn>
        </div>
      </PopUp>
    </div>
</template>
      
<script>
import TabCoursesList from '../../components/tab-courses-list.vue'
import PopUp from "@/components/PopUp"
export default {
    components: {
        TabCoursesList,
        PopUp
    },
    data() {
        return {
            activeName: 'first',
            value:'All Videos',
            ratevalue:'',
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            sortkey: 1
        };
    },
    methods: {
        sort(num) {
          
        },
        handleClick(){},
        determine(){},
        cancel(){}
    }
};
</script>
      <style lang="scss">
      .screen-box {
        .el-input{
        height: 22px;
        line-height: 22px;
    }
        .el-input__inner{
            height: 22px;
            line-height: 22px;
        }

        .el-input--mini .el-input__icon{
    line-height: 22px;
  }
  .el-select{
    width: 151px;
  }
    }
    </style>
<style lang="scss" scoped>
.mycourse-box {
    .row-line {
        width: 100%;
        height: 1px;
        background-color: rgba(151, 151, 151, 0.18);
        margin-top: 5px;
        margin-bottom: 14px;

    }

    ::v-deep .el-tabs__item {
        font-size: 24px;
        font-weight: 500;
        color: rgba(63, 70, 79, 0.5);
        line-height: 30px;
    }

    ::v-deep .el-tabs__item.is-active {
        font-size: 28px;
        font-weight: 500;
        color: #3F464F;


    }

    ::v-deep .el-tabs__nav-wrap::after {
        height: 0px;

    }

    ::v-deep .el-tabs__active-bar {
        width: 82px !important;
        height: 4px;
        // background-color: transparent !important;
        // background-image: linear-gradient(131deg, transparent 10%, transparent 57%,
        // #FF8F00 0, #DC0025 100%,
        //         transparent 0, transparent);

        background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
        border-radius: 3px;

    }

    .screen-box {
        margin-top: 20px;


       
     
    }

    .mycourse-content{
        padding-top: 20px;
    }
}
</style>
      