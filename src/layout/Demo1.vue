<template>
  <el-container>
      <el-header>
        <hello-world></hello-world>
        <el-menu router :default-active="defaultActive" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="/demo1" >首页</el-menu-item>
          <el-menu-item index="/demo1/form">表单样式</el-menu-item>
          <el-menu-item index="/demo1/grid">表格样式</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <router-view></router-view>
      </el-container>
  </el-container>
</template>
<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  components: {
    'HelloWorld': HelloWorld
  },
  data:function() {
    return {
      defaultActive:'1'
    }
  }
}
</script>
