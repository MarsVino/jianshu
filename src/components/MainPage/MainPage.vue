<template>
  <div class="mainpage">
    <mycontent></mycontent>
    <myslide></myslide>
    <myfooter></myfooter>
  </div>
</template>

<script>
  import mycontent from './mycontent/mycontent.vue'
  import myslide from './myslide/myslide.vue'
  import myfooter from './myfooter/myfooter.vue'
  export default {
    name: 'MainPage',
    components: {
      mycontent,
      myslide,
      myfooter
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    width: 100%;
    margin: 0;padding: 0;
  }

</style>
