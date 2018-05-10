import axios from 'axios'
import Cookies from 'cookies-js'
import { MessageBox } from 'element-ui'
import Router from 'vue-router'

var codeMessage = {
  200: '服务器成功返回请求的数据',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时'
}

// 创建axios 实例
const service = axios.create({
  baseURL: process.env.API_ROOT, // api的base_url
  timeout: 6000 // 请求超时时间
})

// service拦截器
service.interceptors.request.use(config => {
  const jwtToken = Cookies.get('jwtToken')
  if (jwtToken) {
    config.headers.Authorization = jwtToken
  }
  return config
}, error => {
  // Do something with request error
  MessageBox({'type': 'error', 'title': '提示信息', 'message': error.message})
  Promise.reject(error)
})

// service拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      if (response.data === undefined || (response.data.traceid === undefined)) {
        if (response.headers.authorization) { // 请求写cookie
          Cookies.set('jwtToken', response.headers.authorization)
        }
        return response
      } else if (response.data.traceid) {
        MessageBox({'type': 'error', 'title': '提示信息', 'message': response.data.message})
      }
    } else {
      MessageBox({'type': 'error', 'title': '提示信息', 'message': codeMessage[response.status]})
      return Promise.reject(response)
    }
  },
  error => {
    console.log('err' + error)// for debug
    if (error.response.status === 401) { // 无效token
      Cookies.remove('jwtToken')
      Router.push('/login')
    }
    MessageBox({'type': 'error', 'title': '提示信息', 'message': codeMessage[error.response.status]})
    return Promise.reject(error)
  }
)

export default service
