/**
 * Created by yaoxy on 2018/3/19.
 */
const ADD_NUMBER = 'ADD_NUMBER';
const INITIALIZE_DATA = 'INITIALIZE_DATA';
export default {
  //点击进入下一题
  [ADD_NUMBER](state, num) {
    state.number += 1;
  },
  /*
   初始化信息，
   */
  [INITIALIZE_DATA](state) {
    state.number = 2;
  }
}
