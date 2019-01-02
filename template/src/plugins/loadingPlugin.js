/*
 * @Author: qb
 * @Date: 2019-01-02 11:35:13
 * @Last Modified by: qb
 * @Last Modified time: 2019-01-02 11:51:34
 */
import Loading from '@components/Loading'

export default {
  install (Vue) {
    const VueLoading = Vue.extend(Loading)
    let loading = null

    function $loading () {
      return new Promise((resolve) => {
        if (!loading) {
          loading = new VueLoading()
          loading.$mount()
          document.getElementById('app').appendChild(loading.$el)
        }
        loading.show()
        resolve()
      })
    }
    $loading.hide = () => {
      return new Promise((resolve) => {
        if (!loading || !loading.isShow) {
          resolve()
          return
        }
        loading.hide()
      })
    }
    Vue.prototype.$loading = $loading
  }
}
