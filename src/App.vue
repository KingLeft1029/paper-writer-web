<template>
  <div id="app">
    <Header class="sticky"
      v-if="path != '/login' && path != '/register' && path != '/forgotPassword' && path != '/emailLogin'"></Header>
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
    <Footer v-if="path != '/login' && path != '/register' && path != '/forgotPassword' && path != '/emailLogin'">
    </Footer>
    <!-- <theme-picker /> -->
  </div>
</template>

<script>
import ThemePicker from "@/components/ThemePicker";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    ThemePicker, Header,
    Footer,
  },
  data() {
    return {
      path: ""
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        console.log(route)
        this.path = route.fullPath
      },
      immediate: true
    }
  },

  metaInfo() {
    return {
      title: this.$store.state.settings.dynamicTitle && this.$store.state.settings.title,
      titleTemplate: title => {
        return title ? `${title} - ${process.env.VUE_APP_TITLE}` : process.env.VUE_APP_TITLE
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;


  .theme-picker {
    display: none;
  }
}

.sticky {
  position: sticky;
  top: 0;
  z-index: 999;
}


</style>
