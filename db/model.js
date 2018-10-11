const mongoose = require('mongoose')
const { ListingsSchema, LocationsSchema } = require('./schema')

const LocationsModel = mongoose.model('Location', LocationsSchema)
const ListingsModel = mongoose.model('Listing', ListingsSchema)

module.exports = {
  Locations: LocationsModel,
  Listings: ListingsModel,
}