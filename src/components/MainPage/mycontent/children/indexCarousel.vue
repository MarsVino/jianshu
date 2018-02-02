<template>
  <div class="indexCarousel" @mouseover="stop" @mouseout="move">
    <div class="carousel-inner">
      <!--<transition-group tag="div" name="image">-->
        <!--<div class="item" :key="index" v-for="(parent,index) in itemlists" v-show="index === mark" >-->
          <!--<div class="banner" :key="key" v-for="(item,key) in parent.bannerlists" >-->
            <!--<router-link to="_blank">-->
              <!--<img :src='item.img'>-->
            <!--</router-link>-->
          <!--</div>-->
        <!--</div>-->
      <!--</transition-group>-->
      <div class="item">
        <transition-group tag="ul" name="image">
          <li class="banner" :key="index" v-for="(item,index) in bannerlists" v-show="index === mark" >
            <router-link to="_blank">
              <img :src='item'>
            </router-link>
          </li>
        </transition-group>
      </div>
    </div>
    <ol class="index-bottom">
      <li class="li_hover" @click="change(index)" :key="index" v-for="item,index in bannerlists" :class="{'active': index === mark}" ></li>
    </ol>
    <a @click="prev()" v-show="is_showIcon" class="iconControl left_control" to="">
      <i class="icon fa fa-angle-left"></i>
    </a>
    <a @click="next()" v-show="is_showIcon" class="iconControl right_control" to="">
      <i class="icon fa fa-angle-right"></i>
    </a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        timer: null,
        mark: 0,
        bannerlists: [
          '/src/assets/img/carousel1.jpg',
          '/src/assets/img/carousel2.jpg',
          '/src/assets/img/carousel3.jpg',
          '/src/assets/img/carousel4.jpg',
          '/src/assets/img/carousel5.jpg',
          '/src/assets/img/carousel6.jpg'
        ],
        is_showIcon: false
//        itemlists: [
//          {
//            bannerlists: [
//              {
//                img: '/src/assets/img/carousel1.jpg'
//              },
//              {
//                img: '/src/assets/img/carousel2.jpg'
//              },
//              {
//                img: '/src/assets/img/carousel3.jpg'
//              }
//            ]
//          },
//          {
//            bannerlists: [
//              {
//                img: '/src/assets/img/carousel4.jpg'
//              },
//              {
//                img: '/src/assets/img/carousel5.jpg'
//              },
//              {
//                img: '/src/assets/img/carousel6.jpg'
//              }
//            ]
//          },
//          {
//            bannerlists: [
//              {
//                img: '/src/assets/img/carousel7.jpg'
//              },
//              {
//                img: '/src/assets/img/carousel8.jpg'
//              },
//              {
//                img: '/src/assets/img/carousel9.jpg'
//              }
//            ]
//          }
//        ]
      }
    },
    methods: {
      stop () {
        this.is_showIcon = true
        clearInterval(this.timer)
      },
      move () {
        this.is_showIcon = false
        this.timer = setInterval(this.autoPlay, 3000)
      },
      autoPlay () {
        this.mark++
        if (this.mark >= this.bannerlists.length) {
          this.mark = 0
        }
      },
      change (i) {
        this.mark = i
      },
      prev () {
        if (this.mark > 0) {
          this.mark -= 1
        } else {
          this.mark = this.bannerlists.length - 1
        }
      },
      next () {
        if (this.mark < this.bannerlists.length - 1) {
          this.mark += 1
        } else {
          this.mark = 0
        }
      },
      play () {
        this.timer = setInterval(this.autoPlay, 3000)
      }
    },
    created () {
      this.play()
    }
  }
</script>

<style>
  .indexCarousel{
    position:relative;
    overflow: hidden;
    margin-left: 15px;
  }
  .item {
    width: 1024px;
    height: 300px;
  }
  .banner{
    position: absolute;
  }
  .banner a img{
    display: block;
    height: 300px;
    width: 100%;
  }
  .index-bottom{
    position: absolute;
    bottom: 10px;
    left: 10%;
    width: 80%;
  }
  .index-bottom li{
    width: 30px;
    height: 3px;
    margin-right: 10px;
    display:inline-block;
    background-color: hsla(0,0%,47%,.4);
  }
  .iconControl{
    position: absolute;
    background: #000000;
    opacity:0.6;
    height: 50px;
    width: 40px;
    top:40%;
  }
  .icon{
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    /*margin-top: -14px;*/
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,.8);
    left: 50%;
    top: 50%;
    margin-left: -10px;
    margin-top: -10px;
  }
  .left_control{
    left: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .right_control{
    right: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .index-bottom .active{
    background-color: #ffffff !important;
  }
  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
</style>
