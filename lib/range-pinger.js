const ping = require('./ping')

class RangePinger {
  constructor(firstIp, secondIp, isSync = false) {
    this.hasMask = firstIp.indexOf('/') != -1 ? true : false
    this.firstIp = firstIp
    this.secondIp = secondIp
    this.events = []

  }

  ping() {
    let total = 0
    if (this.hasMask) {
      total
    }

  }

  ipNumValue(ip) {
    let value = null

    if (this.validIp(ip)) {
      let ipArr = ip.split('.')
      for (let i = ipArr.length; i > 0; i--) {
        if (!value) {
          value = 1 * (parseInt(ipArr[i-1]) + 1)
        } else {
          value = value * (parseInt(ipArr[i-1]) + 1)
        }
      }
    }

    return value
  }

  validIp(ip) {
    let result = false
    let ipArr = ip.split('.')

    if (ipArr.length == 4) {
      let validSub = 0

      for (let i = 0; i < ipArr.length; i++) {
        if (isNaN(ipArr[i])) {
          result = false
          break

        } else if (ipArr[i] > 255) {
          result = false
          break

        } else if (ipArr[i] < 0) {
          result = false
          break
        }
      }
    }

    return result
  }

  on(name, callback) {
    this.events[name] = callback
  }
}

module.exports = RangePinger