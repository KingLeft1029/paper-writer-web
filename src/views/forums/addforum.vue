<template>
    <div class="container flex-sub mt20">
        <div class="border-line">
            <GreyTopTitle title="Add new" types="required"></GreyTopTitle>
            <div class="withdrawal-box">
                <el-form :rules="rules" ref="form" :model="form" label-width="70px">

                    <el-form-item label="Title：" prop="name">
                        <el-input v-model="form.name" placeholder="Please Enter"></el-input>
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
                            <ImageUpload :limit="1"  v-model="form.coverChart"></ImageUpload>
                            <div class="flex flex-direction font12 text-grey line-height24 ml20">
                                <span>Upload up to one image</span>
                                <span>support format：JPG</span>
                                <span>Suggest uploading images of 300 * 300</span>
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item label="Content：" prop="content">
                        <Editor v-model="form.content"  :min-height="317"></Editor>
                    </el-form-item>

                </el-form>
                <div class="flex justify-center">
                    <btn btnText="Post" btnType="1" @click.native="onSubmit"></btn>
                    <btn btnText="Cancel" btnType="2" @click.native="$router.go(-1)"></btn>
                  
                </div>
            </div>



        </div>
    </div>
</template>
<script>

import GreyTopTitle from '../components/grey-top-title.vue'
import ImageUpload from '@/components/ImageUpload/single.vue'
import {add} from "@/api/forums"
export default {
    dicts: ['sys_label'],
    components: { GreyTopTitle, ImageUpload },
    data() {
        return {

            form: {
                name: "文章名称",
                label: "1",
                coverChart: "",
                content: "文章内容",
            },
             rules: {

                name: [
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
        onSubmit(formName) {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.form.label=this.form.label.join(',')
                    add(this.form).then(res => {   
                        this.$message.success("Posted successfully, please wait patiently for the platform to review.");
                        this.$router.go(-1)
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
    padding: 0 260px;
    padding-top: 70px;
    padding-bottom: 0;
}
</style>
<style lang="scss"></style>
        