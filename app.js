const got = require('got')
const geolib = require('geolib')

const delay = 5
const url = 'http://api.open-notify.org/iss-now.json'
// Baton Rouge, LA
const myPosition = {
  latitude: 30.4515,
  longitude: -91.1871
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
