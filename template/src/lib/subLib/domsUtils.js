/**
 *
 * 获取dom节点的样式值
 * @param {*} element 节点
 * @param {*} attr 属性
 * @param {string} [NumberMode='int'] 是否需要小数，可选值为int与float
 * @returns 样式值
 */
const getStyle = (element, attr, NumberMode = 'int') => {
  let target
  // scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
  if (attr === 'scrollTop') {
    target = element.scrollTop
  } else if (element.currentStyle) {
    target = element.currentStyle[attr]
  } else {
    target = document.defaultView.getComputedStyle(element, null)[attr]
  }
  //在获取 opactiy 时需要获取小数 parseFloat
  return NumberMode === 'float' ? parseFloat(target) : parseInt(target)
}

/**
 *
 * 模拟jquery$选择器
 * @param {*} selector 模拟jquery的选择器
 * @returns
 */
const $ = selector => {
  let type = selector.substring(0, 1)
  if (type === '#') {
    if (document.querySelector) return document.querySelector(selector)
    return document.getElementById(selector.substring(1))
  } else if (type === '.') {
    if (document.querySelectorAll) return document.querySelectorAll(selector)
    return document.getElementsByClassName(selector.substring(1))
  } else {
    return document[
      'querySelectorAll' ? 'querySelectorAll' : 'getElementsByTagName'
    ](selector)
  }
}

export default {
  getStyle,
  $
}
