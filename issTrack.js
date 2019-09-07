const got = require('got')
const geolib = require('geolib')

const url = 'http://api.open-notify.org/iss-now.json'
const myPosition = {
  latitude: 30.2077,
  longitude: -92.0656
}

const getDistance = async () => {
  let distance = got(url, { json: true })
  .then((iss) => {
    const position = iss.body.iss_position
    const distanceFromIss = geolib.getDistance(myPosition, position)
    const distanceFromIssMiles = geolib.convertDistance(distanceFromIss, 'mi')

    return `${distanceFromIssMiles} miles`
  })
  .catch((err) => {
    console.log(err.response.body)
  })

  return await distance
}

module.exports.getDistance = getDistance()