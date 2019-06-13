/*
 * @Author: qb
 * @Date: 2019-01-02 11:20:14
 * @Last Modified by: qb
 * @Last Modified time: 2019-06-13 14:39:17
 */

import config from '../config'
import mkmlCommon from '../lib/mkml_common'
export default {
  install (Vue) {
    let HttpMethod = mkmlCommon.apiUtils.default
    let ApiManager = HttpMethod.getInstance(config.BASE_URL)
    Vue.prototype.$ApiManager = ApiManager
    for (let item in mkmlCommon) {
      if (item !== 'apiUtils') {
        Vue.prototype[item] = mkmlCommon[item].default
      }
    }
  }
}
