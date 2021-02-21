import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from './i18n'
import App from './App.vue'
import router from './router'

import './assets/styles/tailwind.css'
// import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
