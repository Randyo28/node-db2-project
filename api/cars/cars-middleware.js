const cars = require('./cars-model')
var vinValidator = require('vin-validator')

const checkCarId = (req, res, next) => {
  const { id } = req.params
  cars
    .getById(id)
    .then((car) => {
      if (car) {
        req.car = car
        next()
      } else {
        res.status(404).json({ message: `car with id ${id} is not found` })
      }
    })
    .catch((err) => {
      next(err)
    })
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body

  if (!vin) {
    res.status(400).json({ message: `Vin is missing` })
  } else if (!make) {
    res.status(400).json({ message: `Make is missing` })
  } else if (!model) {
    res.status(400).json({ message: `Model is missing` })
  } else if (!mileage) {
    res.status(400).json({ message: `Mileage is missing` })
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  const { vin } = req.body

  if (vinValidator.validate(vin)) {
    next()
  } else {
    res.status(400).json({ message: 'vin <vin number> is invalid' })
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  const { vin } = req.body

  const car = await cars.getByVin(vin)
  if (car) {
    res.status(400).json({ message: 'vin <vin number> already exists' })
  } else {
    next()
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}
