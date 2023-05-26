<template>
    <div class="container flex-sub mt20">
        <div class="border-line">
            <GreyTopTitle title="Course Management  - Add assingments" types="required"></GreyTopTitle>
            <div class="withdrawal-box">
                <el-form :rules="rules" ref="form" :model="form" label-width="180px">
                    <el-form-item label="Course Title：" prop="inkMock">
                     {{ form.inkMock }}
                    </el-form-item>
                    <el-form-item label="Session Title：" prop="inkMock">
                        {{ form.inkMock }}
                    </el-form-item>
                    <el-form-item label="Assignment Title：" prop="inkMock">
                        <el-input v-model="form.inkMock" placeholder="Please Enter"></el-input>
                    </el-form-item>
                    <el-form-item label="Assignment Details：" prop="inkMocks">
                        <Editor v-model="form.answer" :min-height="317"></Editor>
                    </el-form-item>
                </el-form>
                <div class="flex justify-center">
                    <el-button type="primary" class="common-btn-deepfix">Submit</el-button>
                    <el-button type="" class="common-btn-borderfix">Cancel</el-button>
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
                value: '选项4',
                label: '龙须面'
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
        