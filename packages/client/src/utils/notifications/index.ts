const PERMISSION_GRANTED = 'granted'

export class Notifications {
  granted = false

  isSupported = () => {
    if ('Notification' in window) {
      return true
    }

    return false
  }

  sendNotification = async (msg: string) => {
    if (!this.isSupported) {
      return
    }

    if (!this.granted) {
      await this.requestPermission()
    }

    if (this.granted) {
      new Notification(msg)
    }
  }

  requestPermission = () => {
    return Notification.requestPermission()
      .then(permission => {
        this.granted = permission === PERMISSION_GRANTED
      })
      .catch(() => {
        this.granted = false
      })
  }
}
