/**
 * Created by yaoxy on 2018/3/19.
 */
export default {
  //初始化信息
  addNum:function({commit,state}){
    commit('ADD_NUMBER');
  },
  initializeData:function({ commit }) {
    commit('INITIALIZE_DATA');
  }
}
