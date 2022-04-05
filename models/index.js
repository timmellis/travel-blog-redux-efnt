const { model } = require('mongoose')
const LocationSchema = require('./locations')

const Locations = model('locations', LocationSchema)

module.exports = {
    Locations
}