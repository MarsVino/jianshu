<template>
  <div class="myslide">
    <a href=""><i></i></a>
  </div>
</template>

<script>
  export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .myslide{
    position: fixed;
    width: 50px;
    height: 50px;
    border: 1px solid #dcdcdc;
    right: 20px;
    bottom: 100px;
    z-index: 101;
  }
  .myslide a{
    line-height: 50px;
  }
  .myslide a i:before{
    content: '\2191';
  }

</style>
