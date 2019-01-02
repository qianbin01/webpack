const axios = require('axios')
class HttpMethod {
  /**
   *Creates an instance of HttpMethod.
   * @param {*} BASE_URL 根路由
   * @param {*} [tokenObj={}]  验证头信息
   * @param {boolean} [withCredentials=false] 是否允许cookie跨域
   * @memberof HttpMethod
   */
  constructor(BASE_URL, tokenObj = {}, withCredentials = false) {
    this.axios = axios
    this.axios.defaults.baseURL = BASE_URL
    this.axios.defaults.withCredentials = withCredentials
    this.axios.defaults.timeout = 3000
    this.tokenObj = tokenObj
    this.axios.defaults.headers['Content-Type'] =
      'application/json;charset=UTF-8'
    this.axios.defaults.headers['Accept'] = 'application/json, text/plain, */*'
  }
  /**
   *
   * 单例模式出口
   * @static 
   * @param {*} BASE_URL
   * @param {*} [tokenObj={}]
   * @param {boolean} [withCredentials=false]
   * @returns
   * @memberof HttpMethod
   */
  static getInstance(BASE_URL, tokenObj = {}, withCredentials = false) {
    if (!this.instance) {
      this.instance = new HttpMethod(BASE_URL, tokenObj, withCredentials)
    }
    return this.instance
  }
  /**
   *
   * 设置请求头token
   * @param {*} tokenObj  token对象
   * @memberof HttpMethod
   */
  setToken(tokenObj) {
    this.tokenObj = tokenObj
  }
  /**
   *
   * 内部方法 让 get方法传参和 post一样
   * @param {*} param  对象传参
   * @returns
   * @memberof HttpMethod
   */
  _changeParam(param) {
    return param ?
      JSON.stringify(param)
      .replace(/:/g, '=')
      .replace(/,/g, '&')
      .replace(/{/g, '?')
      .replace(/}/g, '')
      .replace(/"/g, '') :
      ''
  }
  /**
   *
   * get 请求
   * @param {*} url 路径
   * @param {*} param 参数
   * @param {boolean} [withToken=true] 是否需要验证
   * @returns promise 链式调用，不需要再传回调参数
   * @memberof HttpMethod
   */
  get(url, param, withToken = true) {
    return new Promise((resolve, reject) => {
      this.axios
        .get(`${url}${this._changeParam(param)}`, {
          headers: withToken ? this.tokenObj : ''
        })
        .then(res => resolve(res))
        .catch(e => {
          if (e.response.status === 401 || e.response.status === 403) {
            console.log('接口权限不足') //这里替换成接口权限不足的各种逻辑
          } else {
            reject(e)
          }
        })
    })
  }
  /**
   *
   * json方式的 post 请求
   * @param {*} url 路径
   * @param {*} param 参数
   * @param {boolean} [withToken=true] 是否需要验证
   * @returns promise 链式调用，不需要再传回调参数
   * @memberof HttpMethod
   */
  jsonPost(url, param, withToken = true) {
    return new Promise((resolve, reject) => {
      this.axios
        .post(url, param, {
          headers: withToken ? this.tokenObj : ''
        })
        .then(res => resolve(res))
        .catch(e => {
          if (e.response.status === 401 || e.response.status === 403) {
            console.log('接口权限不足') //这里替换成接口权限不足的各种逻辑
          } else {
            reject(e)
          }
        })
    })
  }
  /**
   *
   * 上传用的post
   * @param {*} url 路径
   * @param {*} param 参数
   * @param {boolean} [withToken=true] 是否需要验证
   * @returns promise 链式调用，不需要再传回调参数
   * @memberof HttpMethod
   */
  formUploadPost(url, param, withToken = true) {
    let formData = new FormData()
    for (let item in param) {
      formData.append(item, data[item])
    }
    let headers = {
      'Content-Type': 'multipart/form-data'
    }
    if (withToken) {
      for (let key of this.tokenObj) {
        headers.key = this.tokenObj[key]
      }
    }
    return new Promise((resolve, reject) => {
      this.axios
        .post(url, formData, {
          headers
        })
        .then(res => resolve(res))
        .catch(e => {
          if (e.response.status === 401 || e.response.status === 403) {
            console.log('接口权限不足') //这里替换成接口权限不足的各种逻辑
          } else {
            reject(e)
          }
        })
    })
  }
}
export default HttpMethod