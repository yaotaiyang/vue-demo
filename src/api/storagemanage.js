import service from '../utils/service'
const storeService = {}

// 登录
storeService.getList = function (params) {
  return service({
    url: 'api/store-getList',
    method: 'post',
    data: params
  })
}

export default storeService
