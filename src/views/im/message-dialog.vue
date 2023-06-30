
<template>
    <div class='message-box' v-if="show">
        <div class="close-box flex justify-end">
            <i class="el-icon-close"></i>
        </div>
        <div class="flex justify-between msg-title">
            <span>Lily</span>
            <img src="../../assets/icon/other.png" alt="">
        </div>
    </div>
</template>

<script>

export default {
    name: '',
    components: {},
    data() {
        return {
            show: true
        };
    },
    computed: {},
    watch: {},
    methods: {
        open() {
            this.show = true
        }
    },
    created() {

    },
    mounted() {

    },
}
</script>
<style lang="scss" scoped>
/* @import url(); 引入公共css类 */
.message-box {
    width: 357px;
    height: 540px;
    background: #F5F5F5;
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.24);
    border-radius: 5px 0px 0px 5px;
    position: absolute;
    top: 167px;

    .close-box {

        padding: 8px 24px;

        i {
            color: #999;
        }
    }
    .msg-title{
padding: 0 20px;
border-bottom: 1px solid #E7E7E7;
padding-bottom: 8px;
    }
}
</style>