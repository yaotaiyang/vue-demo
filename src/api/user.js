import service from '../utils/service'
const userService = {}

// 登录
userService.login = function (params) {
  return service({
    url: 'api/user-login',
    method: 'post',
    data: params
  })
}
// 获取用户信息
userService.getUserInfo = function (params) {
  return service({
    url: 'api/user-getUserInfo',
    method: 'post',
    params: params
  })
}

export default userService
