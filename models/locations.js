const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Locations = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  likes: { type: Number, required: true },
  details: { type: String, required: true },
  image: { type: String, required: true }
})
module.exports = Locations
