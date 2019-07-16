import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/global.css";
import { PUBLICURL } from "../constants";
import "./assets/element-variables.scss";
import { Pagination } from "element-ui";

Vue.config.productionTip = false;
Vue.use(Pagination);
Vue.prototype.$publicUrl = PUBLICURL;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
