const router = require('express').Router()
const { Locations } = require('../db/model')

// Show All
router.get('/', async (req, res) => {
  const Locations = await Locations.find()
  res.send(Locations)
})

// Show One
router.get('/:id', async (req, res) => {
  const Locations = await Locations.findById(req.params.id)
  res.send(Locations)
})

// Create
router.post('/', async (req, res) => {
  const Locations = await Locations.create(req.body)
  res.send(Locations)
})

// Update
router.put('/:id', async (req, res) => {
  const Locations = await Locations.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.send(Locations)
})

// Delete
router.delete('/:id', async (req, res) => {
  await User.findByIdAndRemove(req.params.id)
  res.sendStatus(200)
})


module.exports = router
