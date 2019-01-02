/**
 * 去除字符串中空格
 * @param {*} str 输入字符串
 * @param {*} type 1-所有空格  2-前后空格  3-前空格 4-后空格
 * @returns 输出字符串
 */
const trimStr = (str, type = 1) => {
  switch (type) {
    case 1:
      return str.replace(/\s+/g, '')
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, '')
    case 3:
      return str.replace(/(^\s*)/g, '')
    case 4:
      return str.replace(/(\s*$)/g, '')
    default:
      return str
  }
}

/**
 *
 * 文本过长，截断并添加省略号
 * @param {*} str 文本
 * @param {*} size 最大字符数
 * @returns 符合条件的文本
 *
 */
const shortText = (str, size) => {
  return str.length > size ? str.substring(0, size) + '...' : str
}

/**
 *
 * 生成随机字符串
 * @param {*} size 生成几位
 * @param {string} [type='str'] 默认返回只有字符串
 * @returns 返回随机生成的字符串
 *
 */
const generateRandomStr = (size, type = 'str') => {
  let str = ''
  let baseStr = ''
  if (type === 'str') {
    baseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  } else if (type === 'number') {
    baseStr = '0123456789'
  } else {
    baseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  }
  for (let i = 0; i < size; i++) {
    str += baseStr.charAt(Math.floor(Math.random() * baseStr.length))
  }
  return str
}

export default {
  trimStr,
  shortText,
  generateRandomStr
}
