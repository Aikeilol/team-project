const PERMISSION_GRANTED = 'granted'

export class Notifications {
  supported = false
  granted = false

  constructor() {
    if (window && 'Notification' in window) {
      this.supported = true
    }
    console.log('Notifications', this, this.supported)
  }

  sendNotification = async (msg: string) => {
    if (!this.supported) {
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
        console.log('requestPermission', permission)
        this.granted = permission === PERMISSION_GRANTED
      })
      .catch(() => {
        this.granted = false
      })
  }
}
