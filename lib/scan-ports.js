const isopen = require("isopen")

const scanPorts = (ip, ports) => {
  return new Promise((resolve, reject) => {
    isopen(ip, ports, res => {
      const openPorts = []

      for (let i in res) {
        const port = res[i]
        if (port.isOpen) {
          openPorts.push(port.port)
        }
      }

      resolve(openPorts)
    })
  })
}

module.exports = scanPorts