/*
 * @Author: qb
 * @Date: 2019-01-02 13:12:39
 * @Last Modified by: qb
 * @Last Modified time: 2019-01-02 13:31:25
 */

import Alert from '@components/Alert'

export default {
  install (Vue) {
    const VueAlert = Vue.extend(Alert)
    let alert

    function $alert (options) {
      return new Promise((resolve) => {
        if (!alert) {
          alert = new VueAlert()
          alert.$mount()
          document.getElementById('app').appendChild(alert.$el)
        }
        if (options === undefined || options === null) {
          options = {
            content: ''
          }
        } else if (typeof options === 'string' || typeof options === 'number') {
          options = {
            content: options
          }
        }
        Object.assign(alert, options)
        alert.show()
        resolve()
      })
    }
    Vue.prototype.$mmAlert = $alert
  }
}
