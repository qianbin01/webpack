/**
 *
 * 判断是否为手机
 * @returns boolean
 */
const isPhone = () => {
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
}

/**
 *
 *  根据 host 替换 oss 的 host
 * @param {*} src oss路径
 * @returns 替换后的路径
 */
const changeOSSByHost = src => {
  if (!src) return ''
  if (src.includes('https://') && window.location.protocol.includes('https')) {
    return src
  }
  return src.replace('http://', `${window.location.protocol}//`)
}

/**
 *
 * 获取cookie
 * @param {*} key 键
 * @returns
 */
const getCookie = key => {
  let arr = ''
  let reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)')
  if ((arr = document.cookie.match(reg))) return arr[2]
  else return null
}

/**
 *
 * 设置cookie
 * @param {*} key 键
 * @param {*} value 值
 * @param {*} expireDays 过期时间（以天计算）
 */
const setCookie = (key, value, expireDays) => {
  const expireDate = new Date()
  expireDate.setDate(expireDate.getDate() + expireDays)
  document.cookie =
    key +
    '=' +
    escape(value) +
    (expireDays == null ? '' : ';expires=' + expireDate.toGMTString())
}

/**
 *
 * 删除cookie
 * @param {*} key 键
 */
const delCookie = key => {
  const expireDate = new Date()
  expireDate.setTime(expireDate.getTime() - 1)
  const cookieValue = getCookie(key)
  if (cookieValue != null) {
    document.cookie =
      key + '=' + cookieValue + ';expires=' + expireDate.toGMTString()
  }
}
export default {
  isPhone,
  changeOSSByHost,
  getCookie,
  setCookie,
  delCookie
}
