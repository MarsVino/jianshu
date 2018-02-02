<template>
  <div class="hotSubject">
    <div class="board">
      <a target="_blank" href="/recommendations/notes?category_id=56&amp;utm_medium=index-banner-s&amp;utm_source=desktop">
        <img src="/src/assets/img/banner-s-1.png" alt="">
      </a>
      <a target="_blank" href="/trending/weekly?utm_medium=index-banner-s&amp;utm_source=desktop">
        <img src="/src/assets/img/banner-s-2.png" alt="">
      </a>
      <a target="_blank" href="/trending/monthly?utm_medium=index-banner-s&amp;utm_source=desktop">
        <img src="/src/assets/img/banner-s-3.png" alt="">
      </a>
      <a utm_medium="index-banner-s" target="_blank" href="/publications">
        <img src="/src/assets/img/banner-s-4.png" alt="">
      </a>
      <a target="_blank" href="/c/e048f1a72e3d?utm_medium=index-banner-s&amp;utm_source=desktop">
        <img src="/src/assets/img/banner-s-5.png" alt="">
      </a>
    </div>
    <a class="code">
      <img class="qrcode" src="/src/assets/img/qrcode.png" alt="Download index side qrcode">
      <div class="info">
        <div class="title">下载简书手机App<i class="iconfont ic-link"></i></div>
        <div class="description">随时随地发现和创作内容</div>
      </div>
    </a>
    <div class="authors">
      <div class="authorhead">
        <span>推荐作者</span>
        <a href=""><i class="fa fa-refresh"></i>换一批</a>
      </div>
      <ul class="name">
        <li>
          <a class="author_name" href="">
            <img src="//upload.jianshu.io/users/upload_avatars/6198903/a70dc654-6674-4b71-925f-0389f31fb095.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96">
          </a>
          <a class="author_focus" href="">
            <i class="fa fa-plus"></i>关注
          </a>
          <a class="author_info" href="">
            魏童
            <p>写了55K字·1.8K喜欢</p>
          </a>
        </li>
        <li>
          <a class="author_name" href="">
            <img src="//upload.jianshu.io/users/upload_avatars/1835526/6ac158c7-6af2-415a-886e-2868dd256783.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96">          </a>
          <a class="author_focus" href="">
            <i class="fa fa-plus"></i>关注
          </a>
          <a class="author_info" href="">
            魏童
            <p>写了55K字·1.8K喜欢</p>
          </a>
        </li>
        <li>
          <a class="author_name" href="">
            <img src="//upload.jianshu.io/users/upload_avatars/2149802/12963fbfaebc.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96">          </a>
          <a class="author_focus" href="">
            <i class="fa fa-plus"></i>关注
          </a>
          <a class="author_info" href="">
            魏童
            <p>写了55K字·1.8K喜欢</p>
          </a>
        </li>
        <li>
          <a class="author_name" href="">
            <img src="//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96">          </a>
          <a class="author_focus" href="">
            <i class="fa fa-plus"></i>关注
          </a>
          <a class="author_info" href="">
            魏童
            <p>写了55K字·1.8K喜欢</p>
          </a>
        </li>
        <li>
          <a class="author_name" href="">
            <img src="//upload.jianshu.io/users/upload_avatars/19107/08f8146dae87.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96">          </a>
          <a class="author_focus" href="">
            <i class="fa fa-plus"></i>关注
          </a>
          <a class="author_info" href="">
            魏童
            <p>写了55K字·1.8K喜欢</p>
          </a>
        </li>
      </ul>
      <a class="find-more" href="">查看全部 >
        <i class="icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style>
.hotSubject{
  float: left;
  width: 29.5%;
  margin-left: 3%;
  padding-top: 40px;
}
.hotSubject:after{
  clear: both;
  display: block;
  content: '';
}
.board a{
  display: block;
}
.board img{
  height: 50px;
  width: 100%;
}
.code{
  border: 1px solid #f0f0f0;
  display: inline-block;
  width: 100%;
  border-radius: 6px;
  padding: 10px 22px;
  box-sizing: border-box;
  margin-bottom: 20px;
  position: relative;
}
.authors:after{
  display: block;
  content: '';
  clear: both;
}
.code img{
    width: 60px;
    height: 60px;
    display: inline-block;
    vertical-align: middle;
    opacity: .85;
  }
.info{
    display: inline-block;
    color: black;
    font-size: 14px;
    margin-left: 7px;
    vertical-align: middle;
  }
.description{
    color: #999;
  }
.authorhead{
  font-size: 14px;
  color: #969696;
  margin-bottom: 20px;
}
.authorhead:after{
  display: block;
  content: '';
  clear: both;
}
.authorhead span{
    float: left;
  }
.authorhead a{
    float: right;
    color: #969696;
  }
.authorhead .fa-refresh{
  margin-right: 5px;
}
.authors .name{
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
}
.authors .name:after{
  clear: both;
  display: block;
  content: '';
}
.authors .name li{
  width: 100%;
  line-height: 20px;
  list-style-type: none;
}
.author_name, .author_info{
  color: black;
  font-size: 14px;
}
.author_name{
  width: 48px;
  height: 48px;
  margin-right: 10px;
  float: left;
}
.author_focus{
  float: right;
  font-size: 13px;
  color: #42c02e;
}
.author_focus i{
  margin-right: 5px;
}
.author_info{
  padding-top: 5px;
  margin-right: 60px;
}
.author_info p{
  font-size: 12px;
  color: #969696;
  margin-top: 2px;
}
.authors .name li img{
  display: inline-block;
  border: 1px solid #eeeeee;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.authors .name li div{
  display: inline-block;
  vertical-align: middle;
}
.find-more{
  float: left;
  font-size: 13px;
  line-height: 20px;
  border: 1px solid #dcdcdc;
  width: 100%;
  color: #787878;
  background-color: #f7f7f7;
  border-radius: 4px;
  padding: 7px 7px 7px 12px;
}
</style>
