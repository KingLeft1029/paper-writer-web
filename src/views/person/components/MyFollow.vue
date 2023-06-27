<template>
    <div class="mycourse-box">
        <TabChange :navList="navList" width="266"></TabChange>

        <div class="mycourse-content padding20">
            <div class="flex justify-between align-center" v-for="item in list">
                <div class="flex">
                    <img class="follow-img mr20" src="../../../assets/images/img-error.png" alt="">
                    <div class="flex flex-direction justify-around">
                        <div class="font16 text-black ">Course Name</div>
                        <div class="font12 text-grey">author</div>
                    </div>
                </div>
                <btn btnText="Cross correlation" btnType="2"></btn>
                <btn btnText="follow with interest" btnType="7"></btn>
            </div>
        </div>
    </div>
</template>
      
<script>

import TabChange from '../../components/TabChange.vue'
import { listApi } from "@/api/person"
export default {
    components: {

        TabChange
    },

    data() {
        return {
            navList: ['My attention', 'My fans'],
            list: [{}]


        };
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            listApi().then(res => {

            })
        }
    }
};
</script>
      
<style lang="scss" scoped>
.mycourse-box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    .row-line {
        width: 100%;
        height: 1px;
        background-color: rgba(151, 151, 151, 0.18);
        margin-top: 5px;
        margin-bottom: 14px;

    }

    ::v-deep .el-tabs {}

    ::v-deep .el-tabs__item {

        font-size: 14px;

    }

    ::v-deep .el-tabs__header {

        height: 40px;

        border-radius: 6px 6px 0px 0px;
        padding-left: 20px;

    }

    ::v-deep .el-tabs__item.is-active {
        font-size: 18px;
        font-weight: 600;
        color: #969696;
        line-height: 36px;

        background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    ::v-deep .el-tabs__active-bar {
        width: 100px !important;
        height: 3px;
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

.follow-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
</style>
      