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
router.post('/', (req, res, next) => {
  const newCar = req.body

  cars
    .create(newCar)
    .then((car) => {
      res.status(201).json(car)
    })
    .catch((err) => {
      next(err)
    })
})

router.use((req, res, err, next) => {
  res.status(500).json({
    customMessage: 'Something went wrong',
    message: err.message,
  })
})

module.exports = router
