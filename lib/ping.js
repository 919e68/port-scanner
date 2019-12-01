const os = require('os')
const spawn = require('child_process').spawn

const ting = (ip, tries = 1) => {
  return new Promise((resolve, reject) => {
    try {
      const platform = os.platform()
      let pingArgs = [ip]
      let countFlag = '-w'

      if (platform == 'win32') {
        countFlag = '-n'
      } else if (platform == 'darwin') {
        countFlag = '-c'
      }

      pingArgs = pingArgs.concat([countFlag, tries])

      const ping = spawn('ping', pingArgs)
      let result = false
      let data = ''

      ping.stdout.on('data', (buffer) => {
        data += buffer.toString().toLowerCase()
      })

      ping.stdout.on('end', () => {
        if (data.indexOf('100% loss') != -1 || data.indexOf('100% packet loss') != -1) {
          result = false
        } else if (data.indexOf('0% loss') != -1 || data.indexOf('0% packet loss') != -1) {
          result = true
        }

        ping.kill()
        resolve(result)
      })

    } catch (err) {
      reject(err)
    }
  })
}

module.exports = ting
