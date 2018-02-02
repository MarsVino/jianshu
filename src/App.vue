<template>
  <div id="app">
    <nav>
      <div class="header">
        <router-link to="/" class="logo">
          <img src="../src/assets/img/jianshu_icon.png" alt="Logo">
        </router-link>
        <router-link to="/writer" class="btn write-btn">
          <i class="fa fa-pencil"></i>写文章
        </router-link>
        <div class="user msg_hover" @mouseover="userInfoShow" @mouseout="userInfoHide">
          <div class="dropdown">
            <router-link to="/users">
              <img src="//upload.jianshu.io/users/upload_avatars/9495683/dd49113e-3600-4097-84e4-68bd5b80032a?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120" alt="120">
              <i class="userlist"></i>
            </router-link>
          </div>
          <ul class="user_ul" v-if="is_showuserinfo" >
            <li class="user_li msg_hover" v-for="userinfo in userinfos">
              <span>{{userinfo}}</span>
            </li>
          </ul>
        </div>
        <div class="style-mode">
          <p>Aa</p>
        </div>
        <div class="container">
          <div class="navbar-collapse">
            <ul class="navbar-collapse-ul">
              <router-link class="message" to="/" tag="li">
                <p>发现</p>
              </router-link>
              <router-link class="message msg_hover" :to="{path:'/subscriptions/recommendation/', query:{title:'all'}}">
                <p>关注</p>
              </router-link>
              <li class="message msg_hover" @mouseover="messageShow" @mouseout="messageHide">
                <router-link to="/notifications">消息</router-link>
                <div v-if="is_showmessage">
                  <ul class="message_ul" >
                    <li class="message_li msg_hover" v-for="message in messages">
                      <span>{{message}}</span>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="message">
                <form action="">
                  <input type="text" placeholder="搜索">
                  <router-link to=""><i class="fa fa-search"></i></router-link>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'app',
    data () {
      return {
        is_showmessage: false,
        is_showuserinfo: false,
        messages: [
          '评论', '简信', '投稿请求', '喜欢和赞', '关注', '赞赏'
        ],
        userinfos: [
          '我的主页', '收藏的文章', '喜欢的文章', '我的钱包', '设置', '帮助与反馈'
        ]
      }
    },
    methods: {
      messageShow () {
        this.is_showmessage = true
      },
      messageHide () {
        this.is_showmessage = false
      },
      userInfoShow () {
        this.is_showuserinfo = true
      },
      userInfoHide () {
        this.is_showuserinfo = false
      }
    },
    created () {
      axios({
        method: 'get',
        url: 'https://easy-mock.com/mock/5a4dec39d15d983e1a86f813/hello_copy_1515056322769'
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
</script>

<style>
  *{
    padding: 0;margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

   nav{
     height: 58px;
   }
  nav:after{
    clear: both;
    content: '';
    display: block;
  }
  a{
    text-decoration: none;
    color: black;
  }
  .header{
    height: 58px;
    width: 100%;
    position: fixed;
    z-index: 1030;
    background-color: white;
    border: 1px solid #f0f0f0;
  }
  .user, .style-mode{
    float: right;
    height: 100%;
  }
  .header:after{
    display: block;
    content: '';
    clear: both;
  }
  .dropdown{
    line-height: 58px;
  }
  nav .logo{
    float: left;
    /*height: 56px;*/
    /*padding: 14px 25px 15px 20px;*/
  }
  nav .write-btn{
    float: right;
    width: 70px;
    font-size: 15px;
    line-height: 24px;
    color: #fff;
    background-color: #ea6f5a;
    border-radius: 20px;
    margin: 8px 15px 0;
  }
  .container{
    width: 960px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .navbar-collapse{
    width: 100%;
    height: 100%;
  }
  .navbar-collapse-ul li p{
    cursor: default;
    color: black;
    font-size: 17px;
  }
  .userlist:before{
    content:'\25BC'
  }
  .btn{
    display: inline-block;
    font-weight:400;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 6px 12px;
  }
  .logo img{
    display: block;
    height: 60px;
    width: 100px;
  }
  .user a:first-child{
    position: relative;
    width: 40px;
    height: 40px;
    margin: 8px 28px 8px 20px;
  }
  .user a:first-child img{
    width: 40px;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 50%;
    vertical-align: middle;
  }
  .style-mode p{
    line-height: 58px;
    font-size: 24px;
    color: darkgray;
    font-weight: bold;
    font-family: 宋体;
  }
  .message{
    width: 64px;
    list-style-type: none;
    float: left;
    margin-right: 10px;
    line-height: 58px;
  }
  .message:first-child p{
    color:#ea6f5a;
  }
  .navbar-collapse-ul:after{
    clear: both;
    display: block;
    content: '';
  }
  .message form{
    position: relative;
    width: 160px;
  }
  .message form input{
    box-sizing: border-box;
    padding: 0 40px 0 20px;
    height: 38px;
    width: 100%;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
  }
  .message form a{
    position: absolute;
    top:0;
    right: 5px;
    width: 30px;
    height: 30px;
  }
  .message_ul, .user_ul{
    position: absolute;
    width: 200px;
    background-color: white;
    text-align: left;
    /*box-shadow: 0 2px 8px rgba(0,0,0,.1);*/
    border-radius: 4px;
  }
  .message_li, .user_li{
    font-size: 14px;
    list-style-type: none;
    padding-left: 20px ;
    line-height: 40px;
  }
  .msg_hover:hover{
    background-color: #f0f0f0;
  }
  .write-btn i{
    color: white;
    margin: 3px;
  }

</style>
