// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './style/base.css'
import { get, post } from './utils/http'
import api from './api/index'

// If you need real machine debugging, turn vconsole on
// import Vconsole from 'vconsole'
// new Vconsole()

Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$api = api

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
