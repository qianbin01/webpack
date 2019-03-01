{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import App from './App'
{{#router}}
import router from './router'
  import './icons'

{{/router}}
const Vue = require('vue')
const ElementUI = require('element-ui')
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})

//权限管理限制的路由跳转
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (sessionStorage.getItem('isLogin') === '1') {
      if (to.meta.role.includes(parseInt(sessionStorage.getItem('role')))) {
        next()
      } else {
        next({ path: '/page403' })
      }
    } else {
      next({ path: '/' })
      Message({
        showClose: true,
        message: '检测到您还未登录,请登录后操作!',
        type: 'error'
      })
    }
  } else {
    next()
  }
})
