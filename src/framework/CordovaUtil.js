export class CordovaUtil {
  constructor () {
    this.deviceIsReady = false
  }
  /* 插入cordova */
  injectCordovaJs () {
    const head = document.getElementsByTagName('head')[0]
    const script = document.createElement('script')
    script.src = '//uhome.haier.net:7900/saasapp/cordova/cordova.js'
    head.appendChild(script)
  }

  /* deviceready监听*/
  initDeviceReady () {
    return new Promise(resolve => {
      if (this.deviceIsReady) {
        resolve(true)
      } else {
        document.addEventListener('deviceready', () =>{
          this.deviceIsReady = true
          resolve(true)
        }, false)
      }
    })
  }

  /* 总的初始化 */
  init () {
    this.injectCordovaJs()
    return this.initDeviceReady()
  }

  /* 重新加载容器 */
  reload () {
    const upcore= cordova.require('uphybrid-plugin-core.upcore')
    return upcore.reloadH5ContainerContent()
  }
}

export default new CordovaUtil()
