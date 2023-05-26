import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Cookies from "js-cookie";
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import Title from "@/components/Title";
import "./assets/styles/element-variables.scss";
// 分页组件
import Pagination from "@/components/Pagination"
// 自定义组件 标题 My Threads >
import RightTo from "./components/RightTo";
// 自定义组件 空
import EmptyBox from "./components/EmptyBox";
import SortInput from "./components/SortInput";
// 富文本组件
import Editor from "@/components/Editor"
Vue.use(ElementUI,{ locale}, {
  size: Cookies.get("size") || "medium", // set element-ui default size
 
});


// 滑动验证插件
import SlideVerify from 'vue-monoplasty-slide-verify';
 
Vue.use(SlideVerify);
Vue.component('Title', Title)
Vue.component('Pagination', Pagination)
Vue.component("RightTo", RightTo);
Vue.component('SortInput', SortInput)
Vue.component("EmptyBox", EmptyBox);
Vue.component('Editor', Editor)


import "@/assets/styles/custom.scss";
import "@/assets/styles/index.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
