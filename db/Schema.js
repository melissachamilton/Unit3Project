const Schema = require('mongoose').Schema

const ListingsSchema = new Schema({
  URL: {
    type: String,
    default: 'HomeAway@homeaway.com'
  },
  Promotions: {
    type: String,
    default: 'Stay for a 6 nights and the 7th night is free.'
  }
})

const LocationsSchema = new Schema({
  Address: String,
  Beds: String,
  Listing: [ListingsSchema],
})

module.exports = {
  ListingsSchema,
  LocationsSchema,
}