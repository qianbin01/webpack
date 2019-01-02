/**
 *
 * json 封装的 localstorage 方法可存储任意类型
 * @param {*} name
 * @param {*} value
 */
const setStore = (key, value) => {
  if (!key) return
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
 *
 * 获取 localstorage
 * @param {*} key
 * @returns
 */
const getStore = key => {
  if (!key) return
  return window.localStorage.getItem(key)
}

/**
 *
 * 根据 key 删除 localstorage
 * @param {*} key
 */
const removeStore = key => {
  if (!key) return
  window.localStorage.removeItem(key)
}

//session用法同上
const setSession = (key, value) => {
  if (!key) return
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  window.sessionStorage.setItem(key, value)
}
const getSession = key => {
  if (!key) return
  return window.sessionStorage.getItem(key)
}
const removeSession = key => {
  if (!key) return
  window.sessionStorage.removeItem(key)
}

export default {
  setStore,
  getStore,
  removeStore,
  setSession,
  getSession,
  removeSession
}
