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
  })
}

distance()