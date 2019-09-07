const http = require('http')
const port = 3000
const server = http.createServer()

const makeServer = (distance) => {
  server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write(distance)
    res.end()
  }).listen(port, () => {
    console.log(`Node server created on port ${port}`)
  })
}

const distance = async () => {
  const issTracker = await require('./issTrack')
  return await issTracker.getDistance.then((res) => {
    console.log(`res2: ${res}`)
    makeServer(res)
    // return res
  })
}

distance()









// let realDistance = async () => {
//   return await distance().then((res) => { 
//     console.log(`res1: ${res}`)
//     return res 
//   })
// }
// realDistance()



// const issTracker = require('./issTrack')

// console.log(issTracker())

// const getIss = async () => {
//   return await issTracker().getDistance
// }

// let distance = await getIss()
// console.log(distance)

// console.log(getIss())

// getIss()
// .then((res) => {
//   console.log(res)
// })


    // .then((res) => {
    //   console.log(res)
    // })
    // .catch((err) => {
    //   console.log(err)
    // })

// console.log(distance())




// const realDistance = await distance()

// let realDistance = async () => {
//   return await distance()
//   .then((res) => { 
//     console.log(`res2: ${res}`)
//   })
// }

// console.log(`realDistance: ${realDistance()}`)

// .then((res) => {
//   console.log(res)
// })