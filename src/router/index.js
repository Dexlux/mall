import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from 'views/index/index.vue'
import Fenlei from 'views/fenlei/fenlei.vue'
import Shopping from 'views/shopping/shopping.vue'
import Me from 'views/me/me.vue'

const routes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  }, {
    path: '/fenlei',
    component: Fenlei
  }, {
    path: '/shopping',
    component: Shopping
  }, {
    path: '/me',
    component: Me
  }
]
const router = new Router({
  routes,
  mode: 'history'
})

export default router