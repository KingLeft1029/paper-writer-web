<template>
    <div class="component-upload-image">
        <el-upload  class="avatar-uploader" :action="uploadImgUrl" list-type="picture-card" :on-success="handleUploadSuccess"
            :before-upload="handleBeforeUpload" :limit="limit" :on-error="handleUploadError" :on-exceed="handleExceed"
            name="file" :on-remove="handleRemove" :show-file-list="true" :headers="headers" :file-list="fileList"
            :on-preview="handlePictureCardPreview" :class="{ hide: this.fileList.length >= this.limit }">
           <div class="flex img-box flex-direction align-center justify-center">
            <img src="@/assets/book/upload.png" alt="">
            <span class="font12 text-grey">Pictures</span>
           </div>
        </el-upload>


        <el-dialog :visible.sync="dialogVisible" title="预览" width="800" append-to-body>
            <img :src="dialogImageUrl" style="display: block; max-width: 100%; margin: 0 auto" />
        </el-dialog>
    </div>
</template>
  
<script>
import { getToken } from '@/utils/auth'

export default {
    props: {
        value: [String, Object, Array],
        // 图片数量限制
        limit: {
            type: Number,
            default: 1
        },
        // 大小限制(MB)
        fileSize: {
            type: Number,
            default: 5
        },
        // 文件类型, 例如['png', 'jpg', 'jpeg']
        fileType: {
            type: Array,
            default: () => ['jpg']
            // default: () => ['png', 'jpg', 'jpeg']
        },
        // 是否显示提示
        isShowTip: {
            type: Boolean,
            default: true
        },
        uploadUrl: {
            type: String,
            default: '/common/upload'
        }
    },
    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            hideUpload: false,
            baseUrl: process.env.VUE_APP_BASE_API,
            uploadImgUrl: process.env.VUE_APP_BASE_API + this.uploadUrl, // 上传的图片服务器地址
            headers: {
                Authorization: 'Bearer ' + getToken()
            },
            fileList: [],

        }
    },
    watch: {
        value: {
            handler(val) {
                if (val) {
                    // 首先将值转为数组
                    const list = Array.isArray(val) ? val : this.value.split(',')
                    // 然后将数组转为对象数组
                    this.fileList = list.map(item => {
                        if (typeof item === 'string') {
                            if (item.indexOf(this.baseUrl) === -1) {
                                item = { name: this.baseUrl + item, url: this.baseUrl + item }
                            } else {
                                item = { name: item, url: item }
                            }
                        }
                        return item
                    })
                } else {
                    this.fileList = []
                    return []
                }
            },
            deep: true,
            immediate: true
        }
    },
    computed: {
        // 是否显示提示
        showTip() {
            return this.isShowTip && (this.fileType || this.fileSize)
        }
    },
    methods: {
        // 删除图片
        handleRemove(file, fileList) {
            const findex = this.fileList.map(f => f.name).indexOf(file.name)
            if (findex > -1) {
                this.fileList.splice(findex, 1)
                this.$emit('input', this.listToString(this.fileList))
            }
        },
        // 上传成功回调
        handleUploadSuccess(res) {
            console.log(res, "vvv")
            this.fileList.push({ name: res.fileName, url: this.baseUrl + res.fileName })
            this.$emit('input', this.listToString(this.fileList))
            this.loading.close()
        },
        // 上传前loading加载
        handleBeforeUpload(file) {
            let isImg = false
            if (this.fileType.length) {
                let fileExtension = ''
                if (file.name.lastIndexOf('.') > -1) {
                    fileExtension = file.name.slice(file.name.lastIndexOf('.') + 1)
                }
                isImg = this.fileType.some(type => {
                    if (file.type.indexOf(type) > -1) return true
                    if (fileExtension && fileExtension.indexOf(type) > -1) return true
                    return false
                })
            } else {
                isImg = file.type.indexOf('image') > -1
            }

            if (!isImg) {
                this.$message.error(
                    `文件格式不正确, 请上传${this.fileType.join('/')}图片格式文件!`
                )
                return false
            }
            if (this.fileSize) {
                const isLt = file.size / 1024 / 1024 < this.fileSize
                if (!isLt) {
                    this.$message.error(`上传头像图片大小不能超过 ${this.fileSize} MB!`)
                    return false
                }
            }
            this.loading = this.$loading({
                lock: true,
                text: '上传中',
                background: 'rgba(0, 0, 0, 0.7)'
            })
        },
        // 文件个数超出
        handleExceed() {
            this.$message.error(`上传文件数量不能超过 ${this.limit} 个!`)
        },
        // 上传失败
        handleUploadError() {
            this.$message({
                type: 'error',
                message: '上传失败'
            })
            this.loading.close()
        },
        // 预览
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        },
        // 对象转成指定字符串分隔
        listToString(list, separator) {
            let strs = ''
            separator = separator || ','
            for (let i in list) {
                strs += list[i].url.replace(this.baseUrl, '') + separator
            }
            return strs != '' ? strs.substr(0, strs.length - 1) : ''
        },
        updateShow(picPath) {
            if (!picPath) {
                return
            }
            downloadBase64({ resource: picPath }).then(response => {
                let data = response.data
                let imageUrl = `data:image/${data.fileType};base64,` + data.fileData
                this.fileList.splice(0, this.fileList.length, {
                    "url": imageUrl,
                    "name": picPath,
                    "id": Date.now()
                })
            })
        }
    }
}
</script>
<style></style>
<style scoped lang="scss">
component-upload-image {
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
.img-box {
    width: 100%;
    height: 100%;
    padding-top: 10px;
    line-height: 26px;
}

// .el-upload--picture-card 控制加号部分
::v-deep.hide .el-upload--picture-card {
    display: none;
}

// 去掉动画效果
::v-deep .el-list-enter-active,
::v-deep .el-list-leave-active {
    transition: all 0s;
}

::v-deep .el-list-enter,
.el-list-leave-active {
    opacity: 0;
    transform: translateY(0);
}

.el-upload__tip {
    line-height: 12px;
    margin-left: 20px;
    color: #999;
}
</style>
  
  