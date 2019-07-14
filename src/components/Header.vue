<template>
  <div class="header">
    <router-link class="logo" to="/">
      <img src="./../assets/logo.png" alt />
      <h1>Vue.js</h1>
    </router-link>
    <div v-if="isLogin&&$route.fullPath.indexOf('create')===-1">
      <router-link to="/topic/create">
        <button>发布话题</button>
      </router-link>
    </div>
    <div class="message">
      <span :class="count>0?'':'none'">{{count>0?count:''}}</span>
      <!-- <span>{{count}}</span> -->
      <router-link to="/my/messages">
        <button>未读消息</button>
      </router-link>
    </div>
    <div class="login" v-if="!userInfo">
      <input type="text" v-model="text" />
      <button @click="login">登录</button>
    </div>
    <div class="logout" v-else>
      <img :src="userInfo.avatar_url" alt />
      <button @click="logout">退出</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "tou",
  data() {
    return {
      text: "701b2522-7fc0-425e-b959-e5a177c6e832",
      userInfo: null,
      isLogin: false,
      count: 0
    };
  },
  // computed: {
  //   isLogin() {
  //     return Boolean(sessionStorage.getItem("token"));
  //     // console.log(Boolean(sessionStorage.getItem("token")));
  //   }
  // },
  created() {
    if (sessionStorage.getItem("token")) {
      axios
        .post("https://www.vue-js.com/api/v1/accesstoken", {
          accesstoken: sessionStorage.getItem("token")
        })
        .then(res => {
          this.userInfo = res.data;
          this.isLogin = true;
          // console.log(res.data);
          axios
            .get("https://www.vue-js.com/api/v1/message/count", {
              params: { accesstoken: sessionStorage.getItem("token") }
            })
            .then(res => {
              this.count = res.data.data;
            });
        });
    }
  },
  methods: {
    login() {
      axios
        .post("https://www.vue-js.com/api/v1/accesstoken", {
          accesstoken: this.text
        })
        .then(res => {
          this.userInfo = res.data;
          console.log(res.data);
          sessionStorage.setItem("token", this.text);
          sessionStorage.setItem("user_id", res.data.id);
          sessionStorage.setItem("user_url", res.data.avatar_url);
          sessionStorage.setItem("user_loginname", res.data.loginname);
          this.isLogin = true;
          this.$router.push("/");
        });
    },
    logout() {
      this.userInfo = null;
      this.isLogin = false;
      sessionStorage.clear();
      this.$router.push("/");
    },
    getMessage() {}
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100vw;
  background: #1c6132;
  padding: 10px 30px 3px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a button {
    background-color: #369219;
    color: #fff;
    padding: 5px;
    border: 0;
    border-radius: 4px;
  }
  .message {
    display: flex;
    span {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      color: #fff;
      background-color: rgb(40, 145, 75);
      font-size: 14px;
      display: block;
      text-align: center;
      line-height: 25px;
      margin-right: 5px;
    }
    span.none {
      display: none;
    }
  }
  .logo {
    display: flex;
    align-items: center;

    img {
      height: 60px;
      display: block;
      margin-right: 5px;
    }
    h1 {
      color: #fff;
    }
  }
  .login {
    display: flex;
    align-items: center;
    input {
      margin-right: 7px;
    }
  }
  .logout {
    display: flex;
    align-items: center;
    img {
      width: 45px;
      margin-right: 7px;
    }
    button {
      align-self: flex-end;
      margin-bottom: 6px;
    }
  }
}
</style>
