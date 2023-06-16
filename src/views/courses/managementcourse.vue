<template>
    <div class="container mt20 mb20 flex-sub">
        <GreyTopTitle title="Course Management"></GreyTopTitle>
        <div class="flex align-center  justify-between mt10">
            <div class="video-mask">
                <img src="@/assets/course/img.png" alt="">
                <router-link :to="{ name: 'video', query: { id: 1 } }">

                </router-link>
            </div>
            <div class="course-detail-box flex flex-direction justify-between">
                <div>
                    <span class=" color1C font22 fix-width">Course Title：</span>
                    <span class="font24">Course A</span>
                </div>
                <div class="flex">
                    <span class=" color1C font22 fix-width">Course Tags：</span>
                    <div class="tag flex flex-wrap">
                        <el-tag v-for="x in 8">标签一</el-tag>
                    </div>
                </div>
                <div>
                    <span class=" color1C font22 fix-width">Course Type：</span>
                    <span class="font16">Multiple courses</span>
                </div>
                <div>
                    <span class=" color1C font22 fix-width">Fee Type：</span>
                    <span class="font16">pay</span>
                </div>
                <div class="flex align-center justify-between">
                    <div>
                        <span class=" color1C font22 fix-width">Ink Charge：</span>
                        <span class="font20">3232</span>
                    </div>
                    <el-button type="primary" class="common-btn-deepfix">Edit Course</el-button>
                </div>
            </div>
        </div>
        <div class="flex mt41">
            <div class="mr20 mini-deep-btn pointer" @click="add">Add Session</div>
            <div class="mini-shadow-btn pointer" @click="sessionClick">Session Sorting</div>
        </div>
        <div class="text-grey font12 mt15">Recently created session will be displayed at the end by default</div>

        <div class="chapter-box">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <div slot="title" class="tab-info-top flex  align-center justify-between">
                        <div>
                            <img src="@/assets/course/down.png" alt="">
                            <span class="text-black font18 ml20 mr20">Chapter 1</span>
                            <span class="font12 text-grey">Recently created videos will be displayed at the end by
                                default</span>
                        </div>

                        <div class="flex align-center justify-between">
                            <div class="mini-deep-btnfix mr20">Check Assignments</div>
                            <div class="mini-shadow-btnfix mr20">Edit Job</div>
                            <div class="mini-shadow-btnfix mr20">Edit</div>
                            <div class="mini-shadow-btnfix">Delete</div>
                        </div>
                    </div>
                    <div class="item-box">
                        <div class="tab-info-item flex align-center justify-between" v-for="x in 3">
                            <div>
                                <span class="font16">1. Submit video when publishing</span>
                                <div class="info-word">66min</div>
                            </div>
                            <div class="flex align-center">
                                <span class="text-yellow pointer">Edit</span>
                                <div class="col-line ml10 mr10"></div>
                                <span class="text-yellow pointer">Delete</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end description">Course Description</div>
                </el-collapse-item>


            </el-collapse>
        </div>

        <!-- 空 -->
        <!-- <div class="my-empty-box mt41">
            <EmptyBox emptyLabel="No content yet. Go ahead and add a new session."></EmptyBox>
           
        </div> -->
        <div class="flex justify-center mt52 mb52">
            <el-button type="" class="common-btn-borderfix mr20">Save</el-button>
            <el-button type="primary" class="common-btn-deepfix  mr20">Submit</el-button>
            <el-button type="" class="common-btn-borderfix">Cancel</el-button>
        </div>


        <!-- 弹窗组件 -->
        <PopUp title="Lack of Ink" ref="addpop" :width="620">
            <el-form :rules="rules" ref="form" :model="form" label-width="120px">

                <el-form-item label="Session Title：" prop="name">
                    <el-input v-model="form.name" placeholder="Please Enter"></el-input>
                </el-form-item>
                <el-form-item label="Episode：" class="ml20" prop="name">
                    <div>
                        <el-input v-model="form.name" placeholder="Please Enter"></el-input>
                    </div>
                    <div>
                        <span class="mr20 text-yellow pointer" @click="addEpisode">Add Episode</span>
                        <span class="text-yellow pointer" @click="del">Delete</span>
                    </div>
                </el-form-item>

            </el-form>
            <div class="flex justify-end mt33">
                <el-button type="primary" class="common-btn-deep">
                    Determine
                </el-button>
                <el-button class="common-btn-border">
                    Cancel
                </el-button>
            </div>
        </PopUp>
        <SessionSortingDialog ref="session"></SessionSortingDialog>
    </div>
</template>
      
<script>
import AprUserFollow from '../components/apr-user-follow.vue'
import IconBorderBtn from '../components/icon-border-btn.vue'
import IconsUserNum from '../components/icons-user-num.vue'
import PopUp from "@/components/PopUp"
import GreyTopTitle from '../components/grey-top-title.vue'
import SessionSortingDialog from './session-sorting-dialog.vue'
export default {
    components: {
        AprUserFollow,
        IconBorderBtn,
        IconsUserNum,
        PopUp,
        GreyTopTitle,
        SessionSortingDialog
    },
    data() {
        return {
            form: {},
            episodeList:[]
        };
    },
    methods: {
        sessionClick() {
            this.$refs.session.open()
        },
        add() {
            this.$refs.addpop.open()
        },
        addEpisode() {
            this.episodeList.push({})
        },
        del() {
            this.episodeList.splice(this.episodeList.length - 1, 1)
        }
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

    // .el-button {
    //     position: absolute;
    //     bottom: 32px;
    //     left: 179px;
    //     width: 80px;
    //     font-size: 16px;
    //     font-weight: 500;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     height: 28px;
    //     background: linear-gradient(131deg, rgba(255, 143, 0, 0.66) 0%, rgba(220, 0, 37, 0.66) 100%);
    //     border-radius: 17px;

    //     &:hover {
    //         background: linear-gradient(131deg, rgba(255, 143, 0, 0.86) 0%, rgba(220, 0, 37, 0.86) 100%);
    //     }

    // }

}

.course-detail-box {
    width: 56%;
    height: 284px;

    .el-button {
        width: 260px;
        height: 48px;
    }


    .fix-width {
        font-weight: 600;
        display: inline-block;
        width: 180px;
    }


    .color1C {
        color: #1C1C1C;
    }

    .font22 {
        font-size: 22px;
    }

    .font16 {
        font-size: 16px;
    }

    .font20 {
        font-size: 20px;
        color: #FF8F00
    }

    .tag {
        .el-tag {
            padding: 3px 8px;
            height: 20px;
            line-height: 14px;
            text-align: center;
            background: rgba(216, 216, 216, 0.3);
            border: none;
            color: #939393;
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }

}

.chapter-box {
    // border: 1px solid #e9e7e7;
    padding-bottom: 20px;
    margin-top: 16px;

    .tab-info-top {
        width: 100%;
        height: 48px;
        background-color: #F6F6F6;
        padding: 0 20px;

        img {
            width: 24px;
            vertical-align: middle;
            margin-top: -3px;
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

    .btn-comments {
        width: 128px;
        height: 36px;
        // background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
        border-radius: 4px;
        font-size: 16px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    ::v-deep .el-icon-arrow-right:before {
        content: '';
        display: none;
    }

    ::v-deep .el-collapse-item__arrow,
    ::v-deep .el-icon-arrow-right {
        display: none;
    }

    ::v-deep .el-collapse-item__wrap {
        border: none;
    }

    ::v-deep .el-collapse {
        border-bottom: none;
    }

    ::v-deep .el-collapse-item {
        border: 1px solid #e9e7e7;
        margin-bottom: 20px;
    }
}

.description {
    font-size: 18px;
    font-weight: 600;
    color: #969696;
    line-height: 18px;
    background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 38px;
    margin-right: 42px;
}
</style>
      