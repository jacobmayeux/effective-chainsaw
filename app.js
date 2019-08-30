const got = require('got')
const geolib = require('geolib')

const delay = 10
const url = 'https://api.open-notify.org/iss-now.json'
const myPosition = {
  latitude: 30.2077,
  longitude: -92.0656
}

function loop() {
  got(url, { json: true })
    .then(iss => {
      const position = iss.body.iss_position
      const distanceFromIss = geolib.getDistance(myPosition, position)
      const distanceFromIssMiles = geolib.convertDistance(distanceFromIss, 'mi')

      console.log(`${distanceFromIssMiles} miles`)
    })
    .catch((err) => {
      console.log(err.response.body)
    }
  )
  setTimeout(loop, delay * 1000)
}

loop()