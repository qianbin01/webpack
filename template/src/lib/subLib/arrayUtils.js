/**
 *
 * 判断是否为数组
 * @param {*} arr 需要判断的数据
 * @returns boolean 是否为数组
 *
 */
const isArray = arr => {
  return Array.isArray(arr)
}

/**
 *
 * 数组去重
 * @param {*} arr 数组
 * @returns 去重后数组
 *
 */
const removeRepeat = arr => {
  return Array.from(new Set(arr))
}

/**
 *
 * 随机选取数组中的元素
 * @param {*} arr 数组
 * @returns 随机元素
 *
 */
const arrayRandomOne = arr => {
  return arr[Math.floor(Math.random() * arr.length)]
}

/**
 *
 * 数组chunk化
 * @param {*} arr 数组
 * @param {*} chunkNum 每个chunk最大的容量
 * @returns 各个chunk的数组
 *
 */
const chunkArray = (arr, chunkNum) => {
  if (!Array.isArray(arr)) throw new TypeError('Must provide a valid array')
  let i, chunks
  i = 0
  chunks = []
  while (i < arr.length) {
    chunks.push(arr.slice(i, (i += chunkNum)))
  }

  return chunks
}

/**
 *
 * 数组深拷贝，互相改变不影响
 * @param {*} arr 需要拷贝的数组
 * @returns 结果数组
 *
 */
const copyArray = arr => {
  return JSON.parse(JSON.stringify(arr))
}

/**
 *
 * 合并两个数组
 * @param {*} arr 老数组
 * @param {*} newArr 新数组
 * @returns 合并后的数组
 *
 */
const mergeTwoArray = (arr, newArr) => {
  return [...arr, ...newArr]
}

/**
 *
 * 根据key对array进行排序
 * @param {*} arr 需要排列的数组
 * @param {*} key 根据key排列
 * @param {boolean} [desc=true] 默认倒序
 * @returns 排序后的数组
 *
 */
const arraySortByKey = (arr, key, desc = true) => {
  return desc
    ? arr.sort((a, b) => {
        return a[key] < b[key]
      })
    : arr.sort((a, b) => {
        return a[key] >= b[key]
      })
}

/**
 *
 * 根据key删除元素
 * @param {*} arr 需要删除元素的数组
 * @param {*} key  根据的key
 * @param {*} value 匹配的value
 *
 */
const deleteItemByKey = (arr, key, value) => {
  arr.forEach((item, i) => {
    if (item[key] === value) {
      arr.splice(i, 1)
    }
  })
}

/**
 *
 *  根据某属性查找对象数组中的某对象
 * @param {*} arr 待查找的数组
 * @param {*} key 根据的属性
 * @param {*} value 根据的值
 * @param {boolean} [type=true] 默认返回该对象
 *
 */
const findItemByKey = (arr, key, value, type = true) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return type ? arr[i] : i
    }
  }
  return null
}

export default {
  isArray,
  removeRepeat,
  arrayRandomOne,
  chunkArray,
  copyArray,
  mergeTwoArray,
  arraySortByKey,
  deleteItemByKey,
  findItemByKey
}
