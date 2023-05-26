<template>
    <div class="change-pass">
        <div class="required flex align-center">
            <span class="red">*</span>
            <span class="gray">Required</span>
        </div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
            <el-form-item label="Current Password：" prop="currentpassword">
                <el-input type="currentpassword" v-model="ruleForm.currentpassword" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="New Password：" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Confirm Password：" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>

       
               <div class="flex justify-center mt41">
                <el-button type="primary" class="common-btn-deep" @click="submitForm('ruleForm')">Save</el-button>

               </div>
        </el-form>
    </div>
</template>
      
<script>

export default {
    components: {

    },
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                currentpassword: '',
                pass: '',
                checkPass: '',
            },
            rules: {
                pass: [
                    { validator: validatePass,required:true, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2,required:true, trigger: 'blur' }
                ],
                currentpassword: [
                    { required:true, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
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
        resetForm() {
            this.$refs.ruleForm.resetFields();
        }
    }
};
</script>
      
<style lang="scss" scoped>
.change-pass {
    position: relative;
padding: 20px 120px;
    .required {
        position: absolute;
        right: 0px;
        top: -52px;
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

}
</style>
      