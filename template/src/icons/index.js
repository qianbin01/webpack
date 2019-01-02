/*
 * @Author: qb
 * @Date: 2018-12-25 15:50:25
 * @Last Modified by: qb
 * @Last Modified time: 2018-12-25 15:50:50
 */

import Vue from 'vue'
import SvgIcon from '../components/SvgIcon' // svg组件
// register globally
Vue.component('svg-icon', SvgIcon)
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
