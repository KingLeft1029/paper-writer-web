<template>
    <div class="container flex-sub mt20">
        <div class="border-line">
            <GreyTopTitle title="Ink withdrawal" types="required"></GreyTopTitle>
     <div class="withdrawal-box">
        <el-form :rules="rules" ref="form" :model="form" label-width="220px">
                <el-form-item label="Ink：" >
                    <el-input v-model="form.userNameMock" disabled ></el-input>
                </el-form-item>
                <el-form-item label="Ink to Withdraw：" required>
                    <el-input v-model="form.inkMock" disabled></el-input>
                </el-form-item>
                <el-form-item label="Amount（$）：" >
                    <el-input v-model="form.inkMock" disabled></el-input>
                </el-form-item>
                <el-form-item label="Transaction Fee（$）：" prop="inkMock">
                    <el-input v-model="form.inkMock" placeholder="Please Enter"></el-input>
                </el-form-item>

                <el-form-item label="Payment Method：" prop="mockUser">
                    <el-radio-group v-model="form.mockUser">
                        <el-radio label="PayPal"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <div class="flex justify-center">
                <el-button type="primary" class="common-btn-long">Confirm</el-button>
            </div>
     </div>



        </div>
    </div>
</template>
<script>

import GreyTopTitle from '../components/grey-top-title.vue'
export default {
    components: { GreyTopTitle, },
    data() {
        return {
            form: {
                userNameMock: "",
                inkMock: "",
                mockUser: "",
                appUser: "",
            }, rules: {
              
                inkMock: [
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
                    alert("submit!");
                    //   this.editFlag = false;
                    this.$message.success("save successfully");
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
.withdrawal-box{
    padding: 0 260px;
    padding-top: 70px;
    padding-bottom: 0;
}
</style>
<style lang="scss"></style>
        