// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import App from '@/components/App'
import router from './router'
import store from './store'

/* APM agent */
import { init as initApm } from 'elastic-apm-js-base'
const apm = initApm({
  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'frontend',
  serverUrl: process.env.ELASTIC_APM_SERVER_URL,
  // Set service version (required for sourcemap feature)
  serviceVersion: '',
  distributedTracingOrigins: ['http://127.0.0.1:8080']
})

apm.setInitialPageLoadName('frontend')

Vue.config.productionTip = false

/* Auth plugin */
import Auth from './auth'
Vue.use(Auth)

/* Auth plugin */
import Zipkin from './zipkin'
Vue.use(Zipkin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
