<template>
    <div class="my-header clearfix">
        <div class="pull-left title">{{globalData.siteName}}</div>
        <div v-if="globalData.userData" class="info pull-right align-right">
            <span class="inline-block user-info">用户 : {{globalData.userData.name}}</span>
            <el-button size="mini">个人信息</el-button>
            <el-button size="mini">退出系统</el-button>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data: function () {
    return {
    }
  },
  computed: Object.assign({

  }, mapState(['globalData'])),
  created: function () {
  }
}
</script>
<style>
.my-header{background-color: #337ab7;color:#fff;padding:10px;}
.my-header .title{font-size: 24px;}
.my-header .info{line-height: 33px;}
.my-header .user-info{margin-right: 10px}
</style>
