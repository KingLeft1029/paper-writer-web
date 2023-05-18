<template>
    <div class="profile-box flex">
        <div class="profile-left flex flex-direction align-center">
            <div class="avatar-img" @click="editCropper()">
                <img v-bind:src="options.img" title="点击上传头像" alt="">
            </div>
            <el-button plain>Avatar</el-button>
            <el-dialog :title="title" :visible.sync="open" width="800px" append-to-body @opened="modalOpened"
                @close="closeDialog">
                <el-row>
                    <el-col :xs="24" :md="12" :style="{ height: '350px' }">
                        <vue-cropper ref="cropper" :img="options.img" :info="true" :autoCrop="options.autoCrop"
                            :autoCropWidth="options.autoCropWidth" :autoCropHeight="options.autoCropHeight"
                            :fixedBox="options.fixedBox" @realTime="realTime" v-if="visible" />
                    </el-col>
                    <el-col :xs="24" :md="12" :style="{ height: '350px' }">
                        <div class="avatar-upload-preview">
                            <img :src="previews.url" :style="previews.img" />
                        </div>
                    </el-col>
                </el-row>
                <br />
                <el-row>
                    <el-col :lg="2" :md="2">
                        <el-upload action="#" :http-request="requestUpload" :show-file-list="false"
                            :before-upload="beforeUpload">
                            <el-button size="small">
                                选择1
                                <i class="el-icon-upload el-icon--right"></i>
                            </el-button>
                        </el-upload>
                    </el-col>
                    <el-col :lg="{ span: 1, offset: 2 }" :md="2">
                        <el-button icon="el-icon-plus" size="small" @click="changeScale(1)"></el-button>
                    </el-col>
                    <el-col :lg="{ span: 1, offset: 1 }" :md="2">
                        <el-button icon="el-icon-minus" size="small" @click="changeScale(-1)"></el-button>
                    </el-col>
                    <el-col :lg="{ span: 1, offset: 1 }" :md="2">
                        <el-button icon="el-icon-refresh-left" size="small" @click="rotateLeft()"></el-button>
                    </el-col>
                    <el-col :lg="{ span: 1, offset: 1 }" :md="2">
                        <el-button icon="el-icon-refresh-right" size="small" @click="rotateRight()"></el-button>
                    </el-col>
                    <el-col :lg="{ span: 2, offset: 6 }" :md="2">
                        <el-button type="primary" size="small" @click="uploadImg()">提 交</el-button>
                    </el-col>
                </el-row>
            </el-dialog>
        </div>
        <div class="profile-right">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
                <el-form-item label="Username：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="Email：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="Gender：">
                    <div class="gender-box flex align-center">
                        <div class="flex align-center justify-between" :class="{'active-gender':genderKey==0}" @click="selectGender(0)">
                            <span>Male</span>
                            <img src="../../../assets/person/male.png" alt="">
                        </div>
                        <div class="flex align-center justify-between" :class="{'active-gender':genderKey==1}" @click="selectGender(1)">
                            <span>Female</span>
                            <img src="../../../assets/person/female.png" alt="">
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="Country：" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="" style="width:100%">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Contact number：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="Birthday：" required>
                    <el-date-picker type="date" placeholder="Year/Month/Day" v-model="ruleForm.date1"
                        style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="Age：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
              
            </el-form>
        </div>
    </div>
</template>
      
<script>
import store from "@/store";
import { VueCropper } from "vue-cropper";
export default {
    components: {
        VueCropper
    },
    data() {
        return {
            // 是否显示弹出层
            open: false,
            // 是否显示cropper
            visible: false,
            // 弹出层标题
            title: "修改头像",
            options: {
                img: store.getters.avatar, //裁剪图片的地址
                autoCrop: true, // 是否默认生成截图框
                autoCropWidth: 200, // 默认生成截图框宽度
                autoCropHeight: 200, // 默认生成截图框高度
                fixedBox: true // 固定截图框大小 不允许改变
            },
            previews: {},
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择活动资源', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                ]
            },
            genderKey:null
        };
    },
    methods: {
        // 编辑头像
        editCropper() {
            this.open = true;
        },
        // 打开弹出层结束时的回调
        modalOpened() {
            this.visible = true;
        },
        // 覆盖默认的上传行为
        requestUpload() {
        },
        // 向左旋转
        rotateLeft() {
            this.$refs.cropper.rotateLeft();
        },
        // 向右旋转
        rotateRight() {
            this.$refs.cropper.rotateRight();
        },
        // 图片缩放
        changeScale(num) {
            num = num || 1;
            this.$refs.cropper.changeScale(num);
        },
        // 上传预处理
        beforeUpload(file) {
            if (file.type.indexOf("image/") == -1) {
                this.$modal.msgError("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。");
            } else {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    this.options.img = reader.result;
                };
            }
        },
        // 上传图片
        uploadImg() {
            this.$refs.cropper.getCropBlob(data => {
                let formData = new FormData();
                formData.append("avatarfile", data);
                // uploadAvatar(formData).then(response => {
                //   this.open = false;
                //   this.options.img = process.env.VUE_APP_BASE_API + response.imgUrl;
                //   store.commit('SET_AVATAR', this.options.img);
                //   this.$modal.msgSuccess("修改成功");
                //   this.visible = false;
                // });
            });
        },
        // 实时预览
        realTime(data) {
            this.previews = data;
        },
        // 关闭窗口
        closeDialog() {
            this.options.img = store.getters.avatar
            this.visible = false;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        selectGender(index){
            this.genderKey=index
        }
    }
};
</script>
      
<style lang="scss" scoped>
.profile-box {
    margin-top: 30px;
    padding-right: 60px;

    .avatar-img {
        width: 60px;
        height: 60px;
        background: #D8D8D8;
        border: 1px solid rgba(151, 151, 151, 0.18);
        border-radius: 50%;
        overflow: hidden;
    }

    .profile-left {
        margin-right: 79px;
        margin-left: 18px;

        .el-button {
            width: 108px;
            height: 20px;
            background: rgba(238, 77, 17, 0.2);
            border-radius: 3px;
            color: #61687C;
            line-height: 0px;
            margin-top: 21px;
        }
    }
.profile-right{
    width: 100%;
}
    .gender-box {
        div {
            width: 130px;
            height: 32px;
            background: #FFFFFF;
            border-radius: 2px;
            border: 1px solid #D9D9D9;
            padding: 0 11px;
            line-height: 32px;
            margin-right: 20px;
            cursor: pointer;

            &:hover{
                border-color: #dc0025;
            }

        }
        .active-gender{
            border-color: #dc0025;
        }
    }

}
</style>
      