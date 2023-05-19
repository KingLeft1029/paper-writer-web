<template>
    <slide-verify
      :l="42"
      :r="10"
      :w="310"
      :h="155"
      :imgs="picArray"
      :show="false"
      slider-text="Swipe right to complete the verification"
      ref="slideverify"
      @success="onSuccess"
      @fail="onFail"
      @refresh="onRefresh"
    ></slide-verify>
  </template>
  
  <script>
  export default {
    name: "SliderVerify",
    data() {
      return {
        //在data中引入`assets`中的图片可以通过`require`的方式来引入
        picArray: [
          require("../../assets/course/img.png"),
         
        ],
      };
    },
    methods: {
      onSuccess() {//往父级传递验证通过的函数
        this.$emit("success");
      },
      onReset() {//重置图片验证组件
        this.$refs.slideverify.reset();
      },
      onFail() {},
      onRefresh() {},
    },
  };
  </script>
  