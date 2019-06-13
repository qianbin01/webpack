/*
 * @Author: qb
 * @Date: 2019-01-28 16:18:25
 * @Last Modified by: qb
 * @Last Modified time: 2019-06-13 15:24:30
 */

/**
 *
 *  获取路径中的参数值
 * @param {*} url 路径
 * @param {*} name 需要获取的参数名
 * @returns
 */
const getQueryString = (url, name) => {
  return (
    decodeURIComponent(
      (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url) || [
        '',
        ''
      ])[1].replace(/\+/g, '%20')
    ) || null
  )
}

export default {
  getQueryString
}
