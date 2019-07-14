import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/glocal.css";
import "./assets/element-variables.scss";
import { Pagination } from "element-ui";

Vue.config.productionTip = false;
Vue.use(Pagination);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
