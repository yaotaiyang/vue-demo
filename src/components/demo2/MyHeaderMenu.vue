<template>
  <div class="my-head-menu clearfix">
    <div class="left-nav pull-left">
      <my-menu :active-index="activeIndex"></my-menu>
    </div>
    <div class="right-info" v-if="globalData.userData">
      <span class="inline-block"><i class="fa fa-bank"></i>机构 : {{globalData.organization}}</span>
      <span class="inline-block"><i class="fa fa-user"></i>操作员 : {{globalData.userData.name}}</span>
      <span class="inline-block"> <el-button type="primary" size="mini">退出</el-button></span>
    </div>
  </div>
</template>
<script>
import MyMenu from './MyMenu.vue'
import {mapState} from 'vuex'
export default {
  data: function () {
    return {}
  },
  computed: mapState(['globalData']),
  props: ['active-index'],
  components: {
    'MyMenu': MyMenu
  }
}
</script>
<style scoped>
  .my-head-menu{font-size: 12px;color:#888;}
  .left-nav{width:100%}
  .right-info{position:absolute;right:0;height: 32px;line-height: 32px;}
  .right-info .inline-block{margin: 0 8px 0 0;}
  .right-info i{color:#333;font-size: 14px;margin-right: 4px;}
  .right-info .fa-user{font-size: 16px;}
</style>
