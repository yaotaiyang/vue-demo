<template v-if="globalData.menuData">
    <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#fff" text-color="#777" active-text-color="#337ab7">
        <template v-for="(item,key) in globalData.menuData">
            <el-submenu v-if="item.children" :index="item.path" :key="key">
                <template slot="title">{{item.name}}</template>
                <el-menu-item v-for="(subitem,subkey) in item.children" :key="subkey" :index="subitem.path">{{subitem.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item :key="key" v-else :index="item.path"><i v-if="item.icon" :class="item.icon"></i>{{item.name}}</el-menu-item>
        </template>
    </el-menu>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data: function () {
    return {}
  },
  computed: mapState(['globalData']),
  props: ['active-index'],
  methods: {}
}
</script>
<style>
    .el-menu--horizontal>.el-menu-item,.el-menu--horizontal>.el-submenu .el-submenu__title{height: 32px!important;line-height: 32px!important;padding:0 6px!important;font-size: 12px!important;}
    .el-menu-item [class^=el-icon-]{font-size: 12px;width:auto;}
</style>
