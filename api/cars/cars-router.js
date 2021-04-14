const express = require('express')
const cars = require('./cars-model')
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require('./cars-middleware')

const router = express.Router()

router.get('/', (req, res) => {
  cars.getAll().then((car) => {
    res.json(car)
  })
})

router.get('/:id', checkCarId, (req, res) => {
  res.json(req.car)
})

router.post(
  '/',
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  (req, res, next) => {
    const newCar = req.body

    cars
      .create(newCar)
      .then(() => {
        res.status(201).json(newCar)
      })
      .catch((err) => {
        next(err)
      })
  }
)

router.use((req, res, err, next) => {
  res.status(500).json({
    message: 'Something went wrong',
    errMessage: err.message,
  })
})

module.exports = router
