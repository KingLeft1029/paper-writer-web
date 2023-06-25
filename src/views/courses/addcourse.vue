<template>
    <div class="container flex-sub mt20">
        <div class="border-line">
            <GreyTopTitle title="Edit Course" types="required"></GreyTopTitle>
            <div class="withdrawal-box">
                <el-form :rules="rules" ref="form" :model="form" label-width="180px">

                    <el-form-item label="Course Title：" prop="courseName">
                        <el-input v-model="form.courseName" placeholder="Please Enter"></el-input>
                    </el-form-item>
                    <el-form-item label="Tags：" prop="label">
                        <!-- 最多五个 -->
                        <el-select v-model="form.label" placeholder="Tags" multiple clearable style="width:100%"
                            :multipleLimit="5">
                            <el-option v-for="dict in dict.type.sys_label" :key="dict.value" :label="dict.label"
                                :value="dict.value" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Cover：" prop="coverChart">
                        <div class="flex align-end">
                            <ImageUpload :limit="1" v-model="form.coverChart"></ImageUpload>
                            <div class="flex flex-direction font12 text-grey line-height24 ml20">
                                <span>Upload up to one image</span>
                                <span>support format：JPG</span>
                                <span>Suggest uploading images of 300 * 300</span>
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item label="Course Type：" prop="courseType">
                        <el-radio-group v-model="form.courseType">
                            <el-radio label="1">Single Course</el-radio>
                            <el-radio label="2">Series Course</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="upload video：" prop="videoUrl" v-if="form.courseType == 1">
                        <VideoUpload v-model="form.videoUrl"></VideoUpload>
                    </el-form-item>
                    <el-form-item label="Charge Type：" prop="paymentType">
                        <el-radio-group v-model="form.paymentType">
                            <el-radio label="1">Free</el-radio>
                            <el-radio label="2">Paid</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="Course Price：" prop="cost" v-if="form.paymentType == 2">
                        <el-input v-model="form.cost" placeholder="Please Enter"></el-input>
                        <div class="p-class">
                            Description：illustrateillustrateillustrateillustrateillustrateillustrateillustrateillu</div>
                    </el-form-item>
                    <el-form-item label="Preview Type：" prop="trialType" v-if="form.paymentType == 2">
                        <el-radio-group v-model="form.trialType">
                            <el-radio label="0">Preview(No image)</el-radio>
                            <el-radio label="1">Preview</el-radio>
                            <el-radio label="2">No Preview</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="Preview Time：" class="is-required" v-if="form.paymentType == 2">

                        <div class="flex time-box">
                            <el-form-item prop="learnMinutes">
                                <div class="flex"> <el-input v-model="form.learnMinutes" type="number"
                                        placeholder=""></el-input>
                                    <span class="ml10 mr20">min</span>
                                </div>
                            </el-form-item>
                            <el-form-item prop="learnSeconds">
                                <div class="flex"> <el-input v-model="form.learnSeconds" type="number"
                                        placeholder=""></el-input>
                                    <span class="ml10">sec</span>
                                </div>
                            </el-form-item>
                        </div>

                    </el-form-item>
                    <el-form-item label="Video Watermark：" prop="videoWatermark">
                        <div class="flex align-center justify-between">
                            <el-input v-model="form.videoWatermark" style="width:220px"
                                placeholder="Enter the Watermark Text"></el-input>
                            <div class="flex ml20 mr20 select-form-box">
                                <el-select v-model="form.videoWatermarkPixels" style="width:60px">
                                    <el-option v-for="dict in dict.type.sym_pixels" :key="dict.value" :label="dict.label"
                                        :value="dict.value" />
                                </el-select>
                                <div class="px-class">px</div>
                            </div>
                            <el-select v-model="form.videoWatermarkTransparency" style="width:294px"
                                placeholder="Select Watermark Transparency">
                                <el-option v-for="dict in dict.type.sym_transparency" :key="dict.value" :label="dict.label"
                                    :value="dict.value" />
                            </el-select>
                            <el-button type="primary" class="common-btn-deepfix ml20">Preview</el-button>
                        </div>

                    </el-form-item>
                    <el-form-item label="Video Description：" prop="courseDescription">
                        <Editor v-model="form.courseDescription" :min-height="317"></Editor>
                    </el-form-item>
                    <el-form-item label="Assignment Status：" prop="hasHomework">
                        <el-radio-group v-model="form.hasHomework">
                            <el-radio label="0">No Content</el-radio>
                            <el-radio label="1">Assignment</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="Assignment Title：" prop="name" v-if="form.hasHomework == 1">
                        <el-input v-model="form.name" placeholder="Please Enter"></el-input>
                    </el-form-item>
                    <el-form-item label="Assignment Details：" prop="content" v-if="form.hasHomework == 1">
                        <Editor v-model="form.content" :min-height="317"></Editor>
                    </el-form-item>
                </el-form>
                <div class="flex justify-center">
                    <el-button type="primary" class="common-btn-deepfix" @click="onSubmit">New Course</el-button>
                    <el-button type="" class="common-btn-borderfix" @click="$router.go(-1)">Cancel</el-button>
                </div>
            </div>



        </div>
    </div>
</template>
<script>

import GreyTopTitle from '../components/grey-top-title.vue'
import ImageUpload from '@/components/ImageUpload/single.vue'
import VideoUpload from '@/components/VideoUpload'
import { add } from "@/api/video"
export default {
    dicts: ['sys_label', 'sym_pixels', 'sym_transparency'],
    components: { GreyTopTitle, ImageUpload, VideoUpload },
    data() {
        return {

            form: {
                courseName: '课程名称',
                label: '1',
                coverChart: '',
                courseType: '1',
                paymentType: '1',
                cost: '',
                trialType: '0',
                learnMinutes: '10',
                learnSeconds: '16',
                videoUrl: '',
                videoVOList: [],
                videoWatermark: '水印',
                videoWatermarkPixels: '6',
                videoWatermarkTransparency: '10',
                courseDescription: '课程描述',
                hasHomework: '0',
            },
            rules: {

                courseName: [
                    {
                        required: true,
                        message: "Please Enter",
                        trigger: "blur",
                    },
                ],
                label: [
                    {
                        required: true,
                        message: "Please Enter",
                        trigger: "change",
                    },
                ],
                coverChart: [
                    {
                        required: true,
                        message: "Please Enter",
                        trigger: "blur",
                    },
                ],
                courseType: [
                    {
                        required: true,
                        message: "Please Enter",
                        trigger: "blur",
                    },
                ],
                videoUrl: [
                    {
                        required: true,
                        message: "Please Enter",
                        trigger: "blur",
                    },
                ],
                paymentType: [
                    {
                        required: true,
                        message: "Please Enter",
                        trigger: "blur",
                    },
                ],
                cost: [
                    {
                        required: true,
                        message: "Please Enter",
                        trigger: "blur",
                    },
                ],
                trialType: [
                    {
                        required: true,
                        message: "Please Enter",
                        trigger: "blur",
                    },
                ],
                learnMinutes: [
                    {
                        required: true,
                        message: "Please Enter",
                        trigger: "blur",
                    },
                ],
                learnSeconds: [
                    {
                        required: true,
                        message: "Please Enter",
                        trigger: "blur",
                    },
                ],
                courseDescription: [
                    {
                        required: true,
                        message: "Please Enter",
                        trigger: "blur",
                    },
                ],
                hasHomework: [
                    {
                        required: true,
                        message: "Please Enter",
                        trigger: "blur",
                    },
                ],
                name: [
                    {
                        required: true,
                        message: "Please Enter",
                        trigger: "blur",
                    },
                ],
                content: [
                    {
                        required: true,
                        message: "Please Enter",
                        trigger: "blur",
                    },
                ],
            },

        };
    },
    created() { },
    methods: {
        // tagChange(e){
        //     console.log(e,"111")
        // },
        onSubmit(formName) {

            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.form.label = this.form.label.join(',')
                    // 单课  视频
                    if (this.form.courseType == 1) {
                        this.form.videoVOList.push({ content: this.form.videoUrl, fileType: '1' })
                    }
                    // 有作业 
                    if (this.form.hasHomework == 1) {
                        this.form.videoVOList.push({ content: this.form.content, name: this.form.name, fileType: '2' })
                    }
                    add(this.form).then(res => {
                        // 多课：跳转“发布课程（管理课程）”
                        // 单课：跳转"课程管理"课程状态为“待审核 Under review”
                        if (this.form.courseType == 1) {
                            this.$message.success("Posted successfully, please wait patiently for the platform to review.");
                            // this.$router.push({path:'/videos/coursestable'})
                            this.$router.go(-1)
                        } else {
                            this.$message.success("save successfully");
                            this.$router.push({path:'/videos/managementcourse'})
                        }


                    })
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
    },
};
</script>
        
<style lang="scss" scoped>
.withdrawal-box {
    padding: 0 120px;
    padding-top: 70px;
    padding-bottom: 0;

    span {

        color: rgba(0, 0, 0, 0.65);
    }

    .time-box {
        width: 50%;
    }

    .px-class {
        width: 50px;
        height: 32px;
        background: #FFFFFF;
        border-radius: 0px 2px 2px 0px;
        border: 1px solid #DCDFE6;

        color: rgba(0, 0, 0, 0.65);
        text-align: center;
        line-height: 32px;

    }

    .select-form-box {
        ::v-deep .el-select {
            line-height: 32px;
            // margin-top: 4px;
        }

        ::v-deep .el-input {
            line-height: 32px;

            input {
                line-height: 32px;
            }
        }

        ::v-deep .el-input__inner:focus {
            border-color: none !important
        }

        ::v-deep .el-select .el-input__inner:focus {
            border-color: #DCDFE6 !important
        }

        ::v-deep .el-input__inner {
            border-right: none;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            line-height: 32px;
        }

        .px-class {
            // margin-top: 4px;

        }
    }
}

.p-class {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
}
</style>
<style lang="scss"></style>
        