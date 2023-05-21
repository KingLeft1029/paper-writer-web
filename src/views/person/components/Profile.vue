<template>
    <div class="profile-box flex">
        <div class="required flex align-center" v-if="editFlag">
            <span class="red">*</span>
            <span class="gray">Required</span>
        </div>
        <div class="profile-left flex flex-direction align-center" @click="editCropper()">
            <div class="avatar-img">
                <img v-bind:src="options.img" title="upload photo as avatar" alt="">
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
                        <el-button type="primary" class="common-btn-submit" @click="uploadImg()">Submit</el-button>
                    </el-col>
                </el-row>
            </el-dialog>
        </div>
        <div class="profile-right">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
                <el-form-item label="Username：" prop="userNameMock">
                    <el-input v-model="ruleForm.userNameMock" placeholder="Username"></el-input>
                </el-form-item>
                <el-form-item label="Email：" prop="emailMock">
                    <el-input v-model="ruleForm.emailMock" placeholder="Email"></el-input>
                </el-form-item>
                <el-form-item v-if="editFlag" label="Verification：" prop="verificationMock" style="position: relative;">
                    <el-input v-model="ruleForm.verificationMock" placeholder="Verification"></el-input>
                    <div class="send-class" @click="send">{{ copyText }}</div>

                    <div class="slideverify" v-show="isShowSlide" @mouseleave="hideSlide">
                        <SlideVerify ref="slideblock" @success="sendSmsCode"></SlideVerify>
                    </div>


                </el-form-item>
                <el-form-item label="Gender：" prop="genderKeyMock">
                    <span class="prefer" v-if="!ruleForm.genderKeyMock && ruleForm.genderKeyMock != 0">Prefer not to
                        say</span>
                    <div v-else class="gender-box flex align-center">
                        <div class="flex align-center justify-between"
                            :class="{ 'active-gender': ruleForm.genderKeyMock == 0 }" @click="selectGender(0)">
                            <span>Male</span>
                            <img src="../../../assets/person/male.png" alt="">
                        </div>
                        <div class="flex align-center justify-between"
                            :class="{ 'active-gender': ruleForm.genderKeyMock == 1 }" @click="selectGender(1)">
                            <span>Female</span>
                            <img src="../../../assets/person/female.png" alt="">
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="Country：" prop="countryMock">
                    <el-select v-model="ruleForm.countryMock" placeholder="Country" style="width:100%">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Contact number：" prop="numberMock">
                    <el-input type="number" v-model="ruleForm.numberMock" placeholder="Contact number"></el-input>
                </el-form-item>
                <el-form-item label="Birthday：" required>
                    <el-date-picker type="date" :picker-options="pickerOptions" placeholder="Year/Month/Day"
                        v-model="ruleForm.BirthdayMock" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="Age：" prop="">
                    <el-input v-model="ruleForm.ageMock" disabled placeholder="Age"></el-input>
                </el-form-item>
                <div class="submit-box" v-if="!editFlag" @click="edit">
                    <el-button class="common-btn-edit margin-auto"  type="primary" > Edit </el-button>
                </div>
              
                <div class="btn-box" v-else>
                    <el-button size="small" @click="editFlag = false">Cancel</el-button>
                    <el-button size="small" type="primary" @click="save('ruleForm')"> Save </el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>
      
<script>
import store from "@/store";
import { VueCropper } from "vue-cropper";
import SlideVerify from "@/components/SlideVerify";//引入

export default {
    components: {
        VueCropper,
        SlideVerify
    },
    watch: {

        'ruleForm.BirthdayMock': {
            handler: function (val) {
                if (val) {
                    let birthYear = val.getFullYear()
                    let birthMonth = val.getMonth() + 1
                    let birthDay = val.getDate()
                    let now = new Date()
                    let nowYear = now.getFullYear()
                    let nowMonth = now.getMonth() + 1
                    let nowDay = now.getDate()

                    if (nowYear == birthYear) {
                        this.ruleForm.ageMock = 0
                    } else {
                        let ageDiff = nowYear - birthYear
                        if (ageDiff > 0) {
                            if (nowMonth == birthMonth) {
                                let dayDiff = nowDay - birthDay
                                if (dayDiff < 0) {
                                    this.ruleForm.ageMock = ageDiff - 1
                                } else {
                                    this.ruleForm.ageMock = ageDiff
                                }
                            } else {
                                let monthDiff = nowMonth - birthMonth
                                if (monthDiff < 0) {
                                    this.ruleForm.ageMock = ageDiff - 1
                                } else {
                                    this.ruleForm.ageMock = ageDiff
                                }
                            }
                        }
                    }

                }
            },
            deep: true,
            // 立即以obj.name的当前值触发回调
            immediate: true
        }

    },
    data() {
        return {
            // 是否显示弹出层
            open: false,
            // 是否显示cropper
            visible: false,
            // 弹出层标题
            title: "Modify profile picture",
            options: {
                img: store.getters.avatar, //裁剪图片的地址
                autoCrop: true, // 是否默认生成截图框
                autoCropWidth: 200, // 默认生成截图框宽度
                autoCropHeight: 200, // 默认生成截图框高度
                fixedBox: true // 固定截图框大小 不允许改变
            },
            previews: {},
            ruleForm: {
                userNameMock: '',
                emailMock: '',
                verificationMock: '',
                genderKeyMock: '',
                countryMock: '',
                numberMock: '',
                BirthdayMock: '',
                ageMock: ''
            },
            rules: {

                userNameMock: [
                    { required: true, message: 'Please enter the user name', trigger: 'blur' },
                ],
                emailMock: [
                    { required: true, message: 'Please enter the email address', trigger: 'blur' },
                    {
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Please enter the correct email address",
                        trigger: "blur"
                    }
                ],
                verificationMock: [
                    { required: true, message: 'Please enter the verification code', trigger: 'blur' },
                ],
                countryMock: [
                    { required: true, message: 'Please select your country', trigger: 'change' }
                ],


            },

            editFlag: false,
            copyText: "Send the verification code",
            setInterval: null,
            isShowSlide: false,
            //限制选择时间为当天之前的
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now() - 8.64e6
                }
            },
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
        // 保存
        save(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                    this.editFlag = false
                    this.$message.success('save successfully')
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        // 选择性别
        selectGender(index) {
            this.ruleForm.genderKeyMock = index
        },
        // 点击编辑
        edit() {
            this.editFlag = true
        },
        // 发送验证码
        send() {
            if (!this.ruleForm.name) {
                this.$message.warning("Please enter the email address");
                return;
            }
            this.isShowSlide = true

            // if (this.setInterval) {
            //     this.$message.warning("Do not obtain the verification code repeatedly");
            //     return;
            // }
            // this.copyText = "Try again in 60 seconds";
            // let num = 59;

            // pwdBackGetCode(this.loginForm.pwdBackNumber).then((res) => {
            //     this.$message.success("The verification code has been sent");
            // });
            // this.setInterval = setInterval(() => {
            //     this.copyText = `${num--} Second recapture`;
            //     if (num === 0) {
            //         this.copyText = "Send the verification code";
            //         clearInterval(this.setInterval);
            //         this.setInterval = null;
            //     }
            // }, 1000);
        },
        hideSlide() {
            setTimeout(() => {
                this.isShowSlide = false;
            }, 500);
        },
        sendSmsCode() {
            setTimeout(() => {
                this.isShowSlide = false;
            }, 500)
            //此处的处理是：图片验证通过后，发送短信验证码，这个要根据具体情况单独处理
            //   setTimeout(() => {
            //     this.$api
            //       .getSendForgetSmsCode({
            //         mobile: this.form.account,
            //       })
            //       .then((res) => {
            //         this.isShowSlide = false;
            //         if (res.data.success) {
            //           this.timeCountDown();
            //           this.$message.success("短信验证码发送成功");
            //         } else {
            //           this.$message.error(res.data);
            //         }
            //       })
            //       .catch((err) => {});
            //   }, 500);
        },

    }
};
</script>
      
<style lang="scss" scoped>
.profile-box {
    margin-top: 30px;
    padding-right: 60px;
    position: relative;

    .required {
        position: absolute;
        right: 0px;
        top:-62px;
    }

    .red {
        color: #E93636;
        font-size: 14px;
        line-height: 22px;
        margin-top: 7px;
        margin-right: 6px;
    }

    .gray {
        line-height: 22px;
        color: rgba(0, 0, 0, 0.25);
    }

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

    .profile-right {
        width: 100%;

        .submit-box {
             width: 100%;
             display: flex;
             justify-content: center;
       
            cursor: pointer;
            margin-top: 40px;
        }

        .prefer {
            color: #b4bccc
        }

        .send-class {
            width: 164px;
            height: 26px;
            color: #fff;
            text-align: center;
            line-height: 26px;
            font-size: 12px;
            position: absolute;
            right: 7px;
            top: 7px;
            cursor: pointer;
            background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
        }

        .slideverify {
            position: absolute;
            z-index: 11;
            top: 40px;
            right: 0;
            background-color: #fff;

        }

        .btn-box {
            display: flex;
            justify-content: flex-end;

            margin-top: 40px;

            .el-button {
                margin-left: 24px;
            }

        }


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

            &:hover {
                border-color: #dc0025;
            }

        }

        .active-gender {
            border-color: #dc0025;
        }
    }


}
</style>
      