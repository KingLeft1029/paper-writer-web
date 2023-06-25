<template>
    <div class="container flex-sub mt20">
        <div class="border-line">
            <GreyTopTitle title="Add new" types="required"></GreyTopTitle>
            <div class="withdrawal-box">
                <el-form :rules="rules" ref="form" :model="form" label-width="220px">

                    <el-form-item label="Book Title：" prop="name">
                        <el-input v-model="form.name" placeholder="Please Enter"></el-input>
                    </el-form-item>
                    <el-form-item label="Cover：" prop="image">
                        <div class="flex align-end">
                            <ImageUpload :limit="1" fileType="jpg" v-model="form.image"></ImageUpload>
                            <div class="flex flex-direction font12 text-grey line-height24 ml20">
                                <span>Upload up to one image</span>
                                <span>support format：JPG</span>
                                <span>Suggest uploading images of 300 * 300</span>
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item label="URL：" prop="link">
                        <el-input v-model="form.link" placeholder="Please Enter"></el-input>
                    </el-form-item>

                </el-form>
                <div class="flex justify-center">
                    <router-link :to="postPath" class="mr20"><el-button type="primary" class="common-btn-deepfix" @click="submit">Post</el-button></router-link>
                   <router-link to=""> <el-button type="" class="common-btn-borderfix">Cancel</el-button></router-link>
                </div>
            </div>



        </div>
    </div>
</template>
<script>

import GreyTopTitle from '../components/grey-top-title.vue'
import ImageUpload from '@/components/ImageUpload/single.vue/'
import { addApi } from "@/api/book"
export default {
    components: { GreyTopTitle, ImageUpload },
    data() {
        return {
            form: {
                name: "",
                image: "",
                link: "",
            }, rules: {

                name: [
                    {
                        required: true,
                        message: "Please Enter",
                        trigger: "blur",
                    },
                ],
                // image: [
                //     {
                //         required: true,
                //         message: "Please Enter",
                //         trigger: "blur",
                //     },
                // ],


            },

        };
    },
    created() { },
    methods: {
        submit() {
            this.$refs.form.validate((valid) => {
                if (valid) {

                    addApi(this.form).then(res => {
                        this.$message.success("save successfully");
                  
                    })

                } else {

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
        