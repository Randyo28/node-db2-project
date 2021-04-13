const cars = require('./cars-model')

const checkCarId = (req, res, next) => {
  const { id } = req.param
  cars
    .getById(id)
    .then((car) => {
      if (!car) {
        res.status(404).json({ message: `car with id ${id} is not found` })
      } else {
        req.car = car
        next()
      }
    })
    .catch((err) => {
      next(err)
    })
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  // checkCarPayload,
  // checkVinNumberValid,
  // checkVinNumberUnique,
}
