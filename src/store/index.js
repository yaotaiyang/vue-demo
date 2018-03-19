/**
 * Created by yaoxy on 2018/3/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex);
const state = {
  number:0
};
export default new Vuex.Store({
  state,
  actions,
  mutations
})
