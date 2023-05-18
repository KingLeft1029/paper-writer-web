import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Cookies from "js-cookie";

import Element from "element-ui";
import "./assets/styles/element-variables.scss";
// 自定义组件 标题 My Threads >
import RightTo from "./components/RightTo";
// 自定义组件 空
import EmptyBox from "./components/EmptyBox";
Vue.use(Element, {
  size: Cookies.get("size") || "medium", // set element-ui default size
});

Vue.component("RightTo", RightTo);

Vue.component("EmptyBox", EmptyBox);

import "@/assets/styles/custom.scss";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
