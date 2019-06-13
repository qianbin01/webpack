import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import mmPlugin from './plugins/mmPlugin'
import './styles/mkml_common.scss'
import { Notify } from 'vant'
Vue.use(mmPlugin)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (sessionStorage.getItem('isLogin') === '1') {
      if (to.meta.role.includes(Number(sessionStorage.getItem('role')))) {
        next()
      } else {
        next({ path: '/page403' })
      }
    } else {
      next({ path: '/' })
      Notify({
        duration:1000,
        message: '检测到您还未登录,请登录后操作!'
      })
    }
  } else {
    next()
  }
})
