<template>
  <el-main>
    <div class="not-found align-center"><i class="el-icon-info"></i>当前页面不存在
    </div>
  </el-main>
</template>
<script>
export default {
  data: function () {
    return {
    }
  },
  created: function () {

  }
}
</script>
<style scoped>
  .not-found{padding:100px 0 0 0;width:100%;font-size: 24px;color:#999}
  .not-found i{color:#f0ad4e;margin-right: 10px;}
</style>
