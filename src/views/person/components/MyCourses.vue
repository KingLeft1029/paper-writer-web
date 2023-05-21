<template>
    <div class="mycourse-box">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="My courses" name="first"></el-tab-pane>
            <el-tab-pane label="Waiting for Payment" name="second"></el-tab-pane>
        </el-tabs>
        <div class="row-line"></div>
        <div class="screen-box flex align-center">
            <el-select v-model="value" size="mini" value-key="" placeholder="All Courses">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <div class="sort-box flex align-center justify-between">
                <span>Newest</span>
                <div class="triangle-box flex flex-direction">
                    <img src="../../../assets/person/up.png" v-if="sortkey == 2" alt="" @click="sort(1)">
                    <img src="../../../assets/person/up-active.png" v-else alt="">
                    <img src="../../../assets/person/down.png" alt="" v-if="sortkey == 1" @click="sort(2)">
                    <img src="../../../assets/person/down-active.png" v-else alt="">
                </div>
            </div>
        </div>

        <div class="mycourse-content">
            <tab-courses-list :collectionFlag="false" btnText="Keep learning"></tab-courses-list>
        </div>
    </div>
</template>
      
<script>
import TabCoursesList from '../../components/tab-courses-list.vue'

export default {
    components: {
        TabCoursesList
    },
    data() {
        return {
            activeName: 'first',
            value:'All Courses',
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
            if (num == 1) {
                // 升序
                this.sortkey = 1
            } else {
                // 降序
                this.sortkey = 2
            }
        }
    }
};
</script>
      
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


       
        .sort-box {
            width: 118px;
            height: 32px;
            // height: 20px;
            background: rgba(238, 77, 17, 0.2);
            border-radius: 3px;
            margin-left: 21px;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 14px;
            font-weight: 400;
            color: #61687C;
            line-height: 20px;

            img {
                width: 10px;
                cursor: pointer;
                // height: 4px;
            }
        }
    }

    .mycourse-content{
        padding-top: 20px;
    }
}
</style>
      