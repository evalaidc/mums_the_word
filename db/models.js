// pulling mongoose and the connection to db from connection.js file
const mongoose = require('./connection.js')

const SpotSchema = new mongoose.Schema({
  photo_url: String,
  title: String,
  blurb: String,
  author: String

})

const LocationSchema = new mongoose.Schema({
  Name: String,
  Longitude: Number,
  Latitude: Number
})

const Spot = mongoose.model('Spot', SpotSchema)


module.export = {
  Spot,
  Location
}
