<template>
  <div class="recommendation">
    <div>
      <ul class="title">
        <li>
          <router-link event="mouseover" exact active-class="is-active" :key="index" v-for="item,index in titlelists" :to="{path: '', query:{title:item.alias}}">
            <i v-show="item.class" :class="item.class"></i>{{item.name}}
          </router-link>
        </li>
      </ul>
      <ul class="follow-list">
        <li :key="index" v-for="item,index in recommendlist">
          <router-link class="focus" to="">
            <i class="fa fa-plus"></i>关注
          </router-link>
          <div class="subject_recommend">{{item.msg1}}</div>
          <router-link class="img" to="">
            <img :src='item.img'>
          </router-link>
          <div class="info">
            <router-link class="subject" to="">{{item.msg2}}</router-link>
            <p>{{item.msg3}}</p>
            <router-link class="someinfo" to="">
              <i class="fa fa-th-large"></i>{{item.msg4}}
              <i v-if="item.is_author" class="fa fa-tags"></i>{{item.msg5}}
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  let titledata = [
    {
      alias: 'all',
      class: '',
      name: '全部推荐'
    },
    {
      alias: 'author',
      class: 'fa fa-user',
      name: '推荐作者'
    },
    {
      alias: 'subject',
      class: 'fa fa-th-large',
      name: '推荐专题'
    }
  ]
  let subsdata = [
    {
      recommendId: 1,
      img: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144',
      msg1: '简书专题推荐',
      msg2: '手绘',
      msg3: '本专题是绘画爱好者的乐园，欢迎互相分享学习;关于专题投稿要求...',
      msg4: '82.7K篇文章 · 1023.5K人关注'
    },
    {
      recommendId: 2,
      img: '//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144',
      msg1: '简书专题推荐',
      msg2: '科普',
      msg3: '本专题仅收涉及自然科学（生物、天文、物理等）的科普、介绍、发现类...',
      msg4: '2.5K篇文章 · 495.3K人关注'
    },
    {
      recommendId: 3,
      img: '//upload.jianshu.io/users/upload_avatars/9495683/dd49113e-3600-4097-84e4-68bd5b80032a?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',
      msg1: '简书作者推荐',
      msg2: '穿着Carhartt的你麻爸爸',
      msg3: '踏破银河来点醒你们这些凡人...',
      msg4: '0篇文章 · 99999999+K人关注',
      msg5: '你见过洛杉矶凌晨4点的样子吗？Manba out...',
      is_author: true
    },
    {
      recommendId: 4,
      img: '//upload.jianshu.io/collections/images/494271/51164a1egd7b1a4a7c491_690.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144',
      msg1: '简书专题推荐',
      msg2: '人文社科',
      msg3: '本专题收录人文社科类精选文章，是一个学术类文章的综合性专题。...',
      msg4: '2.3K篇文章 · 78.2K人关注'
    },
    {
      recommendId: 5,
      img: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144',
      msg1: '简书专题推荐',
      msg2: '简书电影',
      msg3: '和简书一起探索电影世界，欢迎订阅官方公众号：简书电影（jians...',
      msg4: '66.7K篇文章 · 1044.0K人关注'
    },
    {
      recommendId: 6,
      img: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144',
      msg1: '简书专题推荐',
      msg2: '读书',
      msg3: '谈谈读的那些书。投稿须知：读书专题仅收录与读书有关的...',
      msg4: '151.6K篇文章 · 2221.8K人关注'
    },
    {
      recommendId: 7,
      img: '//upload.jianshu.io/collections/images/75/22.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144',
      msg1: '简书专题推荐',
      msg2: '历史',
      msg3: '专题公告：本专题主要收录历史阐述与分析类文章，也收录历史小说...',
      msg4: '38.6K篇文章 · 1226.7K人关注'
    }
  ]
  export default {
    name: 'recommend',
    data () {
      return {
        titlename: 'all',
        titlelists: titledata,
        recommendlist: subsdata
      }
    },
    methods: {
      change () {

      }
    }
  }
</script>

<style>
  .recommendation{
    width: 63%;
    margin-left: 36%;
  }
  .recommendation li{
    list-style-type: none;
  }
  .recommendation .title{
    text-align: left;
    border-bottom: 1px solid #eeeeee;
  }
  .recommendation .title li a{
    display: inline-block;
    padding: 15px;
    font-weight: bold;
    color: #969696;
    cursor: default;
  }
  .recommendation .title li i{
    margin-right: 5px;
  }
  .recommendation .follow-list{
    margin-top: 20px;
    text-align: left;
  }
  .recommendation .follow-list li{
    font-size: 13px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f0f0f0;
  }
  .recommendation .follow-list li .subject_recommend{
    color: #ec6e56;
    margin-bottom: 10px ;
  }
  .recommendation .follow-list li .focus{
    float: right;
    text-align: center;
    font-size: 18px;
    padding: 5px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border-radius: 40px;
    background: #42c02e;
    color: #ffffff;
  }
  .recommendation .follow-list li .focus .fa-plus{
    margin-right: 10px;
  }
  .recommendation .follow-list li .img{
    float: left;
    width: 53px;
    height: 53px;
    border: 1px solid #eeeeee;
    margin: 0 10px 0 0;
    border-radius: 5px;
  }
  .recommendation .follow-list li .img img{
    width: 100%;
    height: 100%;
  }
  .recommendation .follow-list .info{
    color: #969696;
  }
  .recommendation .follow-list .info .subject{
    font-weight: 700;
    margin-bottom: 5px;
  }
  .recommendation .follow-list .info p{
    margin-bottom: 5px;
  }
  .recommendation .follow-list .info .someinfo{
    margin-bottom: 5px;
    color: #969696;
  }
  .recommendation .follow-list .info .someinfo  i{
    margin-right: 5px;
  }
  .title li .is-active{
    border-bottom: 2px solid #646464;
    color: black !important;
  }
</style>
