const router = require('express').Router({ mergeParams: true })
const { Locations, Listings } = require('../db/model')

router.post('/', (req, res) => {
  const newListing = new Listing ()
  Locations.findById(req.params.locationId)
    .then((location) => {
      location.listing.push(newListing)
      return location.save()
    })
    .then((location) => {
      res.send(location)
    })
})

router.delete('/:id', (req, res) => {
  Location.findById(req.params.locationId)
    .then(location=> {
      return location.update({ $pull: { listing: { _id: req.params.id } } })
    })
    .then(location => {
      res.send(location)
    })
})
router.put('/:id', (req, res) => {
  Location.findById(req.params.locationId)
    .then(location => {
      const listing = location.listing.id(req.params.id)
      const updatedListing = req.body

      if (updatedListing.title) {
        listing.title = updatedListing.title
      }

      if (updatedListing.description) {
        listing.description = updatedListing.description
      }

      return location.save()
    })
    .then(location => {
      res.send(location)
    })
})

module.exports = router
