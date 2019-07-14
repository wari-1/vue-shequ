<template>
  <img
    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562736843568&di=caf782778d699eedd4979f2b9df8b4aa&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F98aefafe79d36f431f17dba205b3d4faa3684a2f96c1-qG1kd0_fw658"
    alt
    v-if="!topic"
  />
  <div class="topic" v-else>
    <div class="home1">
      <div class="left">
        <div class="inner">
          <div class="top">
            <div class="top-left">
              <div class="top1">
                <span
                  v-if="topic.top||topic.good"
                  :class="{tab:true,active:topic.top||topic.good}"
                >{{topic.top?'置顶':topic.good?'精华':topic.tab==='job'?'招聘':topic.tab==='ask'?'问答':topic.tab==='share'?'分享':'weex'}}</span>
                <h4>{{topic.title}}</h4>
              </div>
              <div class="top2">
                <p>
                  <span>•发布于{{moment(topic.create_at)}}</span>
                  <span>
                    •作者
                    <router-link
                      :to="`/user/${topic.author.loginname}`"
                      tag="span"
                    >{{topic.author.loginname}}</router-link>
                  </span>
                  <!-- <span>{{`•作者${topic.author.loginname}`}}</span> -->
                  <span>•{{topic.visit_count}}次浏览</span>
                  <span>•最后一次编辑是 3个月前</span>
                  <span>•来自{{topic.tab==='job'?'招聘':topic.tab==='ask'?'问答':topic.tab==='share'?'分享':'weex'}}</span>
                </p>
              </div>
            </div>
            <div class="top-right">
              <span
                v-if="isLogin"
                @click="changeCollect"
                :class="isCollect?'isCollect':''"
                style="cursor:pointer"
              >{{isCollect?'取消收藏':'加入收藏'}}</span>
            </div>
          </div>
          <div
            style="
        padding: 10px;
        border-left: 4px solid #099436;
        background: #f6f6f6;
        margin: 10px 0;"
          >粉丝福利 : 关注VUE中文社区公众号，回复视频领取粉丝福利</div>
          <div v-html="topic.content" class="topic_content"></div>
        </div>
        <div class="inner1">
          <div class="comment">
            <ul class="comment-list">
              <div class="head">
                <span class="col_fade">{{topic.replies.length}}回复</span>
              </div>
              <li v-for="comment in topic.replies" :key="comment.id">
                <div class="comment-content">
                  <div class="top">
                    <router-link :to="`/user/${comment.author.loginname}`">
                      <img :src="comment.author.avatar_url" alt />
                    </router-link>
                    <div class="user_info">
                      <a href class="dark reply_author">{{comment.author.loginname}}</a>
                      <a href class="reply_time">{{moment(comment.create_at)}}</a>
                    </div>
                    <div class="user_action">
                      <i
                        :class="isUped(comment)?'fa up_btn fa-thumbs-o-up invisible active':'fa up_btn fa-thumbs-o-up invisible'"
                        @click="changeZan(comment)"
                        style="marginRight:7px"
                      ></i>
                      <span
                        style="marginRight:7px;color:'#000';opacity:.4;"
                      >{{comment.ups?comment.ups.length:''}}</span>
                      <span @click="addReply(comment.author.loginname)">
                        <i class="el-icon-s-comment"></i>
                      </span>
                    </div>
                  </div>
                  <div class="reply-content">
                    <p v-html="comment.content"></p>
                  </div>
                </div>
              </li>
            </ul>
            <div class="comment-panel">
              <h3>添加回复</h3>
              <textarea cols="30" rows="10" v-model="text" class="textarea"></textarea>
              <input type="submit" class="submit" @click="addComment" value="添加评论" />
            </div>
          </div>
        </div>
      </div>
      <div class="right" v-if="user">
        <div class="zhuye">
          <h3>作者/</h3>
          <div class="user">
            <div class="top">
              <router-link :to="`/user/${user.loginname}`">
                <img :src="topic.author.avatar_url" alt />
              </router-link>
              <span class="loginname">{{user.loginname}}</span>
            </div>
            <p class="jifen">{{user.score}}积分</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "topic",
  data() {
    return {
      topic: null,
      isCollect: false,
      text: "",
      color: false,
      user: null
    };
  },
  created() {
    axios
      .get(`https://www.vue-js.com/api/v1/topic/${this.$route.params.id}`)
      .then(res => {
        this.topic = res.data.data;
        console.log(this.topic);
        axios
          .get(
            `https://www.vue-js.com/api/v1/user/${this.topic.author.loginname}`
          )
          .then(res => {
            this.user = res.data.data;
            // console.log(res.data.data);
          });
      });
  },
  computed: {
    isLogin() {
      return Boolean(sessionStorage.getItem("token"));
    }
  },
  beforeCreate() {
    moment.locale("zh-cn");
  },
  methods: {
    moment(time) {
      return moment(time).fromNow();
    },
    changeCollect() {
      const obj = {
        accesstoken: sessionStorage.getItem("token"),
        topic_id: this.topic.id
      };
      if (this.isCollect) {
        axios
          .post("https://www.vue-js.com/api/v1/topic/de_collect", obj)
          .then(res => {
            this.isCollect = false;
          });
      } else {
        axios
          .post("https://www.vue-js.com/api/v1/topic/collect", obj)
          .then(res => {
            this.isCollect = true;
          });
      }
    },
    addComment() {
      if (sessionStorage.getItem("token")) {
        if (this.text.trim()) {
          axios
            .post(
              `https://www.vue-js.com/api/v1/topic/${this.topic.id}/replies`,
              {
                accesstoken: sessionStorage.getItem("token"),
                content: this.text
              }
            )
            .then(res => {
              axios
                .get(
                  `https://www.vue-js.com/api/v1/topic/${this.$route.params.id}`
                )
                .then(res => {
                  this.topic = res.data.data;
                  // console.log(this.topic);
                  this.text = "";
                });
            });
        } else {
          alert("评论不能为空");
        }
      } else {
        alert("请登录");
      }
    },
    changeZan(comment) {
      if (sessionStorage.getItem("token")) {
        axios
          .post(`https://www.vue-js.com/api/v1/reply/${comment.id}/ups `, {
            accesstoken: sessionStorage.getItem("token")
          })
          .then(res => {
            if (res.data.action === "up") {
              this.topic.replies
                .find(item => item.id === comment.id)
                .ups.push(sessionStorage.getItem("user_id"));
            } else {
              this.topic.replies.find(
                item => item.id === comment.id
              ).ups = this.topic.replies
                .find(item => item.id === comment.id)
                .ups.filter(item => item != sessionStorage.getItem("user_id"));
            }
          });
      } else {
        alert("请登录");
      }
    },
    addReply(loginname) {
      if (sessionStorage.getItem("token")) {
        this.text = `@${loginname} `;
        document.querySelector(".textarea").focus();
      } else {
        alert("请登录");
      }
    },
    isUped(comment) {
      return (
        this.topic.replies
          .find(item => item.id === comment.id)
          .ups.indexOf(sessionStorage.getItem("user_id")) != -1
      );
    }
    // zan() {
    //   axios.post;
    // }
  }
};
</script>

<style lang="scss" >
.home1 {
  width: 100vw;
  background-color: #ccc;
  display: flex;
  padding: 15px 5% 15px 5%;
  i {
    color: black;
    opacity: 0.4;
    cursor: pointer;
  }
  .top-right span {
    padding: 10px;
    font-size: 13px;
    color: #fff;
    background-color: #369219;
    border-radius: 3px;
  }
  .top-right span.isCollect {
    background-color: #e5e5e5;
    color: #333333;
  }
  .comment-panel {
    textarea {
      padding: 10px;
      width: 96%;
      resize: none;
      margin: 10px;
    }
    button {
      margin: 10px;
    }
  }
  // padding: 40px 100px 0 100px;
  .inner {
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 15px;
    padding: 10px;

    .topic_content {
      .markdown-text > :first-child,
      .preview > :first-child {
        margin-top: 0;
      }
      .preview h1,
      .preview h2,
      .preview h3,
      .preview h4,
      .preview h5,
      .preview h6,
      .reply_area h1,
      .reply_area h2,
      .reply_area h3,
      .reply_area h4,
      .reply_area h5,
      .reply_area h6,
      .topic_content h1,
      .topic_content h2,
      .topic_content h3,
      .topic_content h4,
      .topic_content h5,
      .topic_content h6 {
        margin: 30px 0 15px;
        border-bottom: 1px solid #eee;
      }
      h4 {
        font-size: 17.5px;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 10px 0;
        font-family: inherit;
        font-weight: 700;
        line-height: 20px;
        color: inherit;
        text-rendering: optimizelegibility;
      }
      .preview p,
      .reply_content p,
      .reply_form p,
      .topic_content p {
        font-size: 15px;
        line-height: 1.7em;
        overflow: auto;
      }

      .markdown-text p,
      .preview p {
        white-space: pre-wrap;
        white-space: -moz-pre-wrap;
        white-space: -pre-wrap;
        white-space: -o-pre-wrap;
        word-wrap: break-word;
        line-height: 2em;
        margin: 1em 0;
      }

      body,
      input,
      p,
      textarea {
        font-size: 14px;
        word-break: break-word;
      }

      p {
        margin: 0 0 10px;
      }

      p {
        display: block;
        -webkit-margin-before: 1em;
        -webkit-margin-after: 1em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
      }
      ol,
      ul {
        padding: 0;
        margin: 0 0 10px 25px;
      }

      ul,
      menu,
      dir {
        display: block;
        list-style-type: disc;
        -webkit-margin-before: 1em;
        -webkit-margin-after: 1em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        -webkit-padding-start: 40px;
      }
      .panel .inner li {
        line-height: 2em;
      }

      .markdown-text li,
      .preview li {
        font-size: 14px;
        line-height: 2em;
      }

      li {
        line-height: 20px;
      }

      li {
        display: list-item;
        text-align: -webkit-match-parent;
      }
      img {
        width: auto\9;
        height: auto;
        max-width: 100%;
        vertical-align: middle;
        border: 0;
        -ms-interpolation-mode: bicubic;
      }
      .panel .inner a {
        color: #778087;
      }

      a {
        color: #08c;
        text-decoration: none;
      }
      #content .share {
        text-align: right;
      }
      .user_avatar img,
      .user_big_avatar img {
        width: 30px;
        height: 30px;
        border-radius: 3px;
      }
      a.dark {
        overflow: hidden;
        text-overflow: ellipsis;
        text-decoration: none;
        color: #666;
      }

      .reply_author {
        font-size: 12px;
        font-weight: 700;
      }
      .reply_time {
        font-size: 11px;
      }
      .fa {
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .up_btn {
        cursor: pointer;
        opacity: 0.4;
      }

      .fa {
        color: #000;
        opacity: 0.4;
      }

      .invisible {
        visibility: hidden;
      }

      i,
      cite,
      em,
      var,
      address,
      dfn {
        font-style: italic;
      }
    }
  }
  .comment-panel.none {
    display: none;
  }
  .comment-panel .submit {
    margin-left: 7px;
    margin-bottom: 7px;
  }
  .inner1 {
    background-color: #fff;
    border-radius: 5px;

    .comment {
      display: flex;
      flex-direction: column;
      .comment-list li {
        border-bottom: 1px solid #f0f0f0;
        padding: 10px;
      }
      .head {
        padding: 10px;
        border-radius: 3px 3px 0 0;
        background-color: #f6f6f6;
      }
      span.col_fade {
        color: #1c6132;
      }
      .comment-content {
        display: flex;
        flex-direction: column;
        p {
          font-size: 15px;
          line-height: 1.7em;
          overflow: auto;
        }
        .top {
          display: flex;
          justify-content: space-around;
          i.active {
            color: orangered;
          }
          span {
            user-select: none;
          }
          img {
            width: 30px;
            height: 30px;
            border-radius: 3px;
            flex-shrink: 0;
          }
          .user_info {
            display: flex;
            flex-grow: 1;
          }
          a {
            font-size: 14px;

            margin-left: 7px;
          }
          a.dark:hover {
            color: #385f8a;
          }
          a.dark:active,
          a.dark:link,
          a.dark:visited {
            color: #666;
            text-decoration: none;
          }
          a.dark {
            overflow: hidden;
            text-overflow: ellipsis;
            text-decoration: none;
            color: #666;
          }
          a.reply_time {
            color: #385f8a;
          }
        }
      }
    }
  }
}
.inner > .top {
  display: flex;
  align-items: center;
  .top-left {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    .top1 {
      display: flex;
      margin-bottom: 10px;
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
    }
    p {
      font-size: 12px;
      color: #ccc;
      span > span {
        cursor: pointer;
      }
    }
  }
}
</style>
