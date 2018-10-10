const Schema = require('mongoose').Schema

const ListingsSchema = new Schema({
  website: {
    type: String
  }
  url: {
    type: String,
    default: 'HomeAway@homeaway.com'
  },
  listDate: {
    type: String,
    default: '9/1/2018'
  },
  rate: {
    type: String,
    default: '$70'
  },
  promotions: {
    type: String,
    default: 'Stay for a 6 nights and the 7th night is free.'
  }
})

const LocationsSchema = new Schema({
  address: String,
  beds: String,
  baths: String,
  description: String,
  listings: [ListingsSchema],
})

module.exports = {
  ListingsSchema,
  LocationsSchema,
}