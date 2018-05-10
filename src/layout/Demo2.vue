<template>
  <el-container>
    <el-header>
      <hello-world></hello-world>
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
    }
  }
</script>
