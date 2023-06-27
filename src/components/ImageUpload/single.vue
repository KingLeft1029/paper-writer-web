<template>
    <div class="component-upload-image" @mousemove="mouseImg(1)" @mouseleave="mouseImg(2)">
        <!-- <span>{{ baseUrl + imageUrl }}</span> -->
        <el-upload class="avatar-uploader" ref="upload" :headers="headers" :action="uploadImgUrl" :limit="limit" :listType="listType"
            :show-file-list="listType == 'picture' ? false : true" :on-success="handleUploadSuccess"
            :before-upload="handleBeforeUpload">
          
            <el-image class="avatar" v-if="imageUrl && listType == 'picture'" :src="baseUrl + imageUrl" fit="cover" lazy> </el-image>
 
            <div v-else class="flex img-box flex-direction align-center justify-center">
                <img src="@/assets/book/upload.png" alt="">
                <span class="font12 text-grey">{{ text }}</span>
            </div>
            <div class="img-mask flex justify-between align-center" v-if="maskFlag && listType == 'picture'">
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
import download from "@/utils/download"

export default {
    props: {
        text: {
            type: String,
            default: () => 'Telephoto'
        },
        listType: {
            type: String,
            default: () => 'picture'
        },
        limit: {
            type: Number,
            default: () => 1
        },
        value: {
            type: String,
            default: () => ''
        }
    },
    data() {
        return {
            imageUrl: "",
            fileName: '',
            dialogVisible: false,
            maskFlag: false,
            baseUrl: process.env.VUE_APP_BASE_API,
            uploadImgUrl: process.env.VUE_APP_BASE_API + "/common/upload", // 上传的图片服务器地址
            headers: {
                Authorization: "Bearer " + getToken(),

            },
        };
    },
    watch: {
        value(val) {
            if (val) {
   
                this.imageUrl = val
            }
        }
    },
    computed: {

    },
    created() { },
    mounted() { },
    methods: {
        mouseImg(num) {
            if (num == 1) {
                if (this.imageUrl !== '') {
                    this.maskFlag = true
                } else {
                    this.maskFlag = false
                }
            } else {
                this.maskFlag = false
            }
        },
        handleUploadSuccess(res, file) {
            this.$refs.upload.clearFiles();
        //    this.imageUrl = URL.createObjectURL(file.raw);
            this.imageUrl = file.response.fileName;
            this.fileName = file.response.fileName
            this.$emit('input', this.imageUrl )
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
                download.name(this.fileName)

            } else {
                // 删除
                this.imageUrl = ''
                this.$emit('input', this.imageUrl )
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
    // width: 80px;
    // height: 80px;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    ::v-deep .el-upload-list__item {
        width: 80px;
        height: 80px;
    }

}

.avatar-uploader {
    width: 80px;
    height: 80px;

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
    width: 80px;
    height: 80px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

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
  