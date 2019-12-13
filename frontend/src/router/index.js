import Vue from 'vue'

import Auth from '@/auth'
import Router from 'vue-router'
import { ApmVuePlugin } from '@elastic/apm-rum-vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: require('@/components/Login.vue')
    },
    {
      path: '/',
      alias: '/todos',
      name: 'todos',
      component: require('@/components/Todos.vue'),
      beforeEnter: requireLoggedIn
    }
  ]
})

const ELASTIC_APM_SERVER_URL = process.env.ELASTIC_APM_SERVER_URL

export default router

Vue.use(ApmVuePlugin, {
  router,
  config: {
    serviceName: 'frontend',
    serverUrl: ELASTIC_APM_SERVER_URL,
    serviceVersion: '',
    distributedTracingOrigins: ['http://users-api:8083'],
    logLevel: 'debug'
  }
})
function requireLoggedIn (to, from, next) {
  if (!Auth.isLoggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}
