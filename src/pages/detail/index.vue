<template>
  <div class="detail-container">
    detailPage-{{number}}-{{this.$route.query}}
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    name: 'detail',
    computed: mapState(['number']),
    components: {
    },
    created(){}
  }
</script>
<style>

</style>
