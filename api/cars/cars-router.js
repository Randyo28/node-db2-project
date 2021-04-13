const express = require('express')
const cars = require('./cars-model')
const { checkCarId } = require('./cars-middleware')

const router = express.Router()

router.get('/', (req, res) => {
  cars.getAll().then((car) => {
    res.json(car)
  })
})
router.get('/:id', checkCarId, (req, res) => {
  res.json(req.car)
})
router.post('/', (req, res) => {
  res.json({ message: 'Hey Post' })
})

module.exports = router
