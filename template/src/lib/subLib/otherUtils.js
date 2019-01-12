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
 * 上滑加载更多
 * @param {*} dom 需要监听的dom
 * @param {*} minPx 距离底部最小像素值时
 * @param {*} fn  数据添加的具体函数
 */
const scrollMore = (dom, minPx, fn) => {
  let scrollTop = dom.scrollTop
  let height = dom.clientHeight
  let scrollHeight = dom.scrollHeight
  if (scrollTop + height >= scrollHeight - minPx) {
    fn()
  }
}

/**
 *
 * 消抖封装函数（短时间内多次执行归并到一段时间后再执行1次）
 * @param {*} fn 需要消抖的函数
 * @param {*} wait 等待时间
 * @param {*} timeout 已存在的消抖定时器
 *
 */
const debounce = (fn, wait, timeout = null) => {
  return function () {
    if (timeout !== null) clearTimeout(timeout)
    timeout = setTimeout(fn, wait)
  }
}

/**
 *
 * 节流封装函数，一段时间内 只执行一次
 * @param {*} fn 实际需要调用的次数
 * @param {*} wait 每次执行间隔  单位毫秒
 *
 */
const throttle = (fn, wait) => {
  let lastTime = null
  let timeout
  return function () {
    let context = this
    let now = new Date()
    // 如果上次执行的时间和这次触发的时间大于一个执行周期，则执行
    if (now - lastTime - wait > 0) {
      // 如果之前有了定时任务则清除
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      fn.apply(context, arguments)
      lastTime = now
    } else if (!timeout) {
      timeout = setTimeout(() => {
        // 改变执行上下文环境
        fn.apply(context, arguments)
      }, wait)
    }
  }
}

/**
 *
 * 模拟休眠函数
 * @param {*} time 休眠时长 单位毫秒
 */
const sleep = time => {
  var start = new Date().getTime()
  while (true) {
    if (new Date().getTime() - start > time) {
      break
    }
  }
}

/**
 *
 * 返回范围内的随机值
 * @param {*} max 最大值
 * @param {*} min 最小值
 * @returns 随机值
 */
const areaRandom = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 *
 * 倒计时 常用于获取验证码
 * @param {*} flag 倒计时是否已开始，控制函数多次执行或页面渲染，vue中需要传同一个
 * @param {*} fn 倒计时结束后执行的函数
 * @param {number} [begin=60] 执行开始秒数
 * @param {number} [end=0] 终止秒数
 * @param {number} [step=1] 每几秒显示一次
 */
const countDown = (flag, fn, begin = 60, end = 0, step = 1) => {
  if (flag) return
  flag = true;
  const start = begin
  const interVal = setInterval(() => {
    begin = begin - step
    console.log(begin)
    if (begin <= end) {
      clearInterval(interVal)
      begin = start
      flag = false
      fn()
    }
  }, step * 1000);
}
/**
 *
 * 压缩图片
 * @param {*} path 图片路径
 * @param {*} callback  压缩完的bas4图片
 * @param {number} [quality=1] 压缩质量
 */
const compressImage = (path, callback, quality = 1) => {
  let img = new Image();
  img.src = path;
  img.onload = function () {
    //默认按比例压缩
    if (this.width < 120) {
      callback(path);
    }
    let scale = this.height / this.width;
    let w = this.width / 20;
    if (w < 120) {
      w = 120
    }
    let h = w * scale;
    //生成canvas
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    // 创建属性节点
    canvas.setAttribute("width", w);
    canvas.setAttribute("height", h);
    ctx.drawImage(this, 0, 0, w, h);
    let base64Data = canvas.toDataURL('image/jpeg', quality);
    callback(base64Data);
    // quality值越小，所绘制出的图像越模糊
  };
}
/**
 *
 * base64转Blob(图片)  常用于上传
 * @param {*} base64 待转的bae64对象
 * @returns Blob 对象
 */
const convertBase64ToBlob = (base64) => {
  let base64Arr = base64.split(',');
  let imgType = '';
  let base64String = '';
  if (base64Arr.length > 1) {
    base64String = base64Arr[1];
    imgType = base64Arr[0].substring(base64Arr[0].indexOf(':') + 1, base64Arr[0].indexOf(';'));
  }
  let bytes = atob(base64String);
  let bytesCode = new ArrayBuffer(bytes.length);
  let byteArray = new Uint8Array(bytesCode);
  for (let i = 0; i < bytes.length; i++) {
    byteArray[i] = bytes.charCodeAt(i);
  }
  return new Blob([bytesCode], {
    type: imgType
  });
};

export default {
  areaRandom,
  sleep,
  debounce,
  throttle,
  scrollMore,
  isPhone,
  countDown,
  compressImage,
  convertBase64ToBlob
}
