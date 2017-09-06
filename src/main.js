import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import EventBus from './plugins/event-bus'
import Router from './routers.js'

Vue.use(EventBus)
Vue.use(VueRouter)
const router = new VueRouter({ Router,  mode: 'history' })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
