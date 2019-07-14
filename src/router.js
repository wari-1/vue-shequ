import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Topic from "./components/Topic.vue";
import User from "./components/User.vue";
import NewTopic from "./components/NewTopic.vue";
import Message from "./components/Message.vue";

Vue.use(VueRouter);

const routes = [
  {
    component: Home,
    path: "/"
  },
  {
    component: NewTopic,
    path: "/topic/create"
  },
  {
    component: Topic,
    path: "/topic/:id"
  },
  {
    component: User,
    path: "/user/:loginname"
  },
  {
    component: Message,
    path: "/my/messages"
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
