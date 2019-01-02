/*
 * @Author: qb
 * @Date: 2018-12-25 16:34:13
 * @Last Modified by: qb
 * @Last Modified time: 2019-01-02 10:47:51
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import common from './modules/common'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    common
  },
  getters
})
export default store
