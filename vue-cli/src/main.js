import Vue from 'vue'
import EventBus from 'event-bus.js'
import App from './components/App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
