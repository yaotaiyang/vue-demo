import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '../App'
Vue.use(Router);
export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children: [{
        path: '',
        name:"homePage",
        component: r => require.ensure([], () => r(require('../pages/home')), 'home')
      }, {
          path: '/list',
          name:"listPage",
          component: r => require.ensure([], () => r(require('../pages/list')), 'list')
        }, {
        path: '/detail',
        name:"detailPage",
        component: r => require.ensure([], () => r(require('../pages/detail')), 'detail')
      }
      ]
    }
  ]
})
