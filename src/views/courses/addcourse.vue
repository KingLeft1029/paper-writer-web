<template>
    <div class="container flex-sub mt20">
        <div class="border-line">
            <GreyTopTitle title="Edit Course" types="required"></GreyTopTitle>
            <div class="withdrawal-box">
                <el-form :rules="rules" ref="form" :model="form" label-width="180px">

                    <el-form-item label="Course Title：" prop="inkMock">
                        <el-input v-model="form.inkMock" placeholder="Please Enter"></el-input>
                    </el-form-item>
                    <el-form-item label="Tags：" prop="inkMock">
                        <!-- 最多五个 -->
                        <el-select v-model="form.status" placeholder="Tags" multiple clearable style="width:100%"
                            :multiple-limit="5">
                            <el-option v-for="dict in options" :key="dict.value" :label="dict.label" :value="dict.value" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Cover：" prop="inkMock">
                        <div class="flex align-end">
                            <ImageUpload :limit="1" fileType="jpg"></ImageUpload>
                            <div class="flex flex-direction font12 text-grey line-height24 ml20">
                                <span>Upload up to one image</span>
                                <span>support format：JPG</span>
                                <span>Suggest uploading images of 300 * 300</span>
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item label="Course Type：" prop="inkMock">
                        <el-radio-group v-model="form.mockUser">
                            <el-radio label="Single Course"></el-radio>
                            <el-radio label="Series Course"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="upload video：" prop="inkMock">
                        <VideoUpload></VideoUpload>
                    </el-form-item>
                    <el-form-item label="Charge Type：" prop="inkMock">
                        <el-radio-group v-model="form.mockUser">
                            <el-radio label="Free"></el-radio>
                            <el-radio label="Paid"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="Course Price：" prop="inkMock">
                        <el-input v-model="form.inkMock" placeholder="Please Enter"></el-input>
                        <div class="p-class">
                            Description：illustrateillustrateillustrateillustrateillustrateillustrateillustrateillu</div>
                    </el-form-item>
                    <el-form-item label="Preview Type：" prop="inkMock">
                        <el-radio-group v-model="form.mockUser">
                            <el-radio label="Preview(No image)"></el-radio>
                            <el-radio label="Preview"></el-radio>
                            <el-radio label="No Preview"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="Preview Time：" prop="inkMock">
                        <div class="flex time-box">
                            <div class="flex"> <el-input v-model="form.inkMock" type="number" placeholder=""></el-input>
                                <span class="ml10 mr20">min</span>
                            </div>
                            <div class="flex"> <el-input v-model="form.inkMock" type="number" placeholder=""></el-input>
                                <span class="ml10">sec</span>
                            </div>
                        </div>

                    </el-form-item>
                    <el-form-item label="Course Title：" prop="inkMock">
                        <div class="flex align-center justify-between">
                            <el-input v-model="form.inkMock" style="width:220px"
                                placeholder="Enter the Watermark Text"></el-input>
                            <div class="flex ml20 mr20 select-form-box">
                                <el-select v-model="form.status" style="width:60px">
                                    <el-option v-for="dict in options" :key="dict.value" :label="dict.label"
                                        :value="dict.value" />
                                </el-select>
                                <div class="px-class">px</div>
                            </div>
                            <el-select v-model="form.status" style="width:294px"
                                placeholder="Select Watermark Transparency">
                                <el-option v-for="dict in options" :key="dict.value" :label="dict.label"
                                    :value="dict.value" />
                            </el-select>
                            <el-button type="primary" class="common-btn-deepfix ml20">Preview</el-button>
                        </div>

                    </el-form-item>
                    <el-form-item label="Video Watermark：" prop="inkMocks">
                        <Editor v-model="form.answer" :min-height="317"></Editor>
                    </el-form-item>
                    <el-form-item label="Assignment Status：" prop="inkMock">
                        <el-radio-group v-model="form.mockUser">
                            <el-radio label="No Content"></el-radio>
                            <el-radio label="Assignment"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="Assignment Title：" prop="inkMock">
                        <el-input v-model="form.inkMock" placeholder="Please Enter"></el-input>
                    </el-form-item>
                    <el-form-item label="Assignment Details：" prop="inkMocks">
                        <Editor  v-model="form.answer" :min-height="317"></Editor>
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
import ImageUpload from '@/components/ImageUpload'
import VideoUpload from '@/components/VideoUpload'
export default {
    components: { GreyTopTitle, ImageUpload, VideoUpload },
    data() {
        return {
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
                value: '选项5',
                label: '北京烤鸭'
            }, {
                value: '选项4',
                label: '龙须面'
            },
            {
                value: '6',
                label: '6'
            },],
            form: {
                userNameMock: "",
                inkMock: "",
                mockUser: "",
                appUser: "",
                status: '6'
            }, rules: {

                inkMock: [
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
                    alert("submit!");
                    //   this.editFlag = false;
                    this.$message.success("save successfully");
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
}</style>
<style lang="scss"></style>
        