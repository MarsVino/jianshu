<template>
  <div class="subscriptions">
    <subaside></subaside>
    <router-view></router-view>
  </div>
</template>

<script>
  import subaside from '../subscriptions/subaside/subaside'
  export default {
    components: {
      subaside
    }
  }
</script>

<style>
  .subscriptions{
    height: 100%;
    width: 960px;
    margin: 0 auto;
    padding: 30px 15px 0 15px;
  }
</style>
