<template>
  <div class="subaside">
    <span>全部关注</span>
    <ul>
      <router-link class="is-hover" active-class="is-active" tag="li" :to="{path:'/subscriptions/recommendation',query:{title:'all'}}">
        <div class="userimg">
          <img src="/src/assets/img/user-plus.png">
        </div>
        <div class="focus">添加关注</div>
      </router-link>
      <router-link class="is-hover" active-class="is-active" tag="li" :to="'/subscriptions/user/'+item.path" :key="index" v-for="item,index in userlist">
        <div class="userimg">
          <img :src="item.img">
        </div>
        <div class="focus">{{item.name}}</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  let userdata = [
    {
      userId: 1,
      path: 'history',
      name: '历史',
      img: '//upload.jianshu.io/collections/images/75/22.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120'
    },
    {
      userId: 2,
      path: 'read',
      name: '读书',
      img: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120'
    }
  ]
  export default {
    data () {
      return {
        userlist: userdata
      }
    }
  }
</script>

<style>
  .subaside{
    border-right: 1px solid #f0f0f0;
    width: 20%;
    margin: 86px 0 0 20px;
    text-align: left;
    position: fixed;
    top: 0px;
    bottom: 0px;
    cursor: default;
  }
  .subaside span{
    display: block;
    padding: 0 0 15px 10px;
    border-bottom: 1px solid #eeeeee;
  }
  .subaside li{
    list-style-type: none;
    height: 60px;
    /*background-color: #eeeeee;*/
    /*border: 1px solid #eeeeee;*/
    border-bottom-left-radius: 5px;

    padding: 10px;
    box-sizing: border-box;
    display: block;
  }
  .subaside li:not(:first-child){
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  .subaside .userimg{
    display: inline-block;
    margin-right: 10px;
  }
  .subaside .userimg img{
    width: 40px;
    height: 40px;
    vertical-align: middle;
    border-radius: 5px;
  }
  .subaside .focus{
    display: inline-block;
  }
  .subaside .is-active{
    background: #eeeeee;
  }
  .subaside .is-hover:hover{
    background: #eeeeee;
  }
</style>
