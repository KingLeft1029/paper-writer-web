<template>
    <div class="container flex-sub mt20">
        <div class="border-line">
            <GreyTopTitle title="Add new" types="required"></GreyTopTitle>
     <div class="withdrawal-box">
        <el-form :rules="rules" ref="form" :model="form" label-width="220px">
              
                <el-form-item label="Book Title：" prop="inkMock">
                    <el-input v-model="form.inkMock" placeholder="Please Enter"></el-input>
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
                <el-form-item label="URL：" prop="inkMocks">
                    <el-input v-model="form.inkMock" placeholder="Please Enter"></el-input>
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
    components: { GreyTopTitle,ImageUpload },
    data() {
        return {
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
.withdrawal-box{
    padding: 0 260px;
    padding-top: 70px;
    padding-bottom: 0;
}
</style>
<style lang="scss"></style>
        