const router = require('express').Router()
const { Locations } = require('../db/model')

// Show All
router.get('/', async (req, res) => {
  const locals = await Locations.find()
  res.send(locals)
})

// Show One
router.get('/:id', async (req, res) => {
  const locals = await Locations.findById(req.params.id)
  res.send(locals)
})

// Create
router.post('/', async (req, res) => {
  const local = await Locations.create(req.body)
  res.send(local)
})

// Update
router.put('/:id', async (req, res) => {
  const saveUpdatedDesc = await SingleLocal.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.send(saveUpdatedDesc)
})

// Delete
router.delete('/:id', async (req, res) => {
  await Locations.findByIdAndRemove(req.params.id)
  res.sendStatus(200)
})


module.exports = router
