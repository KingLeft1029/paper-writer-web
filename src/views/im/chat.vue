
<template>
    <div class='chat-box'>
        <div class="chat-top"></div>
        <div class="chat-content ">
            <img class="chat-avatar" src="@/assets/icon/logo.png" alt="">
            <TabChange @changeTab="changeTab" navType="1" :navList="navList" width="242"></TabChange>
        </div>

    </div>
</template>

<script>
import TabChange from "../components/TabChange.vue";
export default {
    name: '',
    components: { TabChange, },
    data() {
        return {
            navList: ["Message", "Contacts"],
            navKey: 0,
        };
    },
    computed: {},
    watch: {},
    methods: {
        changeTab(num) {

            this.navKey = num
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
.chat-box {
    width: 358px;
    box-shadow: 0px 6px 25px -4px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
    margin-top: 20px;


    .chat-top {
        width: 358px;
        height: 87px;
        background-image: url('@/assets/course/msg.png');
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .chat-content {
        position: relative;
       width: 270px;
       height: 40px;
margin: 0 auto;
margin-top: 32px;
   border-bottom: 2px solid #EFEFEF;
 .chat-avatar{
    width: 36px;
height: 36px;
position: absolute;
left: -40px;
border-radius: 50%;
 }
       
    }
}
</style>