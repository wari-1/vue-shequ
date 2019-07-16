<template>
  <div class="fabuPage">
    <div class="left">
      <div class="fabu">
        <div class="title1">
          <router-link :to="$publicUrl+'/'">
            <h3>主页/</h3>
          </router-link>
          <span>发布话题</span>
        </div>
        <div class="content1">
          <div class="options">
            <span>选择板块：</span>
            <select v-model="selectedTab">
              <option value>请选择</option>
              <!-- <option value="weex">weex</option> -->
              <option value="share">分享</option>
              <option value="ask">问答</option>
              <option value="job">招聘</option>
            </select>
          </div>
          <input type="text" v-model="topic_title" placeholder="标题字数 10 字以上" class="title" />
          <quill-editor
            v-model="topic_content"
            ref="myQuillEditor"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)"
            class="textarea"
          ></quill-editor>
          <input type="submit" @click="submitTopic" class="submit" />
          <!-- <button class="submit" >提交</button> -->
        </div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import axios from "axios";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";
export default {
  name: "newtopic",
  components: {
    quillEditor
  },
  data() {
    return {
      selectedTab: "",
      topic_title: "",
      topic_content: "",
      editorOption: {}
    };
  },

  methods: {
    submitTopic() {
      console.log(this.selectedTab);
      // if (this.topic_title & this.topic_content)
      axios
        .post("https://www.vue-js.com/api/v1/topics", {
          title: this.topic_title,
          tab: this.selectedTab,
          content: this.topic_content,
          accesstoken: sessionStorage.getItem("token")
        })
        .then(res => {
          console.log(res.data);
          this.topic_title = "";
          this.selectedTab = "";
          this.topic_content = "";
          this.$router.push(`${this.$publicUrl}/topic/${res.data.topic_id}`);
        });
    },
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    }
  }
};
</script>

<style lang="scss" >
.fabuPage {
  background-color: #ccc;
  display: flex;
  padding: 15px 5% 15px 5%;
}
.left {
  margin: 10px;
  flex-grow: 1;
  .content1 {
    padding: 10px;
  }
  .options {
    display: flex;
    span {
      font-size: 14px;
      line-height: 30px;
    }
    select {
      color: #555;
      width: 220px;
      background-color: #fff;
      border: 1px solid #ccc;
      line-height: 30px;
      display: inline-block;
      padding: 4px 6px;
      margin-bottom: 10px;
      font-size: 14px;
      line-height: 20px;
      vertical-align: middle;
      border-radius: 4px;
    }
  }
  input.title {
    padding: 3px;
    color: #555;
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    font-size: 14px;
  }

  textarea {
    width: 100%;
    resize: none;
    padding: 4px;
    margin-bottom: 10px;
  }
}
input.submit {
  background-color: #3374de;
  color: #fff;
  padding: 10px;
  border: 0;

  margin-top: 7px;
  border-radius: 3px;
}
.fabu {
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: #fff;
}
.title {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
  display: flex;
  h2 {
    color: #369219;
  }
  span {
    align-self: flex-end;
  }
}
</style>
