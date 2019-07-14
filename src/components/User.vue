<template>
  <div class="userPage">
    <div class="left">
      <div class="zhuye">
        <router-link to="/">
          <h3>主页/</h3>
        </router-link>
        <div class="user">
          <div class="top">
            <img :src="user.avatar_url" alt />
            <span class="loginname">{{user.loginname}}</span>
          </div>
          <p class="jifen">{{user.score}}积分</p>
          <span class="time">{{`注册时间 ${moment(user.create_at)}`}}</span>
        </div>
      </div>
      <div class="latest1">
        <h3>最近创建的话题</h3>
        <div class="content">
          <ul>
            <li v-for="reply in user.recent_topics" :key="reply.id">
              <router-link :to="`/user/${reply.author.loginname}`">
                <img :src="reply.author.avatar_url" alt />
              </router-link>
              <span class="count">{{replys(reply.id)}}/{{visits(reply.id)}}</span>
              <!-- <img :src="reply.author.avatar_url" alt /> -->
              <router-link :to="`/topic/${reply.id}`" class="title2">{{reply.title}}</router-link>
              <span>{{moment(reply.last_reply_at)}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="latest2">
        <h3>最近参与的话题</h3>
        <div class="content">
          <ul>
            <li v-for="reply in user.recent_replies" :key="reply.id">
              <router-link :to="`/user/${reply.author.loginname}`">
                <img :src="reply.author.avatar_url" alt />
              </router-link>
              <span class="count">{{replys(reply.id)}}/{{visits(reply.id)}}</span>
              <router-link :to="`/topic/${reply.id}`" class="title2">{{reply.title}}</router-link>
              <span>{{moment(reply.last_reply_at)}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="zhuye">
        <h3>个人信息</h3>

        <div class="user">
          <div class="top">
            <img :src="user.avatar_url" alt />
            <span class="loginname">{{user.loginname}}</span>
          </div>
          <p class="jifen">{{user.score}}积分</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
export default {
  name: "user",
  data() {
    return {
      user: {},
      visit_count: 0,
      reply_count: 0
    };
  },
  beforeCreate() {
    moment.locale("zh-cn");
  },
  created() {
    axios
      .get(`https://www.vue-js.com/api/v1/user/${this.$route.params.loginname}`)
      .then(res => {
        this.user = res.data.data;
        console.log(res.data.data);
      });
  },
  methods: {
    moment(time) {
      return moment(time).fromNow();
    },
    replys(id) {
      axios.get(`https://www.vue-js.com/api/v1/topic/${id}`).then(res => {
        this.reply_count = res.data.data.reply_count;
      });
      return this.reply_count;
    },
    visits(id) {
      axios.get(`https://www.vue-js.com/api/v1/topic/${id}`).then(res => {
        this.visit_count = res.data.data.visit_count;
      });
      return this.visit_count;
    }
  }
};
</script>

<style lang="scss" >
.userPage {
  background-color: #e1e1e1;
  display: flex;
  padding: 15px 5% 15px 5%;
}
h3 {
  background-color: #f6f6f6;
  padding: 14px 10px;
  border-bottom: 1px solid #f0f0f0;
  color: #369219;
  font-size: 14px;
  font-weight: lighter;
}
span.count {
  color: #ccc;
  margin-right: 7px;
  flex-shrink: 0;
}
.left {
  margin: 10px;
  flex-grow: 1;
}
.zhuye {
  border-radius: 5px !important;
  border-bottom-left-radius: 5px;
  margin-bottom: 15px;
  background-color: #fff;
  span.time {
    font-size: 14px;
    color: #ccc;
  }
  p.jifen {
    font-size: 14px;
  }
  .user {
    padding: 7px;

    .top {
      display: flex;
      span {
        color: #6f6b6b;
        font-size: 14px;
      }
    }
    img {
      width: 30px;
      height: 30px;
      border-radius: 3px;
      margin-right: 5px;
      margin-bottom: 4px;
    }
  }
}
.latest1,
.latest2 {
  border-radius: 5px;
  margin-bottom: 15px;
  background-color: #fff;
  li {
    border-bottom: 1px solid #f0f0f0;
    padding: 14px 10px;
    display: flex;

    align-items: center;
    a {
      display: block;
    }
    img {
      width: 30px;
      height: 30px;
      border-radius: 3px;
      flex-shrink: 0;
      margin-right: 7px;
    }
    a.title2 {
      flex-grow: 1;
      font-size: 16px;
      text-align: left;
      display: block;
      font-size: 14px !important;
      color: #0096da;
      &:hover {
        text-decoration: underline;
      }
    }
    span {
      flex-shrink: 0;
      font-size: 12px;
    }
  }
}
.right {
  margin: 10px;
  flex-shrink: 0;
  width: 30%;
}
</style>
