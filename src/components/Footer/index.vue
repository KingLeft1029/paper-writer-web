<template>
    <div class="footer-block">
      <div class="container flex align-center justify-between">
        <div class="left-menu flex flex-direction justify-center">
          <router-link to="" class="menu-item">About us</router-link>
          <router-link to="" class="menu-item">Teach on Mespery</router-link>
          <router-link to="" class="menu-item">Help and Support</router-link>
          <router-link to="" class="menu-item">Terms of Use</router-link>
          <router-link to="" class="menu-item">Privacy Policy</router-link>
        </div>
        <img class="footer-logo" src="@/assets/images/index/logo.png" />
        <div style="width:138px;"></div>
        <div class="filing">C 2023 RIOT NEW MEDIA GROUP</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss" scoped>
  .footer-block {
    width: 100%;
    height: 280px;
    padding: 26px 0;
    background: #fffcfc;
    .container {
      height: 100%;
      position: relative;
    }
    .left-menu {
      height: 100%;
      .menu-item {
        line-height: 45px;
        font-size: 16px;
        font-weight: bold;
        color: #000000;
        text-decoration: none;
      }
    }
    .footer-logo {
      width: 229px;
      height: 70px;
    }
    .filing{
      position: absolute;
      bottom: 24px;
      font-size: 12px;
      color: #B0B5BB;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  </style>