class Network {
  online = navigator.onLine || true
  connectionType = ''

  init (onlineCallBack, offlineCallBack) {
    document.addEventListener('online', this.handleOnline.bind(this, onlineCallBack), false);
    document.addEventListener('offline', this.handleOffline.bind(this, offlineCallBack), false);
  }

  getOnline = () => {
    return this.online
  }

  /* 在线 */
  handleOnline = cb => {
    this.online = true
    this.connectionType = navigator.connection.type
    cb()
  }

  /* 离线 */
  handleOffline = cb => {
    this.online = false
    this.connectionType = navigator.connection.type
    cb()
  }

  /* 销毁实例 */
  destroy = () => {
    document.removeEventListener('online', this.handleOnline)
    document.removeEventListener('offline', this.handleOffline)
    console.log('clear Network!')
  }
}

export default new Network()
