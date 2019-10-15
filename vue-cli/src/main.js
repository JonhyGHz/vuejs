import Vue from 'vue'
import EventBus from 'event-bus.js'
import router from 'router/index.js'
import App from './components/App.vue'


window.EventBus = EventBus

var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
