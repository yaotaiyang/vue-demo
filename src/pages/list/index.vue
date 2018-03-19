<template>
  <div class="list-container">
    点击按钮,增加number,当number添加大于5,跳页
    <div class="score">
      {{number}}
    </div>
    <button class="btn" @click="addNum(111)">添加number</button>
  </div>
</template>
<script>
  import {mapState,mapActions} from 'vuex';
  import {addNum,initializeData} from '../../store/actions';
  var actions = mapActions(['addNum','initializeData']);
  export default {
    name: 'list',
    data:function(){
      return {}
    },
    computed: mapState(['number']),
    components: {
    },
    methods: Object.assign({
      addNum:function(){
        this.$store.commit('ADD_NUMBER');
        if(this.$store.state.number>5){//判断store中的数据,跳转
          this.$router.push({path:"/detail",query:{"type":"numberjump"}})
        }
      }
    },mapActions(['initializeData'])),
    created(){//执行actions中的初始化,numbe设置为2
      this.initializeData();//直接调用actions中的初始化方法
    }
  }
</script>

<style>
  .btn{cursor:pointer;}
  .list-container{
    text-align: center;
  }
</style>
