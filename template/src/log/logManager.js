const axios = require('axios')

class LogManager {
  /**
   *Creates an instance of HttpMethod.
   * @param {*} LOG_URL 日志记录接口
   * @param {*} uid 当前用户id
   * @param {boolean} [withCredentials=false] 是否允许cookie跨域
   * @memberof HttpMethod
   */
  constructor (LOG_URL, uid, withCredentials = false) {
    this.axios = axios
    this.axios.defaults.withCredentials = withCredentials
    this.axios.defaults.timeout = 3000
    this.axios.defaults.headers['Content-Type'] =
      'application/json;charset=UTF-8'
    this.axios.defaults.headers['Accept'] = 'application/json, text/plain, */*'
    this.LOG_URL = LOG_URL
    this.uid = uid
  }
  /**
   *
   * 单例模式静态出口
   * @static
   * @param {*} LOG_URL 日志记录接口
   * @param {*} uid 当前用户id
   * @param {boolean} [withCredentials=false] 是否允许cookie跨域
   * @returns
   * @memberof LogManager
   */
  static getInstance (LOG_URL, uid, withCredentials = false) {
    if (!this.instance) {
      this.instance = new LogManager(LOG_URL, uid, withCredentials)
    }
    return this.instance
  }
  /**
   *
   * 简单日志记录
   * @param {*} targetId 被采集数据的id
   * @param {*} action 用户行为
   * @memberof LogManager
   */
  simpleLogToServer (targetId, action) {
    this.axios
      .post(this.LOG_URL, {
        uid: this.uid,
        targetId,
        action
      })
      .then(() => console.log('传输log成功'))
      .catch(e => console.log(e))
  }
  /**
   *
   * 阶段性行为日志记录
   * @param {*} targetId 被采集数据的id
   * @param {*} action 用户行为
   * @param {*} duration 持续时长
   * @memberof LogManager
   */
  durationLogToServer (targetId, action, duration) {
    this.axios
      .post(this.LOG_URL, {
        uid: this.uid,
        targetId,
        action,
        duration
      })
      .then(() => console.log('传输log成功'))
      .catch(e => console.log(e))
  }
}

export default LogManager
