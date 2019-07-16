import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Topic from "./components/Topic.vue";
import User from "./components/User.vue";
import NewTopic from "./components/NewTopic.vue";
import Message from "./components/Message.vue";
import { PUBLICURL } from "../constants";
Vue.use(VueRouter);

const routes = [
  {
    component: Home,
    path: PUBLICURL + "/"
  },
  {
    component: NewTopic,
    path: PUBLICURL + "/topic/create"
  },
  {
    component: Topic,
    path: PUBLICURL + "/topic/:id"
  },
  {
    component: User,
    path: PUBLICURL + "/user/:loginname"
  },
  {
    component: Message,
    path: PUBLICURL + "/my/messages"
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
