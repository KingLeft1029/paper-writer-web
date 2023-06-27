<template>
    <div class="container mt20 mb20 flex-sub border-color border-radius">
        <GreyTopTitle title="Course Management"></GreyTopTitle>
        <div class="padding20">
            <div class="flex align-center  justify-between  ">
                <div class="video-mask">
                    <el-image :src="baseUrl + info.coverChart" fit="cover" class="border-radius" lazy
                        @click="$router.push({ path: '/video/index', query: { id: id } })"> </el-image>

                </div>
                <div class="course-detail-box flex flex-direction justify-between ">
                    <div>
                        <span class=" color1C font22 fix-width">Course Title：</span>
                        <span class="font24">{{ info.courseName }}</span>
                    </div>
                    <div class="flex">
                        <span class=" color1C font22 fix-width">Course Tags：</span>
                        <div class="tag flex flex-wrap align-center">
                            <el-tag v-for="item in info.label" :key="item">{{ item }}</el-tag>
                        </div>
                    </div>
                    <div>
                        <span class=" color1C font22 fix-width">Course Type：</span>
                        <span class="font16">{{ courseFormatter(info.courseType) }}</span>
                    </div>
                    <div>
                        <span class=" color1C font22 fix-width">Fee Type：</span>
                        <span class="font16">{{ feeFormatter(info.paymentType) }}</span>
                    </div>
                    <div class="flex align-center justify-between">
                        <div>
                            <span class=" color1C font22 fix-width">Ink Charge：</span>
                            <span class="font20">{{ info.cost }}</span>
                        </div>
                        <btn btnText="Edit Course" btnType="4"></btn>

                    </div>
                </div>
            </div>
            <div class="flex mt41">
                <div class="mr20 mini-deep-btn pointer" @click="add">Add Session</div>
                <div class="mini-shadow-btn pointer" @click="sessionClick">Session Sorting</div>
            </div>
            <div class="text-grey font12 mt15">Recently created session will be displayed at the end by default</div>

            <div class="chapter-box" v-if="info.courseChapterList&&info.courseChapterList.length > 0">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item :name="`name${index}`" v-for="(item, index) in info.courseChapterList" :key="item.id">
                        <div slot="title" class="tab-info-top flex  align-center justify-between">
                            <div>
                                <img src="@/assets/course/down.png" alt="">
                                <span class="text-black font18 ml20 mr20">{{ item.chapterName }}</span>
                                <span class="font12 text-grey">Recently created videos will be displayed at the end by
                                    default</span>
                            </div>
                            <!-- 判断当前章节课程是否有视频，
                                是，有“查看视频”按钮。
                              否，有“编辑视频”按钮
                            已发布成功章节，不可编辑。  
                              1个章节仅可添加1个作业
                               已发布内容，不可编辑 -->
                            <div class="flex align-center justify-between">
                                <div class="mini-deep-btnfix mr20" v-if="item.singleCourseVideo&&item.singleCourseVideo.length > 0">Check Videos</div>
                                <div class="mini-shadow-btnfix mr20"
                                    v-if="info.auditStatus != 9 &&item.singleCourseVideo&& item.singleCourseVideo.length == 0">Add Video</div>
                                <div class="mini-shadow-btnfix mr20" v-if="info.auditStatus != 9">Check Tasks</div>

                            </div>
                        </div>
                        <div class="item-box">
                            <div class="tab-info-item flex align-center justify-between"
                                v-for="(childItem, childIndex) in item.singleCourseVideo">
                                <div>
                                    <span class="font16">{{ childIndex + 1 }}. Submit video when publishing</span>
                                    <div class="flex info-word-box">
                                        <div class="info-word">{{ childItem.learnMinutes }} min</div>
                                        <div class="info-word">{{ feeFormatter(childItem.paymentType) }}</div>
                                        <div class="info-word">{{ childItem.learnMinutes }}:{{ childItem.learnSeconds }}
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="flex align-center">
                                    <span class="text-yellow pointer">Edit</span>
                                    <div class="col-line ml10 mr10"></div>
                                    <span class="text-yellow pointer">Delete</span>
                                </div> -->
                            </div>
                        </div>
                        <div class="flex justify-end description">Course Description</div>
                    </el-collapse-item>


                </el-collapse>
            </div>

        </div>
        <!-- 空 -->
        <div class="my-empty-box mt41" v-if="info.courseChapterList&&info.courseChapterList.length == 0">
            <EmptyBox emptyLabel="No content yet. Go ahead and add a new session."></EmptyBox>

        </div>
        <div class="flex justify-center mt52 mb52">
            <btn btnText="Save" btnType="2"></btn>
            <btn btnText="Submit" btnType="1"></btn>
            <btn btnText="Cancel" btnType="2"></btn>
            <!-- <el-button type="" class="common-btn-borderfix mr20">Save</el-button>
            <el-button type="primary" class="common-btn-deepfix  mr20">Submit</el-button>
            <el-button type="" class="common-btn-borderfix">Cancel</el-button> -->
        </div>


        <!-- 弹窗组件 添加章节 -->
        <PopUp title="Lack of Ink" ref="addpop" width="620">
            <el-form :rules="rules" ref="form" :model="form" label-width="125px">

                <el-form-item label="Session Title：" prop="chapterName">
                    <el-input v-model="form.chapterName" placeholder="Please Enter"></el-input>
                </el-form-item>
                <el-form-item label="Episode：" class="ml60" prop="name" v-for="(item, index) in form.courseVideoList"
                    :key="index" :prop="'courseVideoList.' + index + '.name'"
                    :rules="[{ required: true, message: 'Please Enter', trigger: ['blur', 'change'] }]">
                    <div>
                        <el-input v-model="item.name" placeholder="Please Enter"></el-input>
                    </div>

                </el-form-item>
                <el-form-item>
                    <div>
                        <span class="mr20 text-yellow pointer" @click="addEpisode">Add Episode</span>
                        <span class="text-yellow pointer" @click="del">Delete</span>
                    </div>
                </el-form-item>
            </el-form>
            <div class="flex justify-end mt33">
                <btn btnText="Determine" btnType="1" @click.native="determine"></btn>
                <btn btnText="Cancel" btnType="2" @click.native="cancel"></btn>
            </div>
        </PopUp>
        <SessionSortingDialog ref="session"></SessionSortingDialog>
    </div>
</template>
      
<script>
// 课程分单课  多课
// 单课  单课下只有一个视频   有作业   ['视频','作业']
// 多课  多课下 有多个章节  一个章节下可以上传多个视频   章节1:['视频'，'视频','作业']   章节2:['视频'，'视频',视频','作业']
import AprUserFollow from '../components/apr-user-follow.vue'
import IconBorderBtn from '../components/icon-border-btn.vue'
import IconsUserNum from '../components/icons-user-num.vue'
import PopUp from "@/components/PopUp"
import GreyTopTitle from '../components/grey-top-title.vue'
import SessionSortingDialog from './session-sorting-dialog.vue'
import { detailApi, addChapter } from "@/api/video"
export default {
    dicts: ['sys_label', 'sym_video_status', 'sym_video_type', 'sym_pay_type'],
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
            info: {},
            form: {
                id: '',
                chapterName: '',
                courseVideoList: [{ name: '' }]
            },
            baseUrl: process.env.VUE_APP_BASE_API,
            id: '',
            activeNames: ['name0'],
            rules: {
                chapterName: [
                    {
                        required: true,
                        message: "Please Enter",
                        trigger: "blur",
                    },
                ],

            }
        };
    },
    created() {
        this.getInfo()
    },
    methods: {
        getInfo() {
            this.id = this.$route.query.id
            detailApi(this.id).then(res => {
                this.info = res.data
            })
        },
        sessionClick() {
            this.$refs.session.open()
        },
        add() {
            this.$refs.addpop.open()
        },
        addEpisode() {
            this.form.courseVideoList.push({ name: '' })
        },
        del() {
            if (this.form.courseVideoList.length > 1) {
                this.form.courseVideoList.splice(this.form.courseVideoList.length - 1, 1)
            }
        },
        courseFormatter(type) {
            let val = ''
            this.dict.type.sym_video_type.forEach(item => {
                if (item.value == type) {
                    val = item.label
                }
            })
            return val
        },
        feeFormatter(type) {
            let val = ''
            this.dict.type.sym_pay_type.forEach(item => {
                if (item.value == type) {
                    val = item.label
                }
            })
            return val
        },
        handleChange() {

        },
        determine() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.form.courseId = this.id
                    addChapter(this.form).then(res => {
                        this.$message.success("Posted successfully");
                        this.cancel()
                        this.getInfo()
                    })

                } else {
                    console.log("error submit!!");
                    return false;
                }
            });

        },

        cancel() {
            this.form = {
                chapterName: '',
                courseVideoList: [{ name: '' }]
            }
            this.resetForm("form");
            this.$refs.addpop.close()
        }
    }
};
</script>
      
<style lang="scss" scoped>
.video-mask {
    position: relative;
    width: 422px;
    height: 285px;
    object-fit: cover;
    overflow: hidden;

    .el-image {
        width: 422px;
        height: 285px;
        cursor: pointer;
    }



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
            //  margin-bottom: 10px;
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

.info-word-box {
    width: 260px;
    justify-content: space-between;
    color: #00000042;
}
</style>
      