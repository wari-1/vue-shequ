<template>
  <div>
    <img
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562736843568&di=caf782778d699eedd4979f2b9df8b4aa&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F98aefafe79d36f431f17dba205b3d4faa3684a2f96c1-qG1kd0_fw658"
      alt
      v-if="!message"
    />
    <div class="messagePage" v-else>
      <div class="left">
        <div class="latest2">
          <div class="title1">
            <router-link to="/">
              <h3>主页/</h3>
            </router-link>
            <span>新消息</span>
          </div>
          <div class="content">
            <ul class="list" v-if="message.hasnot_read_messages.length">
              <li
                v-for="hasnot_read_message in message.hasnot_read_messages"
                :key="hasnot_read_message.id"
              >
                <span v-if="hasnot_read_message.type!='at'" style="display:flex;">
                  <router-link
                    :to="`/user/${hasnot_read_message.author.loginname}`"
                  >{{hasnot_read_message.author.loginname}}</router-link>回复了你的话题
                  <router-link
                    :to="`/topic/${hasnot_read_message.topic.id}`"
                  >{{hasnot_read_message.topic.title}}</router-link>
                </span>
                <span v-else style="display:flex;">
                  <router-link
                    :to="`/user/${hasnot_read_message.author.loginname}`"
                  >{{hasnot_read_message.author.loginname}}</router-link>在话题
                  <router-link
                    :to="`/topic/${hasnot_read_message.topic.id}`"
                  >{{hasnot_read_message.topic.title}}</router-link>中@了你
                </span>
              </li>
            </ul>
            <ul v-else>
              <li>无消息</li>
            </ul>
          </div>
        </div>
        <div class="latest1">
          <h3>过往信息</h3>
          <div class="content">
            <ul class="list" v-if="message.has_read_messages.length">
              <li v-for="has_read_message in message.has_read_messages" :key="has_read_message.id">
                <span v-if="has_read_message.type!='at'" style="display:flex;">
                  <router-link
                    :to="`/user/${has_read_message.author.loginname}`"
                  >{{has_read_message.author.loginname}}</router-link>回复了你的话题
                  <router-link
                    :to="`/topic/${has_read_message.topic.id}`"
                  >{{has_read_message.topic.title}}</router-link>
                </span>
                <span v-else style="display:flex;">
                  <router-link
                    :to="`/user/${has_read_message.author.loginname}`"
                  >{{has_read_message.author.loginname}}</router-link>在话题
                  <router-link
                    :to="`/topic/${has_read_message.topic.id}`"
                  >{{has_read_message.topic.title}}</router-link>中@了你
                </span>

                <!-- <span>
                  <i class="fa check-square-o" @click="mark"></i>
                </span>-->
              </li>
            </ul>
            <ul v-else>
              <li>无消息</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="zhuye">
          <h3>个人信息</h3>

          <div class="user">
            <div class="top">
              <router-link :to="`/user/${user_loginname}`">
                <img :src="user_url" alt />
              </router-link>
              <span class="loginname">{{user_loginname}}</span>
            </div>
            <!-- <p class="jifen">{{user.score}}</p> -->
          </div>
          <!-- <div class="user">
            <div class="top">
              <img :src="user.avatar_url" alt />
              <span class="loginname">{{user.loginname}}</span>
            </div>
          <p class="jifen">{{user.score}}</p>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "message",
  data() {
    return {
      message: null,
      marked_msgs: []
    };
  },
  computed: {
    user_loginname() {
      return sessionStorage.getItem("user_loginname");
    },
    user_url() {
      return sessionStorage.getItem("user_url");
    }
  },
  created() {
    axios
      .get("https://www.vue-js.com/api/v1/messages", {
        params: { accesstoken: sessionStorage.getItem("token") }
      })
      .then(res => {
        console.log(res.data.data);
        this.message = res.data.data;
      });
  },
  updated() {
    axios
      .post("https://www.vue-js.com/api/v1/message/mark_all", {
        accesstoken: sessionStorage.getItem("token")
      })
      .then(res => {
        console.log(res.data.marked_msgs);
        this.marked_msgs = res.data.marked_msgs;
      });
  }
};
</script>

<style lang="scss">
.messagePage {
  width: 100vw;
  background-color: #e1e1e1;
  display: flex;
  padding: 15px 5% 15px 5%;
  li {
    font-size: 13px;
    a {
      font-size: 10px !important;
      color: #0096da;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
.title1 {
  display: flex;
  background-color: #f6f6f6;
  padding: 14px 10px;
  border-bottom: 1px solid #f0f0f0;
  h3 {
    padding: 0;
    border: 0;
  }
  span {
    font-size: 14px;
  }
}
</style>
