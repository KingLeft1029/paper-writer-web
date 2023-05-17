<template>
    <div class="title-block">
      <div class="title-name">{{ title }}</div>
      <div class="title-line"></div>
      <slot class="content"></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: "commonModule",
    props: {
      title: {
        type: String,
        default: "",
      },
    },
    data() {
      return {};
    },
    created() {},
  
    mounted() {},
  
    methods: {},
  };
  </script>
  
  <style lang="scss" scoped>
  .title-block {
    .title-name {
      font-weight: bold;
      color: #3f464f;
      line-height: 40px;
      font-size: 28px;
    }
    .title-line {
      width: 49px;
      height: 4px;
      background: linear-gradient(131deg, #ff8f00 0%, #dc0025 100%);
      border-radius: 3px;
      margin-top: 5px;
    }
  }
  </style>
  