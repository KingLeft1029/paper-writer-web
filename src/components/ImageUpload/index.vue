<template>
    <div class="component-upload-image" @mousemove="mouseImg(1)" @mouseleave="mouseImg(2)">

        <el-upload class="avatar-uploader" :action="uploadImgUrl" :show-file-list="false" :on-success="handleUploadSuccess"
            :before-upload="handleBeforeUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
            <div v-else class="flex img-box flex-direction align-center justify-center">
                <img src="@/assets/book/upload.png" alt="">
                <span class="font12 text-grey">Telephoto</span>
            </div>
            <div class="img-mask flex justify-between align-center" v-if="maskFlag">
                <img src="@/assets/book/prew.png" @click.stop="imgClick(1)" alt="">
                <img src="@/assets/book/down.png" @click.stop="imgClick(2)" alt="">
                <img src="@/assets/book/del.png" @click.stop="imgClick(3)" alt="">
            </div>
        </el-upload>


        <el-dialog :visible.sync="dialogVisible" title="preview" width="800" append-to-body>
            <img :src="imageUrl" style="display: block; max-width: 100%; margin: 0 auto" />
        </el-dialog>
    </div>
</template>
  
<script>
import { getToken } from "@/utils/auth";

export default {
    props: {

    },
    data() {
        return {
            imageUrl: "",
            dialogVisible: false,
            maskFlag:false,
            baseUrl: process.env.VUE_APP_BASE_API,
            uploadImgUrl: process.env.VUE_APP_BASE_API + "/common/upload", // 上传的图片服务器地址
            headers: {
                Authorization: "Bearer " + getToken(),
            },
        };
    },
    watch: {
       
    },
    computed: {
      
    },
    created() { },
    mounted() { },
    methods: {
        mouseImg(num){
           if(num==1){
            if(this.imageUrl!==''){
                this.maskFlag=true
            }else{
                this.maskFlag=false
            }
           }else{
            this.maskFlag=false
           }
        },
        handleUploadSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        handleBeforeUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('Uploaded images can only be JPG format!');
            }
            if (!isLt2M) {
                this.$message.error('Upload picture size cannot exceed 2MB!');
            }
            return isJPG && isLt2M;
        },
        imgClick(num) {
            if (num == 1) {
                // 放大
                this.dialogVisible = true;
            } else if (num == 2) {
                // 下载
            } else {
                // 删除
                this.imageUrl = ''

            }
        },
        // 上传失败
        handleUploadError() {
            this.$message({
                type: "error",
                message: "fail to upload",
            });
            this.loading.close();
        },
      

    },
};
</script>
<style scoped lang="scss">
.component-upload-image {
    width: 80px;
    height: 80px;
    position: relative;
}

.avatar-uploader {
    ::v-deep .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: 80px;
        height: 80px;
    }
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.img-box {
    width: 100%;
    height: 100%;
    padding-top: 10px;
    line-height: 26px;
}

.img-mask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.36);
    padding: 0 8px;
}
</style>
  