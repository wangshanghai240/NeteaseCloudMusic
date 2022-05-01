import Vue from 'vue'
import App from './App.vue'
// 导入路哟
import router from 'router/index.js'
// 导入vuex
// import store from 'store/index.js'
new Vue({
  render:h => h(App),
  router,
  // store
}).$mount('#app')
