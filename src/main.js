import Vue from 'vue'
import VueTextareaAutosize from 'vue-textarea-autosize'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueTextareaAutosize)

new Vue({
  render: h => h(App),
}).$mount('#app')