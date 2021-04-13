const express = require('express')
const carRouter = require('./cars/cars-router')

const server = express()

server.use(express.json())
server.use('/api/car', carRouter)

server.use('*', (req, res) => {
  res.json('Hello Car dealer!')
})

module.exports = server
