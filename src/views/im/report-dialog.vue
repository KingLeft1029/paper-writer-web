<template>
    <div class="dialog-box">
        <PopUp title="Operation tips this course" width="420" ref="pop">
            <div class="flex info-box">
                <img class="mr5" src="@/assets/icon/info.png" alt="">
                <div>
                    <div class="info-top">Are you sure to report this friend?</div>
                    <div class="info-bottom">
                        <span class="text-red">*</span>
                        Please fill in the reason for reporting.
                    </div>
                </div>
            </div>
            <el-input class="mt20" type="textarea" placeholder="Please enter the reason for reporting（5-200）" v-model="text" minlength="5" maxlength="200"
              :rows="6"   >
            </el-input>
            <div class="mt10 mb10">Pictures</div>
            <ImageUpload text="Pictures" listType="picture-card" :limit="5" fileType="jpg" v-model="image"></ImageUpload>
            <div class="flex justify-end mt33">
                <btn btnText="Confirm Reporting" btnType="12"></btn>
                <btn btnText="Cancellation" btnType="13"></btn>
            </div>
        </PopUp>

    </div>
</template>
        
<script>
import PopUp from '@/components/PopUp'
import ImageUpload from '@/components/ImageUpload/multiple.vue'
export default {
    components: { PopUp,ImageUpload },
    data() {
        return {
            show: true,
            text:'',
            image:'',

        };
    },
    methods: {

        open() {
            this.$refs.pop.open()
        },



        submitForm() {
            if (this.multipleSelection.length <= 0) {
                this.$message.info('Please check')
                return false
            }
            this.$emit('addUserSelection', this.multipleSelection)
            this.show = false
            this.$refs.multipleTable.clearSelection();
            // console.log(this.multipleSelection,"this.multipleSelection")
        },
        cancel() {
            this.show = false
            this.$refs.multipleTable.clearSelection();
        }
    },
};
</script>
        
<style lang="scss" scoped>
.dialog-box {
    .info-box {

        line-height: 22px;

        img {
            width: 23px;
            height: 23px;
        }

        .info-top {
            margin-left: 5px;
        }


    }
  

}
</style>
        