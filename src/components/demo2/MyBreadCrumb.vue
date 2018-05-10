<template>
  <div class="my-break-crumb">
    <div class="inline-block img-wrap align-middle">
      <img class="block" src="../../assets/logo.png">
    </div>
    <div class="inline-block align-middle">
      <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item  v-for="(item, index) in data" :key="index" :to="item.to">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {}
  },
  props: ['data']
}
</script>
<style scoped>
.my-break-crumb {
  padding: 6px 20px;
  border-bottom: 1px solid #f1f1f1;
}
.my-break-crumb .img-wrap {
  margin-right: 30px;
}
.breadcrumb {
  padding: 8px 20px;
  height: 14px;
}
.breadcrumb .el-breadcrumb__item:last-child {
  position: relative;
}
.breadcrumb .el-breadcrumb__item:last-child:after {
  content: "";
  position: absolute;
  left: 0;
  height: 2px;
  background-color: #337ab7;
  width: 100%;
  bottom: -16px;
}
</style>
