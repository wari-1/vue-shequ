(function(t){function e(e){for(var a,o,c=e[0],r=e[1],l=e[2],p=0,d=[];p<c.length;p++)o=c[p],i[o]&&d.push(i[o][0]),i[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,c=1;c<s.length;c++){var r=s[c];0!==i[r]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},i={app:0},n=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-shequ/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"1d94":function(t,e,s){},3056:function(t,e,s){"use strict";var a=s("b53f"),i=s.n(a);i.a},3734:function(t,e,s){"use strict";var a=s("8842"),i=s.n(a);i.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=n(t);return s(e)}function n(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="4678"},"55e3":function(t,e,s){},"560a":function(t,e,s){"use strict";var a=s("1d94"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("672e"),s("450d");var a=s("101e"),i=s.n(a),n=(s("cadf"),s("551c"),s("f751"),s("097d"),s("2b0e")),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header"),s("router-view")],1)},c=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("router-link",{staticClass:"logo",attrs:{to:t.$publicUrl+"/"}},[a("img",{attrs:{src:s("cf05"),alt:""}}),a("h1",[t._v("Vue.js")])]),t.isLogin&&-1===t.$route.fullPath.indexOf("create")?a("div",[a("router-link",{attrs:{to:t.$publicUrl+"/topic/create"}},[a("button",[t._v("发布话题")])])],1):t._e(),a("div",{staticClass:"message"},[a("span",{class:t.count>0?"":"none"},[t._v(t._s(t.count>0?t.count:""))]),a("router-link",{attrs:{to:t.$publicUrl+"/my/messages"}},[a("button",[t._v("未读消息")])])],1),t.userInfo?a("div",{staticClass:"logout"},[a("img",{attrs:{src:t.userInfo.avatar_url,alt:""}}),a("button",{on:{click:t.logout}},[t._v("退出")])]):a("div",{staticClass:"login"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{on:{click:t.login}},[t._v("登录")])])],1)},l=[],u=s("bc3a"),p=s.n(u),d={name:"tou",data:function(){return{text:"701b2522-7fc0-425e-b959-e5a177c6e832",userInfo:null,isLogin:!1,count:0}},created:function(){var t=this;sessionStorage.getItem("token")&&p.a.post("https://www.vue-js.com/api/v1/accesstoken",{accesstoken:sessionStorage.getItem("token")}).then(function(e){t.userInfo=e.data,t.isLogin=!0,p.a.get("https://www.vue-js.com/api/v1/message/count",{params:{accesstoken:sessionStorage.getItem("token")}}).then(function(e){t.count=e.data.data})})},methods:{login:function(){var t=this;p.a.post("https://www.vue-js.com/api/v1/accesstoken",{accesstoken:this.text}).then(function(e){t.userInfo=e.data,console.log(e.data),sessionStorage.setItem("token",t.text),sessionStorage.setItem("user_id",e.data.id),sessionStorage.setItem("user_url",e.data.avatar_url),sessionStorage.setItem("user_loginname",e.data.loginname),t.isLogin=!0,t.$router.push("".concat(t.$publicUrl,"/"))})},logout:function(){this.userInfo=null,this.isLogin=!1,sessionStorage.clear(),this.$router.push("".concat(this.$publicUrl,"/"))},getMessage:function(){}}},f=d,v=(s("e0d2"),s("2877")),m=Object(v["a"])(f,r,l,!1,null,"56609700",null),g=m.exports,_={name:"app",components:{Header:g}},b=_,h=Object(v["a"])(b,o,c,!1,null,null,null),j=h.exports,k=s("8c4f"),C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"left"},[s("div",{staticClass:"inner"},[s("ul",{staticClass:"nav"},[s("li",[s("router-link",{class:t.$route.fullPath===t.$publicUrl+"/"||t.$route.fullPath===t.$publicUrl+"/?tab=all"?"active":"",attrs:{to:t.$publicUrl+"/?tab=all"},nativeOn:{click:function(e){t.total=858}}},[t._v("全部")])],1),s("li",[s("router-link",{attrs:{to:t.$publicUrl+"/?tab=good","active-class":"active",exact:!0},nativeOn:{click:function(e){t.total=15}}},[t._v("精华")])],1),s("li",[s("router-link",{attrs:{to:t.$publicUrl+"/?tab=weex","active-class":"active",exact:!0},nativeOn:{click:function(e){t.total=3}}},[t._v("weex")])],1),s("li",[s("router-link",{attrs:{to:t.$publicUrl+"/?tab=share","active-class":"active",exact:!0},nativeOn:{click:function(e){t.total=247}}},[t._v("分享")])],1),s("li",[s("router-link",{attrs:{to:t.$publicUrl+"/?tab=ask","active-class":"active",exact:!0},nativeOn:{click:function(e){t.total=577}}},[t._v("问答")])],1),s("li",[s("router-link",{attrs:{to:t.$publicUrl+"/?tab=job","active-class":"active",exact:!0},nativeOn:{click:function(e){t.total=30}}},[t._v("招聘")])],1)]),s("div",{staticClass:"content"},[t.topics.length?s("ul",{staticClass:"list"},t._l(t.topics,function(e){return s("li",{key:e.id},[s("div",{staticClass:"box"},[s("router-link",{attrs:{to:t.$publicUrl+"/user/"+e.author.loginname}},[s("img",{attrs:{src:e.author.avatar_url,alt:""}})]),s("span",{staticClass:"count"},[t._v(t._s(e.reply_count+"/"+e.visit_count))]),"/"===t.$route.fullPath||"/?tab=all"===t.$route.fullPath||e.top||e.good?s("span",{class:{tab:!0,active:e.top||e.good}},[t._v(t._s(e.top?"置顶":e.good?"精华":"job"===e.tab?"招聘":"ask"===e.tab?"问答":"share"===e.tab?"分享":"weex"))]):t._e(),s("h4",[s("router-link",{attrs:{to:t.$publicUrl+"/topic/"+e.id}},[t._v(t._s(e.title))])],1),s("span",{staticClass:"time"},[t._v(t._s(t.moment(e.last_reply_at)))])],1)])}),0):s("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562736843568&di=caf782778d699eedd4979f2b9df8b4aa&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F98aefafe79d36f431f17dba205b3d4faa3684a2f96c1-qG1kd0_fw658",alt:""}}),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"page-size":20,"current-page":Number(t.$route.query.page)||1},on:{"current-change":t.changePage}})],1)])]),s("div",{staticClass:"right"},[s("div",{staticClass:"zhuye"},[s("h3",[t._v("个人信息")]),s("div",{staticClass:"user"},[s("div",{staticClass:"top"},[s("router-link",{attrs:{to:t.$publicUrl+"/user/"+t.user_loginname}},[s("img",{attrs:{src:t.user_url,alt:""}})]),s("span",{staticClass:"loginname"},[t._v(t._s(t.user_loginname))])],1)])])])])},y=[],w=s("c1df"),x=s.n(w),$={name:"home",data:function(){return{topics:[],total:856}},watch:{"$route.fullPath":{immediate:!0,handler:function(){var t=this,e=this.$route.query.tab||"all",s=this.$route.query.page||1;this.topics=[],p.a.get("https://www.vue-js.com/api/v1/topics?tab=".concat(e,"&page=").concat(s)).then(function(e){t.topics=e.data.data,console.log(t.$publicUrl)})}}},computed:{user_loginname:function(){return sessionStorage.getItem("user_loginname")},user_url:function(){return sessionStorage.getItem("user_url")}},beforeCreate:function(){x.a.locale("zh-cn")},methods:{moment:function(t){return x()(t).fromNow()},changePage:function(t){var e=this.$route.query.tab||"all";this.$router.push("".concat(this.$publicUrl,"/?tab=").concat(e,"&page=").concat(t))}}},U=$,S=(s("64f0"),Object(v["a"])(U,C,y,!1,null,"1fc86d78",null)),z=S.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.topic?s("div",{staticClass:"topic"},[s("div",{staticClass:"home1"},[s("div",{staticClass:"left"},[s("div",{staticClass:"inner"},[s("div",{staticClass:"top"},[s("div",{staticClass:"top-left"},[s("div",{staticClass:"top1"},[t.topic.top||t.topic.good?s("span",{class:{tab:!0,active:t.topic.top||t.topic.good}},[t._v(t._s(t.topic.top?"置顶":t.topic.good?"精华":"job"===t.topic.tab?"招聘":"ask"===t.topic.tab?"问答":"share"===t.topic.tab?"分享":"weex"))]):t._e(),s("h4",[t._v(t._s(t.topic.title))])]),s("div",{staticClass:"top2"},[s("p",[s("span",[t._v("•发布于"+t._s(t.moment(t.topic.create_at)))]),s("span",[t._v("\n                  •作者\n                  "),s("router-link",{attrs:{to:t.$publicUrl+"/user/"+t.topic.author.loginname,tag:"span"}},[t._v(t._s(t.topic.author.loginname))])],1),s("span",[t._v("•"+t._s(t.topic.visit_count)+"次浏览")]),s("span",[t._v("•最后一次编辑是 3个月前")]),s("span",[t._v("•来自"+t._s("job"===t.topic.tab?"招聘":"ask"===t.topic.tab?"问答":"share"===t.topic.tab?"分享":"weex"))])])])]),s("div",{staticClass:"top-right"},[t.isLogin?s("span",{class:t.isCollect?"isCollect":"",staticStyle:{cursor:"pointer"},on:{click:t.changeCollect}},[t._v(t._s(t.isCollect?"取消收藏":"加入收藏"))]):t._e()])]),s("div",{staticStyle:{padding:"10px","border-left":"4px solid #099436",background:"#f6f6f6",margin:"10px 0"}},[t._v("粉丝福利 : 关注VUE中文社区公众号，回复视频领取粉丝福利")]),s("div",{staticClass:"topic_content",domProps:{innerHTML:t._s(t.topic.content)}})]),s("div",{staticClass:"inner1"},[s("div",{staticClass:"comment"},[s("ul",{staticClass:"comment-list"},[s("div",{staticClass:"head"},[s("span",{staticClass:"col_fade"},[t._v(t._s(t.topic.replies.length)+"回复")])]),t._l(t.topic.replies,function(e){return s("li",{key:e.id},[s("div",{staticClass:"comment-content"},[s("div",{staticClass:"top"},[s("router-link",{attrs:{to:t.$publicUrl+"/user/"+e.author.loginname}},[s("img",{attrs:{src:e.author.avatar_url,alt:""}})]),s("div",{staticClass:"user_info"},[s("a",{staticClass:"dark reply_author",attrs:{href:""}},[t._v(t._s(e.author.loginname))]),s("a",{staticClass:"reply_time",attrs:{href:""}},[t._v(t._s(t.moment(e.create_at)))])]),s("div",{staticClass:"user_action"},[s("i",{class:t.isUped(e)?"fa up_btn fa-thumbs-o-up invisible active":"fa up_btn fa-thumbs-o-up invisible",staticStyle:{marginRight:"7px"},on:{click:function(s){return t.changeZan(e)}}}),s("span",{staticStyle:{marginRight:"7px",color:"'#000'",opacity:".4"}},[t._v(t._s(e.ups?e.ups.length:""))]),s("span",{on:{click:function(s){return t.addReply(e.author.loginname)}}},[s("i",{staticClass:"el-icon-s-comment"})])])],1),s("div",{staticClass:"reply-content"},[s("p",{domProps:{innerHTML:t._s(e.content)}})])])])})],2),s("div",{staticClass:"comment-panel"},[s("h3",[t._v("添加回复")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"textarea",attrs:{cols:"30",rows:"10"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),s("input",{staticClass:"submit",attrs:{type:"submit",value:"添加评论"},on:{click:t.addComment}})])])])]),t.user?s("div",{staticClass:"right"},[s("div",{staticClass:"zhuye"},[s("h3",[t._v("作者/")]),s("div",{staticClass:"user"},[s("div",{staticClass:"top"},[s("router-link",{attrs:{to:t.$publicUrl+"/user/"+t.user.loginname}},[s("img",{attrs:{src:t.topic.author.avatar_url,alt:""}})]),s("span",{staticClass:"loginname"},[t._v(t._s(t.user.loginname))])],1),s("p",{staticClass:"jifen"},[t._v(t._s(t.user.score)+"积分")])])])]):t._e()])]):s("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562736843568&di=caf782778d699eedd4979f2b9df8b4aa&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F98aefafe79d36f431f17dba205b3d4faa3684a2f96c1-qG1kd0_fw658",alt:""}})},O=[],P=(s("7514"),{name:"topic",data:function(){return{topic:null,isCollect:!1,text:"",color:!1,user:null}},created:function(){var t=this;p.a.get("https://www.vue-js.com/api/v1/topic/".concat(this.$route.params.id)).then(function(e){t.topic=e.data.data,console.log(t.topic),p.a.get("https://www.vue-js.com/api/v1/user/".concat(t.topic.author.loginname)).then(function(e){t.user=e.data.data})})},computed:{isLogin:function(){return Boolean(sessionStorage.getItem("token"))}},beforeCreate:function(){x.a.locale("zh-cn")},methods:{moment:function(t){return x()(t).fromNow()},changeCollect:function(){var t=this,e={accesstoken:sessionStorage.getItem("token"),topic_id:this.topic.id};this.isCollect?p.a.post("https://www.vue-js.com/api/v1/topic/de_collect",e).then(function(e){t.isCollect=!1}):p.a.post("https://www.vue-js.com/api/v1/topic/collect",e).then(function(e){t.isCollect=!0})},addComment:function(){var t=this;sessionStorage.getItem("token")?this.text.trim()?p.a.post("https://www.vue-js.com/api/v1/topic/".concat(this.topic.id,"/replies"),{accesstoken:sessionStorage.getItem("token"),content:this.text}).then(function(e){p.a.get("https://www.vue-js.com/api/v1/topic/".concat(t.$route.params.id)).then(function(e){t.topic=e.data.data,t.text=""})}):alert("评论不能为空"):alert("请登录")},changeZan:function(t){var e=this;sessionStorage.getItem("token")?p.a.post("https://www.vue-js.com/api/v1/reply/".concat(t.id,"/ups "),{accesstoken:sessionStorage.getItem("token")}).then(function(s){"up"===s.data.action?e.topic.replies.find(function(e){return e.id===t.id}).ups.push(sessionStorage.getItem("user_id")):e.topic.replies.find(function(e){return e.id===t.id}).ups=e.topic.replies.find(function(e){return e.id===t.id}).ups.filter(function(t){return t!=sessionStorage.getItem("user_id")})}):alert("请登录")},addReply:function(t){sessionStorage.getItem("token")?(this.text="@".concat(t," "),document.querySelector(".textarea").focus()):alert("请登录")},isUped:function(t){return-1!=this.topic.replies.find(function(e){return e.id===t.id}).ups.indexOf(sessionStorage.getItem("user_id"))}}}),E=P,q=(s("3734"),Object(v["a"])(E,I,O,!1,null,null,null)),T=q.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"userPage"},[s("div",{staticClass:"left"},[s("div",{staticClass:"zhuye"},[s("router-link",{attrs:{to:t.$publicUrl+"/"}},[s("h3",[t._v("主页/")])]),s("div",{staticClass:"user"},[s("div",{staticClass:"top"},[s("img",{attrs:{src:t.user.avatar_url,alt:""}}),s("span",{staticClass:"loginname"},[t._v(t._s(t.user.loginname))])]),s("p",{staticClass:"jifen"},[t._v(t._s(t.user.score)+"积分")]),s("span",{staticClass:"time"},[t._v(t._s("注册时间 "+t.moment(t.user.create_at)))])])],1),t.topics.length?s("div",{staticClass:"latest1"},[s("h3",[t._v("最近创建的话题")]),s("div",{staticClass:"content"},[s("ul",t._l(t.user.recent_topics,function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:t.$publicUrl+"/user/"+e.author.loginname}},[s("img",{attrs:{src:e.author.avatar_url,alt:""}})]),s("span",{staticClass:"count"},[t._v(t._s(t.topics.find(function(t){return t.id===e.id}).reply_count)+"/"+t._s(t.topics.find(function(t){return t.id===e.id}).visit_count))]),s("router-link",{staticClass:"title2",attrs:{to:t.$publicUrl+"/topic/"+e.id}},[t._v(t._s(e.title))]),s("span",[t._v(t._s(t.moment(e.last_reply_at)))])],1)}),0)])]):t._e(),t.replies.length?s("div",{staticClass:"latest2"},[s("h3",[t._v("最近参与的话题")]),s("div",{staticClass:"content"},[s("ul",t._l(t.user.recent_replies,function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:t.$publicUrl+"/user/"+e.author.loginname}},[s("img",{attrs:{src:e.author.avatar_url,alt:""}})]),s("span",{staticClass:"count"},[t._v(t._s(t.replies.find(function(t){return t.id===e.id}).reply_count)+"/"+t._s(t.replies.find(function(t){return t.id===e.id}).visit_count))]),s("router-link",{staticClass:"title2",attrs:{to:t.$publicUrl+"/topic/"+e.id}},[t._v(t._s(e.title))]),s("span",[t._v(t._s(t.moment(e.last_reply_at)))])],1)}),0)])]):t._e()]),s("div",{staticClass:"right"},[s("div",{staticClass:"zhuye"},[s("h3",[t._v("个人信息")]),s("div",{staticClass:"user"},[s("div",{staticClass:"top"},[s("img",{attrs:{src:t.user.avatar_url,alt:""}}),s("span",{staticClass:"loginname"},[t._v(t._s(t.user.loginname))])]),s("p",{staticClass:"jifen"},[t._v(t._s(t.user.score)+"积分")])])])])])},L=[],N=(s("ac6a"),s("5df3"),{name:"user",data:function(){return{user:{},replies:[],topics:[]}},watch:{"$route.fullPath":{immediate:!0,handler:function(){var t=this;this.user=[],this.replies=[],this.topics=[],p.a.get("https://www.vue-js.com/api/v1/user/".concat(this.$route.params.loginname)).then(function(e){t.user=e.data.data;var s=t.user.recent_replies.map(function(t){return p.a.get("https://www.vue-js.com/api/v1/topic/".concat(t.id))});Promise.all(s).then(function(e){t.replies=e.map(function(t){return{id:t.data.data.id,visit_count:t.data.data.visit_count,reply_count:t.data.data.reply_count}})});var a=t.user.recent_topics.map(function(t){return p.a.get("https://www.vue-js.com/api/v1/topic/".concat(t.id))});Promise.all(a).then(function(e){t.topics=e.map(function(t){return{id:t.data.data.id,visit_count:t.data.data.visit_count,reply_count:t.data.data.reply_count}})})})}}},beforeCreate:function(){x.a.locale("zh-cn")},methods:{moment:function(t){return x()(t).fromNow()}}}),M=N,R=(s("3056"),Object(v["a"])(M,F,L,!1,null,null,null)),G=R.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fabuPage"},[s("div",{staticClass:"left"},[s("div",{staticClass:"fabu"},[s("div",{staticClass:"title1"},[s("router-link",{attrs:{to:t.$publicUrl+"/"}},[s("h3",[t._v("主页/")])]),s("span",[t._v("发布话题")])],1),s("div",{staticClass:"content1"},[s("div",{staticClass:"options"},[s("span",[t._v("选择板块：")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedTab,expression:"selectedTab"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selectedTab=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:""}},[t._v("请选择")]),s("option",{attrs:{value:"share"}},[t._v("分享")]),s("option",{attrs:{value:"ask"}},[t._v("问答")]),s("option",{attrs:{value:"job"}},[t._v("招聘")])])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.topic_title,expression:"topic_title"}],staticClass:"title",attrs:{type:"text",placeholder:"标题字数 10 字以上"},domProps:{value:t.topic_title},on:{input:function(e){e.target.composing||(t.topic_title=e.target.value)}}}),s("quill-editor",{ref:"myQuillEditor",staticClass:"textarea",attrs:{options:t.editorOption},on:{blur:function(e){return t.onEditorBlur(e)},focus:function(e){return t.onEditorFocus(e)},ready:function(e){return t.onEditorReady(e)}},model:{value:t.topic_content,callback:function(e){t.topic_content=e},expression:"topic_content"}}),s("input",{staticClass:"submit",attrs:{type:"submit"},on:{click:t.submitTopic}})],1)])]),s("div",{staticClass:"right"})])},H=[],B=(s("a753"),s("8096"),s("14e1"),s("953d")),D={name:"newtopic",components:{quillEditor:B["quillEditor"]},data:function(){return{selectedTab:"",topic_title:"",topic_content:"",editorOption:{}}},methods:{submitTopic:function(){var t=this;console.log(this.selectedTab),p.a.post("https://www.vue-js.com/api/v1/topics",{title:this.topic_title,tab:this.selectedTab,content:this.topic_content,accesstoken:sessionStorage.getItem("token")}).then(function(e){console.log(e.data),t.topic_title="",t.selectedTab="",t.topic_content="",t.$router.push("".concat(t.$publicUrl,"/topic/").concat(e.data.topic_id))})},onEditorBlur:function(t){console.log("editor blur!",t)},onEditorFocus:function(t){console.log("editor focus!",t)},onEditorReady:function(t){console.log("editor ready!",t)},onEditorChange:function(t){var e=t.quill,s=t.html,a=t.text;console.log("editor change!",e,s,a),this.content=s}}},J=D,V=(s("a3a9"),Object(v["a"])(J,A,H,!1,null,null,null)),Z=V.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.message?s("div",{staticClass:"messagePage"},[s("div",{staticClass:"left"},[s("div",{staticClass:"latest2"},[s("div",{staticClass:"title1"},[s("router-link",{attrs:{to:t.$publicUrl+"/"}},[s("h3",[t._v("主页/")])]),s("span",[t._v("新消息")])],1),s("div",{staticClass:"content"},[t.message.hasnot_read_messages.length?s("ul",{staticClass:"list"},t._l(t.message.hasnot_read_messages,function(e){return s("li",{key:e.id},["at"!=e.type?s("span",{staticStyle:{display:"flex"}},[s("router-link",{attrs:{to:t.$publicUrl+"/user/"+e.author.loginname}},[t._v(t._s(e.author.loginname))]),t._v("回复了你的话题\n                "),s("router-link",{attrs:{to:t.$publicUrl+"/topic/"+e.topic.id}},[t._v(t._s(e.topic.title))])],1):s("span",{staticStyle:{display:"flex"}},[s("router-link",{attrs:{to:t.$publicUrl+"/user/"+e.author.loginname}},[t._v(t._s(e.author.loginname))]),t._v("在话题\n                "),s("router-link",{attrs:{to:t.$publicUrl+"/topic/"+e.topic.id}},[t._v(t._s(e.topic.title))]),t._v("中@了你\n              ")],1)])}),0):s("ul",[s("li",[t._v("无消息")])])])]),s("div",{staticClass:"latest1"},[s("h3",[t._v("过往信息")]),s("div",{staticClass:"content"},[t.message.has_read_messages.length?s("ul",{staticClass:"list"},t._l(t.message.has_read_messages,function(e){return s("li",{key:e.id},["at"!=e.type?s("span",{staticStyle:{display:"flex"}},[s("router-link",{attrs:{to:t.$publicUrl+"/user/"+e.author.loginname}},[t._v(t._s(e.author.loginname))]),t._v("回复了你的话题\n                "),s("router-link",{attrs:{to:t.$publicUrl+"/topic/"+e.topic.id}},[t._v(t._s(e.topic.title))])],1):s("span",{staticStyle:{display:"flex"}},[s("router-link",{attrs:{to:t.$publicUrl+"/user/"+e.author.loginname}},[t._v(t._s(e.author.loginname))]),t._v("在话题\n                "),s("router-link",{attrs:{to:t.$publicUrl+"/topic/"+e.topic.id}},[t._v(t._s(e.topic.title))]),t._v("中@了你\n              ")],1)])}),0):s("ul",[s("li",[t._v("无消息")])])])])]),s("div",{staticClass:"right"},[s("div",{staticClass:"zhuye"},[s("h3",[t._v("个人信息")]),s("div",{staticClass:"user"},[s("div",{staticClass:"top"},[s("router-link",{attrs:{to:t.$publicUrl+"/user/"+t.user_loginname}},[s("img",{attrs:{src:t.user_url,alt:""}})]),s("span",{staticClass:"loginname"},[t._v(t._s(t.user_loginname))])],1)])])])]):s("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562736843568&di=caf782778d699eedd4979f2b9df8b4aa&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F98aefafe79d36f431f17dba205b3d4faa3684a2f96c1-qG1kd0_fw658",alt:""}})])},K=[],W={name:"message",data:function(){return{message:null,marked_msgs:[]}},computed:{user_loginname:function(){return sessionStorage.getItem("user_loginname")},user_url:function(){return sessionStorage.getItem("user_url")}},created:function(){var t=this;p.a.get("https://www.vue-js.com/api/v1/messages",{params:{accesstoken:sessionStorage.getItem("token")}}).then(function(e){console.log(e.data.data),t.message=e.data.data})},updated:function(){var t=this;p.a.post("https://www.vue-js.com/api/v1/message/mark_all",{accesstoken:sessionStorage.getItem("token")}).then(function(e){console.log(e.data.marked_msgs),t.marked_msgs=e.data.marked_msgs})}},X=W,Y=(s("560a"),Object(v["a"])(X,Q,K,!1,null,null,null)),tt=Y.exports,et="/vue-shequ";n["default"].use(k["a"]);var st=[{component:z,path:et+"/"},{component:Z,path:et+"/topic/create"},{component:T,path:et+"/topic/:id"},{component:G,path:et+"/user/:loginname"},{component:tt,path:et+"/my/messages"}],at=new k["a"]({routes:st,mode:"history"}),it=at;s("8a7b"),s("55e3");n["default"].config.productionTip=!1,n["default"].use(i.a),n["default"].prototype.$publicUrl=et,new n["default"]({render:function(t){return t(j)},router:it}).$mount("#app")},"64f0":function(t,e,s){"use strict";var a=s("a6ce"),i=s.n(a);i.a},8842:function(t,e,s){},"8a7b":function(t,e,s){},a3a9:function(t,e,s){"use strict";var a=s("f0fe"),i=s.n(a);i.a},a6ce:function(t,e,s){},b53f:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},e0d2:function(t,e,s){"use strict";var a=s("e16e"),i=s.n(a);i.a},e16e:function(t,e,s){},f0fe:function(t,e,s){}});
//# sourceMappingURL=app.0abb498f.js.map