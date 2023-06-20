import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Cookies from "js-cookie";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import Title from "@/components/Title";
import "./assets/styles/element-variables.scss";
// 分页组件
import Pagination from "@/components/Pagination";
// 自定义组件 标题 My Threads >
import RightTo from "./components/RightTo";
// 自定义组件 空
import EmptyBox from "./components/EmptyBox";
import SortInput from "./components/SortInput";
// 自定义弹窗组件
import PopUp from "@/components/PopUp";
// 自定义btn
import Btn from "@/components/Btn";
// 富文本组件
import Editor from "@/components/Editor";
Vue.use(
  ElementUI,
  { locale },
  {
    size: Cookies.get("size") || "medium", // set element-ui default size
  }
);

import MetaInfo from "vue-meta-info";
Vue.use(MetaInfo);
// 滑动验证插件
import SlideVerify from "vue-monoplasty-slide-verify";

Vue.use(SlideVerify);
Vue.component("Btn", Btn);
Vue.component("PopUp", PopUp);
Vue.component("Title", Title);
Vue.component("Pagination", Pagination);
Vue.component("RightTo", RightTo);
Vue.component("SortInput", SortInput);
Vue.component("EmptyBox", EmptyBox);
Vue.component("Editor", Editor);

import "@/assets/styles/custom.scss";
import "@/assets/styles/index.scss";

import * as RongIMLib from "@rongcloud/imlib-next";
// imkit 为核心模块
import { defineCustomElements, imkit } from "@rongcloud/imkit";

defineCustomElements();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  /* 这句非常重要，否则预渲染将不会启动 */
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  },
}).$mount("#app");
