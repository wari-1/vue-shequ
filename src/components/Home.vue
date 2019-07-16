<template>
  <div class="home">
    <div class="left">
      <div class="inner">
        <ul class="nav">
          <li>
            <router-link
              :to="$publicUrl+'/?tab=all'"
              :class="$route.fullPath===`${$publicUrl}/`||$route.fullPath===`${$publicUrl}/?tab=all`?'active':''"
              @click.native="total=858"
            >全部</router-link>
          </li>
          <li>
            <router-link
              :to="$publicUrl+'/?tab=good'"
              active-class="active"
              :exact="true"
              @click.native="total=15"
            >精华</router-link>
          </li>
          <li>
            <router-link
              :to="$publicUrl+'/?tab=weex'"
              active-class="active"
              @click.native="total=3"
              :exact="true"
            >weex</router-link>
          </li>
          <li>
            <router-link
              :to="$publicUrl+'/?tab=share'"
              active-class="active"
              :exact="true"
              @click.native="total=247"
            >分享</router-link>
          </li>
          <li>
            <router-link
              :to="$publicUrl+'/?tab=ask'"
              active-class="active"
              :exact="true"
              @click.native="total=577"
            >问答</router-link>
          </li>
          <li>
            <router-link
              :to="$publicUrl+'/?tab=job'"
              active-class="active"
              :exact="true"
              @click.native="total=30"
            >招聘</router-link>
          </li>
        </ul>
        <div class="content">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562736843568&di=caf782778d699eedd4979f2b9df8b4aa&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F98aefafe79d36f431f17dba205b3d4faa3684a2f96c1-qG1kd0_fw658"
            alt
            v-if="!topics.length"
          />
          <ul class="list" v-else>
            <li v-for="topic in topics" :key="topic.id">
              <div class="box">
                <router-link :to="`${$publicUrl}/user/${topic.author.loginname}`">
                  <img :src="topic.author.avatar_url" alt />
                </router-link>
                <span class="count">{{`${topic.reply_count}/${topic.visit_count}`}}</span>
                <span
                  v-if="$route.fullPath==='/'||$route.fullPath==='/?tab=all'||topic.top||topic.good"
                  :class="{tab:true,active:topic.top||topic.good}"
                >{{topic.top?'置顶':topic.good?'精华':topic.tab==='job'?'招聘':topic.tab==='ask'?'问答':topic.tab==='share'?'分享':'weex'}}</span>
                <h4>
                  <router-link :to="`${$publicUrl}/topic/${topic.id}`">{{topic.title}}</router-link>
                </h4>
                <span class="time">{{moment(topic.last_reply_at)}}</span>
              </div>
            </li>
          </ul>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            :page-size="20"
            :current-page="Number($route.query.page)||1"
            @current-change="changePage"
          ></el-pagination>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="zhuye">
        <h3>个人信息</h3>
        <div class="user">
          <div class="top">
            <router-link :to="`${$publicUrl}/user/${user_loginname}`">
              <img :src="user_url" alt />
            </router-link>
            <span class="loginname">{{user_loginname}}</span>
          </div>
          <!-- <p class="jifen">{{user.score}}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      topics: [],
      total: 856
    };
  },

  watch: {
    "$route.fullPath": {
      immediate: true,
      handler() {
        const tab = this.$route.query.tab || "all";
        const page = this.$route.query.page || 1;
        this.topics = [];

        axios
          .get(`https://www.vue-js.com/api/v1/topics?tab=${tab}&page=${page}`)
          .then(res => {
            this.topics = res.data.data;
            console.log(this.$publicUrl);

            // console.log(this.$route.fullPath);
          });
      }
    }
  },
  computed: {
    user_loginname() {
      return sessionStorage.getItem("user_loginname");
    },
    user_url() {
      return sessionStorage.getItem("user_url");
    }
  },
  beforeCreate() {
    moment.locale("zh-cn");
  },
  methods: {
    moment(time) {
      return moment(time).fromNow();
    },
    changePage(page) {
      const tab = this.$route.query.tab || "all";
      this.$router.push(`${this.$publicUrl}/?tab=${tab}&page=${page}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  background-color: #e1e1e1;
  display: flex;
  justify-content: space-between;
  padding: 15px 5% 15px 5%;
  padding-left: 10px;
  // padding: 40px 100px 0 100px;
  .inner {
    background-color: #fff;
    border-radius: 5px;
    margin-left: 10px;
  }
  .left {
    flex-grow: 0;
  }
  .right {
    flex-shrink: 0;
    width: 40%;
    margin-right: 5%;
  }
}
ul.nav {
  display: flex;
  padding: 7px 5px;

  background-color: #f6f6f6;
  li {
    margin-right: 15px;
    margin-top: 7px;
  }

  a {
    text-decoration: none;
    padding: 7px 5px;
    border-radius: 3px;
    color: green;
  }
  .active {
    background-color: green;
    color: #fff;
  }
}
.content > img {
  width: 100%;
}
ul.list {
  padding: 7px 5px;
  padding-bottom: 0px;
  li {
    padding: 15px 0;
    border-top: 1px solid #f0f0f0;
    .box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-right: 7px;
        flex-shrink: 0;
      }
      span.count {
        margin-right: 5px;
        font-size: 12px;
        color: #b4b4b4;
        flex-shrink: 0;
        width: 70px;
        text-align: center;
      }
      h4 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-grow: 1;
        a {
          color: #000;
          padding-bottom: 2px;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      span.tab {
        display: block;
        margin-right: 7px;
        padding: 2px 4px;
        font-size: 12px;
        border-radius: 2px;
        background-color: #e5e5e5;
        color: #999;
        height: 20px;
        flex-shrink: 0;
      }
      span.tab.active {
        background: #369219;
        color: #fff;
      }
      span.time {
        text-align: right;
        min-width: 50px;
        display: inline-block;
        white-space: nowrap;
        color: #778087;
        font-size: 13px;
        flex-shrink: 0;
        margin-left: 5px;
        display: block;
      }
    }
  }
}
</style>