<template>
  <div class="home-container">
    <img src="../../assets/logo.png">
    <div>
      <router-link to="list" class="start button_style" >next page</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'detail',
    components: {
    },
    created(){}
  }
</script>
<style>
  .home-container{text-align: center;}
</style>
