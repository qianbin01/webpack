/*
 * @Author: qb
 * @Date: 2018-12-25 16:42:03
 * @Last Modified by: qb
 * @Last Modified time: 2019-06-13 14:36:31
 */
let BASE_URL = ''
const host = window.location.host
const protocol = window.location.protocol
const BASE_URL_MAP = {
  localhost: '', // 开发环境
  develop: '', // 开发环境
  test: '', // 测试环境
  release: '', // 预发布环境
  wheat: '' // 生产环境
}
for (let [key, value] of Object.entries(BASE_URL_MAP)) {
  if (host.includes(key)) {
    BASE_URL = `${protocol}//${value}`
    break
  }
}
export default {
  BASE_URL
}