const Schema = require('mongoose').Schema

const ListingsSchema = new Schema({
  URL: {
    type: String,
    default: 'HomeAway@homeaway.com'
  },
  ListDate: {
    type: String,
    default: '9/1/2018'
  },
  Rate: {
    type: String,
    default: '$70'
  },
  Promotions: {
    type: String,
    default: 'Stay for a 6 nights and the 7th night is free.'
  }
})

const LocationsSchema = new Schema({
  Address: String,
  Beds: String,
  Baths: String,
  Description: String,
  Listing: [ListingsSchema],
})

module.exports = {
  ListingsSchema,
  LocationsSchema,
}