<template>
    <div class="chat-conversation">
        <conversation-list ref="conversationList" base-size="10px" />
    </div>
</template>
  
<script>
// 用于向 IMKit SDK 提供用户信息、群组信息等数据
import { custom_service } from './custom_service.js'
import * as RongIMLib from '@rongcloud/imlib-next'
import { defineCustomElements, imkit } from '@rongcloud/imkit'
import { CoreEvent } from '@rongcloud/imkit'
// Vue 代码
export default {
    created() {

        // IMKit 初始化参数 appkey，从开发者后台获取
        const yourAppKey = "x18ywvqfxz5yc";

        // IMLib 的初始化配置，appkey 为必填参数，其他字段参见 IInitOption
        let libOption = { appkey: yourAppKey };

        // 获取 RongIMLib 实例对象，请务必保证此过程只被执行一次
        RongIMLib.init(libOption);

        imkit.init({
            appkey: yourAppKey,
            service: custom_service,
            libOption: libOption
        });
    },
    mounted() {
        // 请替换真实 Token
        RongIMLib.connect('fg1U6qT24+ogGh/KwhH9d+F+lwb3rejuKjthd+snRNo=@h4mx.cn.rongnav.com;h4mx.cn.rongcfg.com').then((res) => {
            console.info('连接结果打印：', res);
            // 加载会话列表 CoreEvent 可通过 import { CoreEvent } from '@rongcloud/imkit' 获取
            imkit.emit(CoreEvent.CONVERSATION, true);
        })
        const conversationList = this.$refs.conversationList;

        //添加点击会话监听
        conversationList.addEventListener(
            "tapConversation",
            this.handleTapConversation //回调处理函数
        );
        //添加删除会话监听
        conversationList.addEventListener(
            "deleteConversation",
            this.handleDeleteConversation //回调处理函数
        )
    },
    beforeUnmount() {
        // 注意：需要 removeEventListener 防止多次绑定造成异常
        const conversationList = this.$refs.conversationList;

        conversationList.removeEventListener("tapConversation", this.handleTapConversation);

        conversationList.removeEventListener("deleteConversation", this.handleDeleteConversation);
    },
    methods: {
        handleTapConversation() {
            //处理点击会话后的操作
            console.info('处理点击会话后的操作');
        },
        handleDeleteConversation() {
            //处理删除会话后的操作
            console.info('处理点击会话后的操作');
        }
    }
}
</script>
  
<style scoped>
.chat-conversation {
    float: left;
    width: 30vw;
    height: 100%;
}
</style>