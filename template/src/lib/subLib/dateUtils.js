const dateformat = require('dateformat-util')
/**
 *
 * date对象格式化方法
 * @param {*} now 当前时间或 new Date(时间戳)
 * @param {*} mask 格式化类型
 * @returns 格式化后的日期str
 */
const formatDate = (now, mask = 'yyyy-MM-dd hh:mm:ss') => {
  return dateformat.format(now, mask)
}

export default{
  formatDate
}
