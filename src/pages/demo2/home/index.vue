<template>
    <el-main>
      来看看首页吧！<br>
      <br>
      <router-link to="/demo1">跳转至第一个模块</router-link>

    </el-main>
</template>
<script>
export default {
  data: function () {
    return {
      breadCrumb: []
    }
  },
  created: function () {}
}
</script>
