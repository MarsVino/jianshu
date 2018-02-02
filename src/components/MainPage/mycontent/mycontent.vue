<template>
  <div class="mycontent">
    <indexCarousel></indexCarousel>
    <recommend></recommend>
    <hotSubject></hotSubject>
  </div>
</template>

<script>
  import indexCarousel from './children/indexCarousel.vue'
  import recommend from './children/recommend.vue'
  import hotSubject from './children/hotSubject.vue'
  export default {
    components: {
      indexCarousel,
      recommend,
      hotSubject
    }
  }
</script>

<style>
.mycontent{
  width: 960px;
  margin: 0 auto;
  padding: 30px 15px 0 15px;
}
.mycontent:after{
  clear: both;
  display: block;
  content: '';
}
</style>
