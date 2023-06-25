<template>
    <div>

        <div class="editPage__video">
            <div class="img__con">
                <!-- :data="uploadImgData" 
                :on-progress="uploadVideoProcess" -->
                <el-upload class="avatar-uploader" :headers="headers" :action="uploadImgUrl" :show-file-list="true"
                    :on-success="handleAvatarSuccess" :file-list="fileList" :before-upload="beforeAvatarUpload"
                    :on-remove="handleRemove">
                    <!-- <video width="100%" v-if="imageUrl" controls="controls" :key="menuKey">
                        <source :src="rightData.props.src" type="video/mp4" />
                    </video> -->
                    <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar" /> -->
                    <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
                    <div class="upload-video-box">
                        <img src="@/assets/course/upload.png" alt="">
                        {{ uploadText }}
                    </div>
                    <!-- <el-progress v-if="videoFlag == true" type="line" :percentage="videoUploadPercent"
                        style="margin-top: 30px"></el-progress> -->
                </el-upload>

                <div class="p-class">
                    Supported formats: .avi .rmvb .mp4;within 10GB
                </div>
            </div>
        </div>

    </div>
</template>
      
<script>
import { getToken } from "@/utils/auth";
export default {
    components: {

    },
    props: {
        limit: {
            type: Number,
            default: () => 1
        },
        value: {
            type: String,
            default: () => ''
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
        uploadText() {
            if (this.fileList.length > 0) {
                return 'Re-upload'
            } else {
                return 'Upload Video'
            }
        }
    },
    data() {
        return {
            // imageUrl: '',
            // 视频上传
            baseUrl: process.env.VUE_APP_BASE_API,
            uploadImgUrl: process.env.VUE_APP_BASE_API + "/common/upload", // 上传的图片服务器地址
            // uploadImgData: { busiName: 32 },
            // // 应付多个组件的情况 记录当前组件的key值
            // componentKey: null,
            // menuKey: 1, // 用来强制刷新
            // videoFlag: false,  // 进度条相关的
            // videoUploadPercent: 0,  // 进度条相关的

            headers: {
                Authorization: "Bearer " + getToken(),

            },
            fileList: []
        };

    },
    methods: {
        // 上传成功的函数
        handleAvatarSuccess(res, file) {
            // this.fileList=file.response
            // this.fileList.push({ name: res.fileName, url: this.baseUrl + res.fileName })
            this.$emit('input', file.response.fileName)
            // 进度条恢复到初始状态
            //   this.videoFlag = false;
            //   this.videoUploadPercent = 0;
            //   ++this.menuKey;
            // this.uploadText = 'Re-upload'
            // console.log(res)
            //   this.imageUrl = res.data.url;
            // 这里是向父级传值，不需要就去掉
            //   this.$emit("childRightFn", {
            //     ...this.rightData,
            //     ...{ imageUrl: this.imageUrl },
            //     ...{ props: { src: this.imageUrl } },
            //   });
        },
        beforeAvatarUpload(file) {
            //   file.type === "image/jpg" ||
            //   file.type === "image/png";
            const isMp4 = file.type === "video/mp4" || file.type === "video/avi" || file.type === "video/rmvb";
            // 限制文件最大不能超过 10GB
            const isLt2M = file.size / 1024 / 1024 < 10240;

            if (!isMp4) {
                this.$message.error("formats: .avi .rmvb .mp4!");
                return false
            }
            if (!isLt2M) {
                this.$message.error("The size of uploaded videos cannot exceed 10GB!");
                return false
            }
console.log(this.fileList,"vvvvvvvvvvvvvvvvv")
            if (this.fileList.length > 1) {
                this.fileList.splice(0, 1);
            }


        },

        handleRemove() {
            const findex = this.fileList.map(f => f.name).indexOf(file.name)
            if (findex > -1) {
                this.fileList.splice(findex, 1)
                this.$emit('input', '')
            }
        },
        // 对象转成指定字符串分隔
        listToString(list, separator) {
            console.log(list, "ccc")
            let strs = ''
            separator = separator || ','
            for (let i in list) {
                strs += list[i].url.replace(this.baseUrl, '') + separator
            }
            return strs != '' ? strs.substr(0, strs.length - 1) : ''
        },

        //进度条
        // uploadVideoProcess(event, file, fileList) {
        //     this.videoFlag = true;
        //     this.videoUploadPercent = parseInt(file.percentage);
        // },

    }

}

</script>
      
<style lang="scss" scoped>
.upload-video-box {
    width: 140px;
    padding: 0 13px;
    height: 32px;
    display: flex;
    color: rgba(0, 0, 0, 0.2);
    align-items: center;
    border-radius: 2px;
    justify-content: space-around;
    border: 1px solid #D9D9D9;
}

.p-class {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
}
</style>
      