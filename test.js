// const fs = require('fs')
// const Pinger = require('ping-subnet')
// const scanPorts = require('./lib/scan-ports')

// const SCAN_PORTS = [21, 22, 23, 80, 443, 8080, 8000, 7000]

// const mainIp = '172.20.15.0' // change ip here

// const ipSub = mainIp.split('.')
// const scanSub = parseInt(process.argv[2])

// const ipStart = `${ipSub[0]}.${ipSub[1]}.${scanSub}.0`
// const ipEnd   = `${ipSub[0]}.${ipSub[1]}.${scanSub}.255`
// const ranges  = [`${ipStart}-${ipEnd}`]

// const pinger = new Pinger(ranges)

// pinger.on('host:alive', async (ip) => {
//   await scanPorts(ip, SCAN_PORTS).then(ipPorts => {
//     const lineMsg = `alive: ${ip} - ${ipPorts.length > 0 ?  ipPorts.join('|') : ''}`
//     // fs.appendFileSync('./outputs/alive-ips.txt', `${lineMsg}\n`)
//     console.log(lineMsg)
//   })
// })

// pinger.once('ping:end', () => {
//   console.log('ping completed!')
// })

// pinger.ping()

const { ping } = require('./index')

ping('90.90.90.90').then(ok => {
  console.log(ok)
})
