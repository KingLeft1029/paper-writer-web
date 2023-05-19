<template>
    <div class="mycourse-box">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Thread Collection" name="first"></el-tab-pane>
            <el-tab-pane label="Course Collection" name="second"></el-tab-pane>
        </el-tabs>

        <div class="mycourse-content">
            <tab-courses-list :collectionFlag="true" btnText="Remove"></tab-courses-list>
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

        };
    },
    methods: {

    }
};
</script>
      
<style lang="scss" scoped>
.mycourse-box {
   padding-top: 20px;
    .row-line {
        width: 100%;
        height: 1px;
        background-color: rgba(151, 151, 151, 0.18);
        margin-top: 5px;
        margin-bottom: 14px;

    }
   ::v-deep .el-tabs {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
   }
    ::v-deep .el-tabs__item {

        font-size: 14px;
    }

    ::v-deep .el-tabs__header {
       
        height: 40px;
        background: linear-gradient(131deg, rgba(255, 143, 0, 0.2) 0%, rgba(220, 0, 37, 0.2) 100%);
        border-radius: 6px 6px 0px 0px;
        padding-left: 20px;

    }

    ::v-deep .el-tabs__item.is-active {
        font-size: 18px;
        font-weight: 600;
        color: #969696;
        line-height: 18px;
        background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    ::v-deep .el-tabs__nav-wrap::after {
        height: 0;

    }

    ::v-deep.el-tabs__nav {
        height: 40px;
    }

    ::v-deep .el-tabs__active-bar {}



    .mycourse-content {
        padding-top: 20px;
    }
}
</style>
      