/*
 * @Author: qb
 * @Date: 2019-01-02 11:20:14
 * @Last Modified by: qb
 * @Last Modified time: 2019-01-02 14:15:05
 */

import config from '../config'
import mkmlCommon from '../lib/mkml_common'
import logManager from '../log/logManager'
export default {
  install (Vue) {
    let HttpMethod = mkmlCommon.apiUtils.default
    let LogManager = logManager.getInstance(config.LOG_URL)
    let ApiManager = HttpMethod.getInstance(config.BASE_URL)
    Vue.prototype.$ApiManager = ApiManager
    Vue.prototype.$LogManager = LogManager
    for (let item in mkmlCommon) {
      if (item !== 'apiUtils') {
        Vue.prototype[item] = mkmlCommon[item].default
      }
    }
  }
}
