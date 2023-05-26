<template>
    <div>

        <div class="editPage__video">
            <div class="img__con">
                <el-upload class="avatar-uploader" :action="uploadImgUrl" :data="uploadImgData" :show-file-list="false"
                    :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" :on-progress="uploadVideoProcess">
                    <video width="100%" v-if="imageUrl" controls="controls" :key="menuKey">
                        <source :src="rightData.props.src" type="video/mp4" />
                    </video>
                    <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar" /> -->
                    <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
                    <div class="upload-video-box">
                        <img src="@/assets/course/upload.png" alt="">
                        Upload Video
                    </div>
                    <el-progress v-if="videoFlag == true" type="line" :percentage="videoUploadPercent"
                        style="margin-top: 30px"></el-progress>
                </el-upload>

                <div class="p-class">
                    Supported formats: .avi .rmvb .mp4;within 10GB
                </div>
            </div>
        </div>

    </div>
</template>
      
<script>

export default {
    components: {

    },
    data() {
        return {
            imageUrl: this.rightData.imageUrl,
      // 视频上传
      uploadImgUrl: `${process.env.VUE_APP_BASE_API}/common-server/aliFile/upLoadVideo`,
      uploadImgData: { busiName: 32 },
      // 应付多个组件的情况 记录当前组件的key值
      componentKey: null,
      menuKey: 1, // 用来强制刷新
      videoFlag: false,  // 进度条相关的
      videoUploadPercent: 0,  // 进度条相关的

        };
    },
    methods: {
       // 上传成功的函数
    handleAvatarSuccess(res, file) {
       // 进度条恢复到初始状态
      this.videoFlag = false;
      this.videoUploadPercent = 0;
      ++this.menuKey;
      // console.log(res)
      this.imageUrl = res.data.url;
      // 这里是向父级传值，不需要就去掉
      this.$emit("childRightFn", {
        ...this.rightData,
        ...{ imageUrl: this.imageUrl },
        ...{ props: { src: this.imageUrl } },
      });
    },
    beforeAvatarUpload(file) {
      //   file.type === "image/jpg" ||
      //   file.type === "image/png";
      const isMp4 = file.type === "video/mp4"||file.type === "video/avi"||file.type === "video/rmvb";
      // 限制文件最大不能超过 10GB
      const isLt2M = file.size / 1024 / 1024 < 10240;

      if (!isMp4) {
        this.$message.error("formats: .avi .rmvb .mp4!");
      }
      if (!isLt2M) {
        this.$message.error("The size of uploaded videos cannot exceed 10GB!");
      }
      return isMp4 && isLt2M;
    },

    //进度条
    uploadVideoProcess(event, file, fileList) {
      this.videoFlag = true;
      this.videoUploadPercent = parseInt(file.percentage);
    },

    }

}

</script>
      
<style lang="scss" scoped>
.upload-video-box{
    width: 140px;
padding: 0 13px;
height: 32px;
display: flex;
color: rgba(0,0,0,0.2);
align-items: center;
border-radius: 2px;
justify-content: space-between;
border: 1px solid #D9D9D9;
}
.p-class{
    font-size: 12px;
color: rgba(0,0,0,0.4);
}
</style>
      