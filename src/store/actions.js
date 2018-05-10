import service from '../utils/service'
import Cookies from 'cookies-js'
export default {
  getGlobalData: function ({ commit, state }) {
    const jwtToken = Cookies.get('jwtToken')
    /// 全局数据获取
    if ((state.globalData && state.globalData.status === 1) || !jwtToken) {
      // 已经获取或没token则不获取
    } else {
      service('/api/globaldata').then(function (res) {
        var resObj = res.data || {}
        if (resObj.status === 1) {
          commit('GLOBAL_DATA', resObj)
        }
      }, function (res) { })
    }
  }
}
