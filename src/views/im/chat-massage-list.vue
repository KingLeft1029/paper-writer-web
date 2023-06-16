<template>
    <div class="chat-massage-list">
      <message-list ref="messageList" base-size="10px"></message-list>
    </div>
  </template>
  
  <script>
  // Vue 代码
  export default {
    mounted() {
      const messageList = this.$refs.messageList;
      //添加点击消息触发监听
      messageList.addEventListener("tapMessage", this.handleTapMessage);
    },
    beforeUnmount() {
      // 注意：需要 removeEventListener 防止多次绑定造成异常
      const messageList = this.$refs.messageList;
      messageList.removeEventListener("tapMessage", this.handleTapMessage);
    },
    methods: {
      handleTapMessage(e) {
        const data = e.detail;
        // 处理点击查看大图或文件消息下载等功能
        console.log("点击消息触发监听:",data)
      }
    }
  }
  </script>
  
  <style scoped>
  .chat-massage-list {
    height: calc(100% - 220px);
  }
  </style>