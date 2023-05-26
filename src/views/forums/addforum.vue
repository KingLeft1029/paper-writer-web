<template>
    <div class="container flex-sub mt20">
        <div class="border-line">
            <GreyTopTitle title="Add new" types="required"></GreyTopTitle>
            <div class="withdrawal-box">
                <el-form :rules="rules" ref="form" :model="form" label-width="70px">

                    <el-form-item label="Title：" prop="inkMock">
                        <el-input v-model="form.inkMock" placeholder="Please Enter"></el-input>
                    </el-form-item>
                    <el-form-item label="Tags：" prop="inkMock">
                        <!-- 最多五个 -->
                        <el-select v-model="form.status" placeholder="Tags" multiple  clearable  style="width:100%" :multiple-limit="5">
                            <el-option v-for="dict in options" :key="dict.value" :label="dict.label" 
                                :value="dict.value" />
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
                    <el-form-item label="Content：" prop="inkMocks">
                        <Editor v-model="form.answer"  :min-height="317"></Editor>
                        <!-- <el-input v-model="form.inkMock" placeholder="Please Enter"></el-input> -->
                    </el-form-item>

                </el-form>
                <div class="flex justify-center">
                    <el-button type="primary" class="common-btn-deepfix">Post</el-button>
                    <el-button type="" class="common-btn-borderfix">Cancel</el-button>
                </div>
            </div>



        </div>
    </div>
</template>
<script>

import GreyTopTitle from '../components/grey-top-title.vue'
import ImageUpload from '@/components/ImageUpload'
export default {
    components: { GreyTopTitle, ImageUpload },
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
        },],
            form: {
                userNameMock: "",
                inkMock: "",
                mockUser: "",
                appUser: "",
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
    padding: 0 260px;
    padding-top: 70px;
    padding-bottom: 0;
}
</style>
<style lang="scss"></style>
        