import Vue from 'vue'
import Router from 'vue-router'
import Demo1 from '../layout/Demo1.vue'
import Demo2 from '../layout/Demo2.vue'
Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/demo1'
    },
    {
      path: '/demo1',
      component: Demo1,
      children: [
        {
          path: '',
          meta: {
            title: 'demo1页面'
          },
          component: function (r) { require.ensure([], () => r(require('../pages/demo1/home')), 'demo1-home') }
        }, {
          path: '/demo1/form',
          meta: {
            title: 'demo1页面1'
          },
          component: function (r) { require.ensure([], () => r(require('../pages/demo1/form')), 'demo1-form') }
        },
        {
          path: '/demo1/grid',
          meta: {
            title: 'demo1页面1'
          },
          component: function (r) { require.ensure([], () => r(require('../pages/demo1/grid')), 'demo1-grid') }
        }
      ]
    },
    {
      path: '/demo2',
      component: Demo2,
      children: [
        {
          path: '',
          meta: {
            title: 'demo2页面1'
          },
          component: function (r) { require.ensure([], () => r(require('../pages/demo2/home')), 'demo2-home') }
        }, {
          path: '/demo2/*',
          meta: {
            title: 'demo2-404'
          },
          component: function (r) { require.ensure([], () => r(require('../pages/demo2/404')), 'manage-404') }
        }
      ]
    }
  ]
})
