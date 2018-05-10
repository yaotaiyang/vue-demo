// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import 'babel-polyfill'
import ElementUI from 'element-ui'
import './element-variables.scss'// �Զ���element-ui������ɫ

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  /* ·�ɷ����仯�޸�ҳ��title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
